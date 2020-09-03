import { useTranslation } from 'react-i18next';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React from 'react';
import {
    Link,
  } from "react-router-dom";
function Nav(){
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    function changeLang(e){
      i18n.changeLanguage(e);
    }
    return(
        <header className="bg-white black-80 tc pv4 avenir">
          <img src="assets/logo.png" className="h2"></img>
          <nav className="bt bb tc mw8 center mt4">
              <Link to="/" className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l">{t('home')}</Link>
              <Link to="/itemCardList" className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l">{t('about')}</Link>
              <Link to="/itemCardList" className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l">{t('contact')}</Link>
              <Link to="/about" className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l">{t('login')}</Link>
              <Link to="/Contact" className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l">{t('register')}</Link>
              <DropdownButton id="dropdown-basic-button" title={t('language')} className="di" variant="light">
                <Dropdown.Item eventKey="en" onSelect={changeLang}>English</Dropdown.Item>
                <Dropdown.Item eventKey="cn" onSelect={changeLang}>Chinese</Dropdown.Item>
              </DropdownButton>
          </nav>
      </header>
    );
}

export default Nav;
