import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route, Switch } from 'react-router-dom';
import { ZooniverseLogo } from 'zooniverse-react-components';

import AuthContainer from '../containers/AuthContainer';
import AboutLayout from './about';
import Header from './Header';
import Home from './Home';
import Weather from './Weather';

export default function App() {
  return (
    <div>
      <header className="site-header">
        <Header />
      </header>
      <section className="content-section">
        <div className="content-section__container">
          <Weather />
        </div>
      </section>
    </div>
  );
}
