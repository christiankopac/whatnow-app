import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">
           {props.title}
        </h1>
        <h2 className="header__subtitle">
          <FontAwesomeIcon icon="server"/> Let <a href={props.supercomputerUrl} target="_blank">{props.supercomputerName}</a> decide...
        </h2>
        </div>
      </div>
  )

}

Header.defaultProps = {
  title: 'WhatNow?',
  subtitle: 'YATDA'
}

export default Header