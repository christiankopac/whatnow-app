import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>Let <a href={props.supercomputerUrl} target="_blank">{props.supercomputerName}</a> decide...</h2>
      </div>
  )

}

Header.defaultProps = {
  title: 'WhatNow?',
  subtitle: 'YATDA'
}

export default Header