import React from 'react';

const Card = () => (
  <>
    <a href="/detail">
      <div className="base-card">
        <div className="base-card-image">
          <img loading="lazy" className=" poster" src="https://www.themoviedb.org/t/p/w220_and_h330_face/kLEha9zVVv8acGFKTX4gjvSR2Q0.jpg" alt="" />
        </div>
        <div className="base-card-rating">74</div>
        <div className="base-card-content">
          <h2>The Vampire Diaries</h2>
          <p>Sep 10, 2009</p>
        </div>
      </div>
    </a>
  </>
);

export default Card;
