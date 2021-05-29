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
    search: {
      keywords: null,
      year: null,
      results: null,
    },
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const moviesActions = Movies.actions;
export const moviesSelector = (state) => state.movies;
export const moviesReducer = Movies.reducer;

export const fetchMovies = () => async (dispatch) => {
  const res = await Request.backend('GET', Api.getMovies);
  dispatch(moviesActions.setMovies(res));
};

export const fetchDetailMovie = (id) => async (dispatch) => {
  const res = await Request.backend('GET', `${Api.getDetailMovie}/${id}`);
  dispatch(moviesActions.setMovie(res));
};

export const fetchSearchMovie = (keywords, year) => async (dispatch) => {
  const res = await Request.backend('GET', `${Api.getSearchMovie}?query=${keywords || 'a'}&year=${year || ''}`);
  dispatch(moviesActions.setSearch({ keywords, year, results: res }));
};
