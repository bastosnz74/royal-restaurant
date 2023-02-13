import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Le mot du chef" />
      <h1 className="headtext__cormorant">Le meilleur pour ma clientèle</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />

          <p className="p__opensans">Description du chef</p>
        </div>
      </div>

      <div className="app__chef-sign">
        <p>/</p>
        <p className="p__opensans">Nom du chef</p>
      </div>
    </div>
  </div>
);

export default Chef;
