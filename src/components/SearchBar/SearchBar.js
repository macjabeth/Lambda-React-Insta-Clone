import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchBar = (props) => (
  <header>
    <div>
      <i className="fab fa-instagram"></i>
      <h1>Instagram</h1>
    </div>
    <input type="search" className="fas" placeholder="&#xf002; Search" aria-label="Search through content" onChange={props.filterPosts} />
    <div className="nav">
      <i className="far fa-compass"></i>
      <i className="far fa-heart"></i>
      <i className="far fa-user"></i>
    </div>
  </header>
);

SearchBar.propTypes = {
  filterPosts: PropTypes.func.isRequired
}

export default SearchBar;
