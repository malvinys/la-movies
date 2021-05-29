import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import { fetchSearchMovie, moviesSelector } from '../../models/Movies';

const Header = () => {
  const dispatch = useDispatch();
  const { search } = useSelector(moviesSelector);
  const yearNow = new Date().getFullYear();
  const [isSearch, setIsSearch] = useState(false);
  const [yearOptions] = useState([yearNow]);
  const [keywords, setKeywords] = useState();
  const [filterYear, setFilterYear] = useState();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    for (let index = 0; index < 20; index++) {
      const yearOption = yearOptions[yearOptions.length - 1] - 1;
      yearOptions.push(yearOption);
    }
  }, []);

  useEffect(() => {
    dispatch(fetchSearchMovie(keywords, filterYear));

    if (search.results) {
      setSearchResults(search.results.results);
    }
  }, [dispatch, keywords, filterYear]);

  const handleSearchClick = () => {
    setIsSearch(!isSearch);
  };

  const handleKeywordsChange = (input) => {
    setKeywords(input);
  };

  const handleFilterDateChange = (input) => {
    setFilterYear(input);
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
            <input className="base-header-seacrh-bar-filter-keywords" type="text" placeholder="Search" onChange={(e) => handleKeywordsChange(e.target.value)} />
            <select className="base-header-seacrh-bar-filter-date" onChange={(e) => handleFilterDateChange(e.target.value)}>
              <option value="">Release Date</option>
              {yearOptions.map(((year) => <option value={year} key={year}>{year}</option>))}
            </select>
          </div>
          {searchResults.length > 0 && (
            <div className="base-header-seacrh-bar-result">
              {searchResults.map((item) => <a href={`/${item.id}`} key={item.id}>{item.title}</a>)}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
