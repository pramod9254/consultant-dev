import { Request, Response } from 'express';
import { getTvDetails, getEpisodes } from '../services/tmbdapi';
import { cacheAction } from '../utils/cacheActions';
export interface ResponseModel {
    id: string
    name: string
    vote_average: string
    vote_count: string
  }
const processEachSeason = (tvId, seasonNumber) => {
    return new Promise(async (resolve, reject) => {
        try {
            const eposides = await getEpisodes(tvId, seasonNumber);
            resolve(eposides);
        } catch (err) {
            reject(err.message)
        }
    })
}
export class TMDBController {
    public async create(req: Request, res: Response) {
        if (!req.params.seriesId)
            return res.status(404).send({
                status: false,
                message: 'Invalid id',
            })
        try {
            const response: any = await cacheAction.getEpisodes(req.params.seriesId); 

            if(response){
                return res.status(200).send({
                    status: true,
                    data: JSON.parse(response),
                })
            }
            const tvDetails = await getTvDetails(req.params.seriesId);

            if (tvDetails && tvDetails.status) {

                if (!tvDetails.data || !tvDetails.data.seasons || tvDetails.data.seasons.length <= 0) {
                    return res.status(404).send({
                        status: false,
                        message: 'Seasons are empty',
                    })
                }


                Promise.all(tvDetails.data.seasons.map(season => processEachSeason(req.params.seriesId, season.season_number)))
                    .then(episodes => {
                        let allEepisodes = [].concat.apply([], episodes);
                        allEepisodes = allEepisodes.sort((a, b) => b.vote_count * b.vote_average  - a.vote_count * a.vote_average).slice(0,20);
                        const resArr: ResponseModel =  allEepisodes.map(val => {
                            return {
                                id: val.id,
                                name: val.name,
                                vote_count: val.vote_count,
                                vote_average: val.vote_average
                            }
                        })
                        cacheAction.setEpisodes(req.params.seriesId, JSON.stringify(resArr));
                        res.status(200).send({
                            status: true,
                            data: resArr,
                        })
                    }).catch(err => {
                        return res.status(500).send({
                            status: false,
                            message: err,
                        })
                    });


            } else {
                return res.status(500).send({
                    status: false,
                    message: tvDetails.message,
                })
            }
        } catch (err) {
            res.status(500).send({
                status: false,
                message: err.message,
            })
        }
    }
}