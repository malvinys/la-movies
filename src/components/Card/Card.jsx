import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Utils from '../../helpers/Utils';

const Card = ({
  id, title, image, rating, releaseDate,
}) => (
  <>
    <a href={`/${id}`}>
      <div className="base-card">
        <div className="base-card-image">
          <LazyLoadImage src={image} alt={title} effect="blur" />
        </div>
        <div className="base-card-rating">{rating}</div>
        <div className="base-card-content">
          <h2>{title}</h2>
          <p>{Utils.formattedDate(releaseDate)}</p>
        </div>
      </div>
    </a>
  </>
);

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.number,
  releaseDate: PropTypes.string,
};

Card.defaultProps = {
  id: null,
  title: null,
  image: null,
  rating: null,
  releaseDate: null,
};

export default Card;
