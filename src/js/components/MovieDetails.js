import React from 'react';

const MovieDetails = (props) => {
    // console.log(props.fullMovieDetails);
    return (
        <div className='row mt-5'>
            <div className='col-md-5'>
                <div className='card h-100'>
                    <img src={props.fullMovieDetails.Poster} className='detail-img' alt='image'/>
                </div>
            </div>
            <div className='col-md-7'>
                <div className='card border-info h-100'>
                    <div className='card-header bg-info text-white'><strong>Movie Details</strong></div>
                    <div className='card-body'>
                        <h5 className='card-title m-0 pb-1'><strong>{props.fullMovieDetails.Title}</strong></h5>
                        <span className='badge badge-success mr-1'>Released {props.fullMovieDetails.Year}</span>
                        <span className='badge badge-success mr-1'>{props.fullMovieDetails.Runtime} min</span>
                        <span className='badge badge-success'>{props.fullMovieDetails.Genre}</span>
                        <p className='mt-2'>{props.fullMovieDetails.Plot}</p>
                        <p><strong>Awards: </strong>{props.fullMovieDetails.Awards}</p>
                        <p className='mb-0'><strong>Metascore: </strong>{props.fullMovieDetails.Metascore}/100</p>
                        <p><strong>IMDB: </strong>{props.fullMovieDetails.imdbRating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;