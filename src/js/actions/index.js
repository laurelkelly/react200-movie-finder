const axios = require('axios');

// export const searchMovie = (searchTerm) => ({
//     type: 'SEARCH_MOVIE',
//     payload: { searchTerm }
// });

export const getMovies = (userInput) => ({
    type: 'GET_MOVIE_LIST',
    payload: axios.get(`/movieInfo/${userInput}`).then((res) => {
        // console.log(`Response: `, res.data);
        return {
            data: res.data
        };
    })
    .catch((err) => {
        console.log(`Error: `, err);
    })
});

export const getMovieDetails = (id) => ({
    type: 'GET_FULL_MOVIE_DETAILS',
    payload: axios.get(`/movie/${id}`).then((res) => {
        // console.log(`Response: `, res.data);
        return {
            data: res.data
        };
    })
    .catch((err) => {
        console.log(`Error: `, err);
    })
});



