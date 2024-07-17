import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import DataContext from './Context/DataContext';

const Nav = () => {
  const {searchs,setsearch}=useContext(DataContext);
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='search'>Search Post</label>
        <input 
        id='search'
        placeholder='Search Posts' 
        type='text'
        value={searchs}
        onChange={(e)=>setsearch(e.target.value)}
        />
      </form>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/post">Post</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      </nav>

  
  )
}

export default Nav