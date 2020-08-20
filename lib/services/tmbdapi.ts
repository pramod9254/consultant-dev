
const request = require('request');
require('dotenv').config()

export const getTvDetails = (tvId: any): any => {
  return new Promise((resolve, reject) => {
    try {
      var options = {
        'method': 'GET',
        'url': `https://api.themoviedb.org/3/tv/${tvId}?api_key=${process.env.TMDB_TOKEN}`,
        'headers': {
        }
      };
      request(options, function (error, response) {
        if (error) {
          reject({
            status: false,
            message: error.message
          })
        };
        const result = JSON.parse(response.body);
        // console.log('result---------->', result)
        resolve({
          status: true,
          data: result
        })
      });


    } catch (err) {
      reject({
        status: false,
        message: err.message
      })
    }
  })
}

export const getEpisodes = (tvId: string, seasonNumber: any): any => {
  return new Promise((resolve, reject) => {
    // console.log('season.getEpisodes----->', tvId, seasonNumber)
    try {

      const options = {
        'method': 'GET',
        'url': `https://api.themoviedb.org/3/tv/${tvId}/season/${seasonNumber}?api_key=${process.env.TMDB_TOKEN}`,
        'headers': {
        }
      };
      request(options, function (error, response) {
        if (error) {
          reject({
            status: false,
            message: error.message
          })
        };
        const result = JSON.parse(response.body);

        resolve(result.episodes)
      });


    } catch (err) {
      reject({
        status: false,
        message: err.message
      })
    }
  });
}

