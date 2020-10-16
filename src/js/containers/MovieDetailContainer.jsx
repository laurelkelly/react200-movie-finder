import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';

class MovieDetailContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h1 className='text-center p-3'>Movie Finder</h1>
                <Link to='/'>Go Back </Link>
                <MovieDetails fullMovieDetails={this.props.movie.fullMovieDetails} />
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
    return {
        movie: store.movie,
    };
}

export default connect(mapStoreToProps)(MovieDetailContainer);