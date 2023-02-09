import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Newsletter</h1>
      <p className="p__opensans">Ne ratez rien des nouveaux menus !</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Votre adresse mail" />
      <button type="button" className="custom__button">ENVOYER</button>
    </div>
  </div>
);

export default Newsletter;
