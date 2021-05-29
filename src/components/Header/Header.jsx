import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const yearNow = new Date().getFullYear();
  const [isSearch, setIsSearch] = useState(false);
  const [yearOptions] = useState([yearNow]);

  useEffect(() => {
    for (let index = 0; index < 20; index++) {
      const yearOption = yearOptions[yearOptions.length - 1] - 1;
      yearOptions.push(yearOption);
    }
  }, []);

  const handleSearchClick = () => {
    setIsSearch(!isSearch);
  };

  return (
    <>
      <header className="base-header">
        <a href="/" className="base-header-brand">LA-Movies</a>
        <FontAwesomeIcon icon={isSearch ? faTimes : faSearch} className="base-header-seacrh-icon" onClick={handleSearchClick} />
      </header>
      {isSearch && (
        <div className="base-header-seacrh-bar">
          <div className="base-header-seacrh-bar-filter">
            <input className="base-header-seacrh-bar-filter-keyword" type="text" placeholder="Search" />
            <select className="base-header-seacrh-bar-filter-date" name="cars" id="cars">
              <option value="">Release Date</option>
              {yearOptions.map(((year) => <option value={year} key={year}>{year}</option>))}
            </select>
          </div>
          <div className="base-header-seacrh-bar-result">
            <a href="/detail">Movies 1</a>
            <a href="/detail">Movies 1</a>
            <a href="/detail">Movies 1</a>
            <a href="/detail">Movies 1</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
