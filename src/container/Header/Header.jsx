import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Goûter de nouvelles saveurs" />
      <h1 className="app__header-h1">Restaurant Gastronomique</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Le restaurant gastronomique à tester après une belle promenade. </p>
      <button type="button" className="custom__button">Réserver</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
