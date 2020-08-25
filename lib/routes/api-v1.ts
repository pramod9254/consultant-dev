import { Request, Response, NextFunction } from 'express';
import { TMDBController } from '../controllers/tmdb';

export class Routes {
  public tmdbController: TMDBController = new TMDBController()

  public routes(app): void {
    app.use((req: Request, res: Response, next: NextFunction) => {
      const { httpVersion, method, url } = req
      res.on('finish', () => {
        try {
          console.log(
            `${req.hostname} "${
            req.headers['user-agent']
            }" [${new Date().toISOString()}]  "${method} ${url} ${req.protocol}/${httpVersion}" ${
            res.statusCode
            } ${res.get('Content-Length') || 0} `
          )
        } catch (err) {
          console.log(err)
        }
      })
      next()
    })

    // tmdb endpoints
    app.get('/topEpisodes/:seriesId', this.tmdbController.create)

    // Catch all other routes and return the index file
    app.get('*', (req: Request, res: Response) => {
      res.status(404).send({
        message: 'Not found!!',
      })
    })
  }
}
