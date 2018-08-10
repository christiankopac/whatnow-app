import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Option = (props) => {
  return (
    <div className="option">
    <p className="option__text">{props.count}. {props.optionText}</p> 
    <button
      className="button button--link"
      onClick={(e)=>{
        props.handleDeleteOption(props.optionText)
      }}
    >
    <FontAwesomeIcon icon="minus-circle"/>
    </button>
    </div>
  )
}

export default Option;