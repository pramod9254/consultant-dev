
import Redis from 'ioredis'
Redis.Promise = Promise
import { Storage, StoreItems } from "botbuilder";
require('dotenv').config()

const REDIS_SESSION_TIMEOUT = (process.env.REDIS_SESSION_TIMEOUT || '3600')

export class RedisStorage implements Storage {

  private config;
  private client;

  constructor() {

    console.log(`Redis init - start`)

    this.config = {
      slotsRefreshTimeout: 2000,
      keyPrefix: process.env.REDIS_KEY_PREFIX,
      clusterRetryStrategy: function (attempt) {
        console.log(`There is a problem connecting to Redis cluster. Attempt ${attempt}`)
        try {
          const redisRetry = parseInt(process.env.REDIS_RETRY)
          console.log(`Redis retry in ${redisRetry / 1000} seconds`)
          return redisRetry
        } catch (err) {
          console.log('Redis process.env.REDIS_RETRY not defined, defaulting retry attempt in 5 seconds')
          return 5000
        }
      }
    };

    const nodes = this.getClusterNodeConfig()
    console.log(`Redis nodes: ${JSON.stringify(nodes)}`)

    try {
      this.client = new Redis(nodes, this.config); //new Redis('//localhost:6379');
    } catch (err) {
      console.log(`Unable to start Redis cluster: ${err}`)
    }

    console.log(`Redis init - end`)
  }

  /**
   * Get Cluster Node Configuration 
   */
  private getClusterNodeConfig(): object {

    if (!process.env.REDIS_HOST && !process.env.REDIS_PORT) {
      console.log(`Missing required Redis configuraiton REDIS_HOST and REDIS_PORT`)
      process.exit(1)
    }

    let nodes = [
      {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
      }
    ]

    return nodes
  }

  /**
   * Read - Botkit Inheritted
   * @param stateKeys 
   */
  public async read(stateKeys: string[]): Promise<StoreItems> {

    console.log(`Redis read request: id ${JSON.stringify(stateKeys)}`)

    if (!stateKeys || stateKeys.length == 0) {
      return {};
    }

    let keys = []
    for (const key in stateKeys) {
      keys.push(stateKeys[key])
    }

    console.log('keys ' + JSON.stringify(keys));

    try {
      const data = await this.client.hget(keys[0], keys[0])
      console.log(`Redis read response: id ${keys[0]} : key ${keys[0]} : value ${JSON.stringify(data)}`)
      if (!data) return {}
      return data;
    } catch (err) {
      const msg = `redis error getting redis kvp ${keys} - ${err}`
      console.log(msg);
      throw new Error(msg)
    }

  }

  /**
   * Botkit Inherited
   * @param changes
   */
  public async write(changes: StoreItems): Promise<void> {

    console.log(`Redis write request: ${JSON.stringify(changes)}`)

    if (!changes || Object.keys(changes).length === 0) {
      return;
    }

    for (const key in changes) {
      try {
        const data = await this.client.hset(key, key, JSON.stringify(changes[key]))
        console.log(`Redis write response: id ${key} : key ${key} : value ${JSON.stringify(changes[key])}`)
        await this.resetKeyTtl(key, REDIS_SESSION_TIMEOUT)

      } catch (err) {
        console.log(`error setting redis kvp ${key} - ${changes[key]} - ' + ${err}`);
      }
    }

    return
  }

  /**
   * Botkit Inherited
   * @param keys
   */
  public async delete(keys: string[]): Promise<void> {
    if (!keys || keys.length == 0) {
      return;
    }
  }

  /**
     * Set Cache Value by key
     * @param {string} id
     * @param {string} key
     * @param {string} value
     * @param {boolean} expire
     * @returns {Promise<boolean>}
  */

  public async setCacheKeyValue(id: string, key: string, value: string, expire: boolean = true) {
    console.log(`Redis setCacheKeyValue Request: id ${id} : key ${key} : value`, value)
    if (!id || !key || !value) {
      throw new Error(`Redis setCacheKeyValue id,key, or value missing`)
    }

    //if object value then convert to string
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }

    try {
      await this.client.hmset(id, key, value)
    } catch (err) {
      const msg = `Redis setCacheKeyValue - Error setting kvp - ${err}`
      console.log(msg)
      throw new Error(msg)
    }
  }

  /**
   * Get cache value by key
   * @param {string} id
   * @param {string} key
   * @returns {Promise<any>}
   */
  public async getCacheKeyValue(id: string, key: string): Promise<any> {

    console.log(`Redis getCacheKeyValue Request ${id} : key ${key} `)

    if (!id || !key) {
      throw new Error(`getCacheKeyValue id and key required`)
    }

    try {
      const data = await this.client.hget(id, key)

      if (!data) {
        console.log(`getCacheKeyValue id/key not found ${id} : ${key}`)
        return
      }

      console.log(`Redis getCacheKeyValue Response: device ${id} : key ${key} : value {${data}} `)
      return data

    } catch (err) {
      throw new Error(`getCacheKeyValue there was a problem getting key value ${id} : key ${key} : ${err}`)
    }
  }

  /**
     * Delete Cache key
     * @param {string} id
     * @param {string} key
     * @returns {Promise<any>}
     */
  public async deleteCacheKey(id: string, key: string): Promise<any> {
    console.log(`Redis deleteCacheKey Request: Cache ${id} : key ${key} `)

    if (!id || !key) {
      throw new Error(`deleteCacheKey id and key required`)
    }

    try {
      this.client.hget(id, key)
    } catch (err) {
      console.log(`Redis deleteCacheKey Error : ${err}`)
    }
  }

  public async resetKeyTtl(id: string, timeout: string) {
    console.log(`Redis resetKeyTtl Request: id ${id} : ttl reset value ${timeout}`)

    const data = await this.client.expire(id, timeout)

    if (data === 1) {
      console.log(`Redis resetKeyTtl updated to ${timeout} seconds, for ${id}`)
    } else {
      console.log(`Redis resetKeyTtl - ttl not applied - code ${data}`)
    }
  }

}
