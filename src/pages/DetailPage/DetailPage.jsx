import React from 'react';
import { useParams } from 'react-router-dom';

import './DetailPage.scss';

const DetailPage = () => {
  const { id } = useParams();
  console.log('id', id);

  return (
    <></>
  );
};

export default DetailPage;
