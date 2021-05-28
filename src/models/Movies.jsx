/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import Api from '../configs/Api';
import Request from '../helpers/Request';

export const Movies = createSlice({
  name: 'movies',
  initialState: {
    movies: null,
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

export const setMoviesReducer = async (dispatch, movies) => {
  const { count, next, data } = await movies;
  dispatch(moviesActions.setMovies({ count, next, data }));
};

export const fetchMovies = (nextPageUrl = null) => async (dispatch) => {
  if (!nextPageUrl) {
    const resMovies = await Request.backend('GET', Api.getMovies);
    setMoviesReducer(dispatch, resMovies);
  }
};
