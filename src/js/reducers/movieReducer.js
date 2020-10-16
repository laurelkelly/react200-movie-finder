const defaultState = {
    // searchTerm: '',
    searchResultsArray: [],
    fullMovieDetails: {}
}

export default function movieReducer (state = defaultState, action) {
    const {type, payload } = action;
    // console.log(type);

    switch(type) {
        // case 'SEARCH_MOVIE': {
        //     console.log('something', payload.searchTerm);
        //     return {
        //         ...state,
        //         searchTerm: payload.searchTerm
        //     };
        // }
        case 'GET_MOVIE_LIST_FULFILLED': {
            // console.log('anything', payload.data);
            return {
                ...state,
                searchResultsArray: payload.data.Search
            };
        }
        case 'GET_FULL_MOVIE_DETAILS_FULFILLED': {
            // console.log('throw me a bone', payload.data);
            return {
                ...state,
                fullMovieDetails: payload.data
            }
        }
        default: {
            return state;
        }
    }
}