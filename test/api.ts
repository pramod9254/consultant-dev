
import 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
import app from '../lib/app';
import { expect } from 'chai'

const checkSorting = (episodes) => {
  for (let i = 0; i < episodes.len - 1; i++) {
    if (episodes[i].vote_count * episodes[i].vote_average > episodes[i + 1].vote_count * episodes[i + 1].vote_average) {
      return false;
    }
  }
  return true;
}

describe('#fetchSeries()', function () {

  //positive scenario
  it('check the API response(positive scenario)', function (done) {
    chai.request(app).get('/topEpisodes/97186')
      .end((err: any, res: any) => {
        
        expect(res.status).to.be.equal(200);
        done();
      });
  })


  it('check the API response(negeative scenario)', function (done) {
    chai.request(app).get('/episodes/97186')
      .end((err: any, res: any) => {
        console.log(res.status)
        expect(res.status).to.be.equal(404);
        done();
      });
  })

  it('check if responses are found', function (done) {
    chai.request(app).get('/topEpisodes/97186')
      .end((err: any, res: any) => {
        expect(res.body.data).to.be.an('array');
        res.body.data.every(i => expect(i).to.have.all.keys('id', 'name', 'vote_average', 'vote_count'))
        done();
      });
  })

  it('check if there are max 20 episodes', function (done) {
    chai.request(app).get('/topEpisodes/97186')
      .end((err: any, res: any) => {
        expect(res.body.data.length).to.be.at.most(20);;
        done();
      });
  })

  it('check if the responses are in descending order', function (done) {
    chai.request(app).get('/topEpisodes/97186')
      .end((err: any, res: any) => {
        const isSorted = checkSorting(res.body.data)
        expect(isSorted).to.be.true;
        done();
      });
  })

})