import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { fetchDetailMovie, moviesSelector } from '../../models/Movies';

import Api from '../../configs/Api';

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movie } = useSelector(moviesSelector);
  const [backdrop, setBackdrop] = useState();
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [releaseYear, setReleaseYear] = useState();
  const [rating, setRating] = useState();
  const [overview, setOverview] = useState();

  useEffect(() => {
    dispatch(fetchDetailMovie(id));
  }, [dispatch]);

  useEffect(() => {
    if (movie) {
      const backdropUrl = Api.baseUrlDetailBackdrop + movie.backdrop_path;
      const imageUrl = Api.baseUrlDetailImage + movie.poster_path;
      const releaseDate = new Date(movie.release_date);
      const getReleseYear = releaseDate.getFullYear();

      setBackdrop(backdropUrl);
      setImage(imageUrl);
      setTitle(movie.title);
      setReleaseYear(getReleseYear);
      setRating(movie.vote_average);
      setOverview(movie.overview);
    }
  }, [movie]);

  return (
    <>
      <section className="base-section section-movie-detail" style={{ backgroundImage: `linear-gradient(to right, rgB(0,0,0, 0.8) 0%, rgB(0,0,0, 0.6) 100%), url("${backdrop}")` }}>
        {image && <LazyLoadImage className="section-movie-detail-image" src={image} alt={title} effect="blur" />}
        {title && (
          <div className="section-movie-detail-content">
            <h2>
              {title}
              <span>
                (
                {releaseYear}
                )
              </span>
            </h2>
            <div className="section-movie-detail-content-rating">{rating}</div>
            <p>
              Overview
              <br />
              <span>{overview}</span>
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default DetailPage;
