
import 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
import app from '../lib/app';
import { expect } from 'chai'

const isSorte = (episodes) => {
  for (let i = 0; i < episodes.len - 1; i++) {
    if (episodes[i].vote_count * episodes[i].vote_average > episodes[i + 1].vote_count * episodes[i + 1].vote_average) {
      return false;
    }
  }
  return true;
}

describe('#fetchSeries()', function () {
  it('check status, episodes length and sorting order', function (done) {
    chai.request(app).get('/topEpisodes/97186')
      .end((err: any, res: any) => {
        expect(res.body.status).to.be.true;
        expect(res.body.data.length).to.be.at.most(20);;
        const isSorted = isSorte(res.body.data)
        expect(isSorted).to.be.true;
        expect(res.body.data).to.be.an('array');
        res.body.data.every(i => expect(i).to.have.all.keys('id', 'name', 'vote_average', 'vote_count'))
        done();
      });
  })

})