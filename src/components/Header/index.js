import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Link className='logo' to={location => '/'}>Filmaria</Link>
            <Link className='favoritos' to='/favoritos'>Salvos</Link>
        </header>
    )
}

/*
  <Link to={location => `${location.pathname}?sort=name`} />
*/
