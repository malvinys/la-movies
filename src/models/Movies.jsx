/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import Api from '../configs/Api';
import Request from '../helpers/Request';

export const Movies = createSlice({
  name: 'movies',
  initialState: {
    movies: null,
    movie: null,
    filters: {
      keywords: null,
      year: null,
      result: [],
    },
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const moviesActions = Movies.actions;
export const moviesSelector = (state) => state.movies;
export const moviesReducer = Movies.reducer;

export const fetchMovies = () => async (dispatch) => {
  const resMovies = await Request.backend('GET', Api.getMovies);
  dispatch(moviesActions.setMovies(resMovies));
};
