import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='ui segment'>
        <div className='ui secondary pointing menu'>
            <NavLink className={`item ${({isActive}) => (isActive ? "active" : 'null')}`} end to="/">Accordion</NavLink>
            <NavLink className={`item ${({isActive}) => (isActive ? "active" : 'null')}`} to="/search">Search</NavLink>
            <NavLink className={`item ${({isActive}) => (isActive ? "active" : 'null')}`} to="/dropdown">Dropdown</NavLink>
            <NavLink className={`item ${({isActive}) => (isActive ? "active" : 'null')}`} to="/translate">Translate</NavLink>
        </div>
    </div>
  )
}

export default Header