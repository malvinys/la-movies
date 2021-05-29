import React from 'react';
import { Helmet } from 'react-helmet';

import './assets/saas/App.scss';
import Routes from './routes/Routes';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="base-container">
      <Helmet>
        <title>LA-Movies</title>
      </Helmet>
      <Header />
      <Routes />
    </div>
  );
}

export default App;
