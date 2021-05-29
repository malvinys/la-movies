import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';

const DetailPage = () => {
  const { id } = useParams();
  console.log('id', id);

  return (
    <>
      <div className="base-container">
        <Header />
        <section className="base-section section-movie-detail" style={{ backgroundImage: 'linear-gradient(to right, rgB(0,0,0, 0.8) 0%, rgB(0,0,0, 0.6) 100%), url("banner.jpg")' }}>
          <img className="section-movie-detail-image" src="movie-detail.jpg" alt="" />
          <div className="section-movie-detail-content">
            <h2>
              Movie 1
              <span>(2021)</span>
            </h2>
            <div className="section-movie-detail-content-rating">74</div>
            <p>
              Overview
              <br />
              <span>
                A group of unlikely heroes from across the Korean peninsula try to save the day
                after a volcano erupts on the mythical and majestic Baekdu Mountain.
              </span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default DetailPage;
