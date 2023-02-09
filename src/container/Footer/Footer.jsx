import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactez-nous</h1>
        <p className="p__opensans">Adresse du restaurant</p>
        <p className="p__opensans">Numéro de tél</p>
        <p className="p__opensans">Mail</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;Le meilleur en Haute-Savoie.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horaires d'ouvertures</h1>
        <p className="p__opensans">Lundi - Vendredi :</p>
        <p className="p__opensans">11:30 - 22:30</p>
        <p className="p__opensans">Week-End :</p>
        <p className="p__opensans">11:00 - 23:30</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Royal Restaurant. Tous droits réservés.</p>
    </div>

  </div>
);

export default Footer;