import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

const Navigation = (props) => (
  <div>
    <ul>
      <li><Link to="/home" ><FormattedMessage id="home" /></Link></li>
      <li><Link to="/" ><FormattedMessage id="posts" /></Link></li>
      <li><Link to="/about" ><FormattedMessage id="about" /></Link></li>
    </ul>
  </div>
);

Navigation.propTypes = {
};

export default Navigation;
