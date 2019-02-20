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
      <i onClick={props.logout} className="far fa-user" title="Logout"></i>
    </div>
  </header>
);

SearchBar.propTypes = {
  filterPosts: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

export default SearchBar;
