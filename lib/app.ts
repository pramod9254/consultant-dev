import * as express from 'express'
import * as bodyParser from 'body-parser'
import { Routes } from './routes/api-v1'

require('dotenv').config()

class App {
  public app: express.Application = express()
  public routePrv: Routes = new Routes()

  constructor() {
    this.config()
    this.routePrv.routes(this.app)
  }

  private config(): void {
    this.app.use(bodyParser.json({ limit: '50mb' }))
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))
  }

}

export default new App().app
