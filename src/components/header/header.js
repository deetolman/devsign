import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/trending">Trending Tweets</Link>
        <Link to="/signout">Sign Out</Link>
      </nav>
    </header>
  );
}
