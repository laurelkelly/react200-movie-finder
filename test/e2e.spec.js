/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const assert = require('chai').assert;
const axios = require('axios');
const Actions = require('nightmare-react-utils').Actions;

Nightmare.action(...Actions);

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const url = 'http://localhost:8888';

// describe('movie finder actions', () => {
//   it('getMovies should create GET_MOVIE_LIST action', () => {
//     expect(actions.getMovies()).toEqual({
//       type: 'GET_MOVIE_LIST'
//     })
//   });
// });

describe('Movie Finder', function main() {
  this.timeout(12000);
  this.slow(4000);

  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('should have a constructor', () => 
    nightmare
      .goto(url)
      .react.findAll('constructor')
      .then((element) => {
        expect(element).to.exist;
      })
  );

  it('should have a getMovies function', () => 
    nightmare
      .goto(url)
      .react.findAll('getMovies')
      .then((element) => {
        expect(element).to.exist;
      })
  );

  it('getMovies should return type array', () => 
    nightmare
    .goto(url)
    .react.findAll('getMovies')
    .then((element) => {
      assert.typeOf(element, 'array');
    })
  );

  it('should have a getMovieDetails function', () => 
    nightmare
    .goto(url)
    .react.findAll('getMovieDetails')
    .then((element) => {
      expect(element).to.exist;
    })
  );

  it('getMovieDetails should return type array', () => 
    nightmare
    .goto(url)
    .react.findAll('getMovieDetails')
    .then((element) => {
      assert.typeOf(element, 'array');
    })
  );

  it('should contain an <input> element with an id of "search-term" for user to enter a search term', () =>
    nightmare
      .goto(url)
      .react.findAll('input.search-term')
      .then((element) => {
        expect(element[0]).to.not.be.null;
        expect(typeof element).to.equal('object');
      })
  );

  it('should contain a <button> element with a type of "submit" for user to submit the search term', () =>
    nightmare
      .goto(url)
      .react.findAll('button.submit')
      .then((element) => {
        expect(element[0]).to.not.be.null;
        expect(typeof element).to.equal('object');
      })
  );

  it('should contain a <div> element with a className of "card" to display each search result', () =>
  nightmare
    .goto(url)
    .react.findAll('div.card')
    .then((element) => {
      expect(element[0]).to.not.be.null;
      expect(typeof element).to.equal('object');
    })
  );  

  it('should contain a <Link> element with a className of "btn" and text of "More Information" for user to get the full movie details', () =>
  nightmare
    .goto(url)
    .react.findAll('Link.btn')
    .then((element) => {
      expect(element[0]).to.not.be.null;
      expect(typeof element).to.equal('object');
    })
    // .then((text) => {
    //   expect(text).to.equal('More Information');
    // })
  );
});


describe('Array', function() {
  it('should start empty', function() {
    const arr = [];

    assert.equal(arr.length, 0);
  });
});


describe('express', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('should have the correct page title', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('h1').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Movie Finder');
      })
  ).timeout(12000);

  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));
});
