import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';

import { siteLogo } from '../assets';
import '../stylesheets/Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <Container className={`header-wrapper ${isOpen ? 'open' : ''}`}>
        <div className="site-logo">
          <img src={siteLogo} alt="site logo" width="140" height="25" />
        </div>

        <div className="toggler" onClick={() => setIsOpen(open => !open)}>
          <hr />
          <hr />
          <hr />
        </div>

        <nav className="site-navigation">
          <div className="nav-links">
            <span className="nav-link">About</span>
            <span className="nav-link">Discover</span>
            <span className="nav-link">Get Started</span>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
