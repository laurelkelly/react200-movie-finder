import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import MovieSearchContainer from './containers/MovieSearchContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Router>
        <div className='container w-75'>
            <Route exact path='/' component={props =>  <MovieSearchContainer {...props} />} />
            <Route path='/movie/:id' component={props => <MovieDetailContainer {...props} />} />
        </div>
      </Router>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    movie: store.movie
  };
}

export default connect(mapStoreToProps)(App);
