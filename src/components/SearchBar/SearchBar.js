import React from 'react';
import './SearchBar.css';

const SearchBar = () => (
  <header>
    <div>
      <i className="fab fa-instagram"></i>
      <h1>Instagram</h1>
    </div>
    <input type="search" placeholder="Search" aria-label="Search through content" />
    <div className="nav">
      <i className="far fa-compass"></i>
      <i className="far fa-heart"></i>
      <i className="far fa-user"></i>
    </div>
  </header>
);

export default SearchBar;
