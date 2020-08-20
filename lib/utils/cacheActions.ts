import { RedisStorage } from "../middleware/redis";
export enum State {
    episodes = 'episodes'
}

let Cache = new RedisStorage();;
export const cacheAction = {
    getEpisodes: async (tvId) => {
        return new Promise(async (resolve, reject) => {
            try {
                let res = await Cache.getCacheKeyValue(tvId, State.episodes);

                resolve(res);
            } catch (err) {
                console.log(`getEpisodes Error : ${err}`);
                resolve(false);
            }
        })
    },
    setEpisodes: async (tvId, episodes) => {
        const res = Cache.setCacheKeyValue(tvId, State.episodes, episodes);
        return res;
    }
}