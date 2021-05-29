import React from 'react';

import './assets/saas/App.scss';
import Routes from './routes/Routes';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="base-container">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
