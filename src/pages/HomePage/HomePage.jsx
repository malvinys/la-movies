import React from 'react';

import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';

const HomePage = () => (
  <>
    <div className="base-container">
      <Header />
      <section className="base-section section-banner" style={{ backgroundImage: 'linear-gradient(to right, rgB(3,37,65, 0.8) 0%, rgB(3,37,65, 0) 100%), url("banner.jpg")' }}>
        <div className="section-banner-title">
          <h2>Welcome.</h2>
          <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
        </div>
      </section>
      <section className="base-section section-movies">
        <h2>What&apos;s Popular</h2>
        <div className="section-movies-cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  </>
);
export default HomePage;
