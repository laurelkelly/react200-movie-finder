import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = (props) => {
    // console.log(props.searchResultsArray);
    return (
        <div>
            { props.searchResultsArray.map((eachMovie) => {
                return (
                    <div 
                        className='card mb-3 p-3 border border-dark rounded-0' 
                        key={eachMovie.imdbID} 
                        id={eachMovie.imdbID}
                    >
                        <div className='row'>
                            <div className='col-md-3'>
                                <img src={eachMovie.Poster} className='card-img' alt='image'/>
                            </div>
                            <div className='col-md-9'>
                                <div className='card-body p-0 d-flex flex-column h-100'>
                                    <h5 className='card-title m-0 pt-2'>{eachMovie.Title}</h5>
                                    <p className='card-text m-0'><small className='text-muted'>{eachMovie.Year}</small></p>
                                    <hr className='border-top border-dark m-2'/>
                                    <Link 
                                        onClick={ () => props.onClick(eachMovie.imdbID) }
                                        className='btn btn-primary align-self-end mt-auto text-white' 
                                        to={`/movie/${eachMovie.imdbID}`}>More Information 
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            )}
        </div>
    );
}

export default MovieList;

/*
<a href='#' className='btn btn-primary align-self-end mt-auto'>
    <Link 
    // onClick={ () => props.onClick(eachMovie.imdbID) }
    className='text-white' 
    to={eachMovie.imdbID}>More Information </Link>
</a>
*/