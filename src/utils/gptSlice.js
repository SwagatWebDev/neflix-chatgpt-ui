import {createSlice} from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        moviesResults: null,
        movieNames: null,
        clearMovies: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        clearMovieResult: (state, action) => {
            state.clearMovies = [];
        }
    }
});

export const {toggleGptSearchView, addGptMovieResult, clearMovies} = gptSlice.actions;

export default gptSlice.reducer;
