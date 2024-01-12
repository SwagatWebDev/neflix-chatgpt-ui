import {createSlice} from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        moviesResults: null,
        movieNames: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const {movieNames, moviesResults} = action.payload;
            state.movieNames = movieNames;
            state.moviesResults = moviesResults;
        }
    }
});

export const {toggleGptSearchView, addGptMovieResult} = gptSlice.actions;

export default gptSlice.reducer;
