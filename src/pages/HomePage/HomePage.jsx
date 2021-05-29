import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMovies, moviesSelector } from '../../models/Movies';

import Api from '../../configs/Api';
import Card from '../../components/Card/Card';

const HomePage = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector(moviesSelector);
  const [banner, setBanner] = useState();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    if (movies && movies.results.length > 0) {
      const randomBanner = Math.floor(Math.random() * movies.results.length);
      const bannerUrl = Api.baseUrlBanner + movies.results[randomBanner].backdrop_path;
      setBanner(bannerUrl);
    }
  }, [movies]);

  return (
    <>
      <section className="base-section section-banner" style={{ backgroundImage: `linear-gradient(to right, rgB(3,37,65, 0.8) 0%, rgB(3,37,65, 0) 100%), url("${banner}")` }}>
        <div className="section-banner-title">
          <h2>Welcome.</h2>
          <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
        </div>
      </section>
      <section className="base-section section-movies">
        <h2>What&apos;s Popular</h2>
        <div className="section-movies-cards">
          {movies && movies.results.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              image={Api.baseUrlListCard + item.poster_path}
              rating={item.vote_average}
              releaseDate={item.release_date}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
