import { Request, Response } from 'express';
import { getTvDetails, getEpisodes } from '../services/tmbdapi';
import { cacheAction } from '../utils/cacheActions';

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
        if (!req.params.tvId)
            return res.status(404).send({
                status: false,
                message: 'Invalid id',
            })
        try {
            const response: any = await cacheAction.getEpisodes(req.params.tvId); 

            if(response){
                return res.status(200).send({
                    status: true,
                    data: JSON.parse(response),
                })
            }
            const tvDetails = await getTvDetails(req.params.tvId);

            if (tvDetails && tvDetails.status) {

                if (!tvDetails.data || !tvDetails.data.seasons || tvDetails.data.seasons.length <= 0) {
                    return res.status(404).send({
                        status: false,
                        message: 'Seasons are empty',
                    })
                }


                Promise.all(tvDetails.data.seasons.map(season => processEachSeason(req.params.tvId, season.season_number)))
                    .then(episodes => {
                        let allEepisodes = [].concat.apply([], episodes);
                        allEepisodes = allEepisodes.sort((a, b) => b.vote_count * b.vote_average  - a.vote_count * a.vote_average).slice(0,20);
                        cacheAction.setEpisodes(req.params.tvId, JSON.stringify(allEepisodes));
                        res.status(200).send({
                            status: true,
                            data: allEepisodes,
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