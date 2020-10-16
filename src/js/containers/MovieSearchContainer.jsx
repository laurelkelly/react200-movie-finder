import React from 'react';
import { connect } from 'react-redux';
import MovieInput from '../components/MovieInput';
import MovieList from '../components/MovieList';

import {
    getMovies, getMovieDetails
} from '../actions/index';

class MovieSearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    handleSubmit(userInput) {
        const { dispatch } = this.props;
        dispatch(getMovies(userInput));
    }

    onClick(id) {
        const { dispatch } = this.props;
        dispatch(getMovieDetails(id));
        // console.log(this.props.movie.fullMovieDetails);
    }

    render() {
        return (
            <div>
                <h1 className='text-center p-3'>Movie Finder</h1>
                <p>Test 3</p>
                <MovieInput handleSubmit={this.handleSubmit} />
                <MovieList onClick={this.onClick} searchResultsArray={this.props.movie.searchResultsArray} />
            </div>
        )
    }
}

const mapStoreToProps = (store) => {
    return {
        movie: store.movie,
    };
}

export default connect(mapStoreToProps)(MovieSearchContainer);


// Moved handleInputChange() to the MovieInput component and utilized Hooks--

// this.handleInputChange = this.handleInputChange.bind(this);

// handleInputChange(e) {
//     const { dispatch } = this.props;
//     const { value } = e.target;
//     dispatch(searchMovie(value));
//     // console.log(this.props.movie.searchResultsArray);
// }

// componentDidMount (){
//     console.log(`Data: `, this.props.movie.searchResultsArray);
// }