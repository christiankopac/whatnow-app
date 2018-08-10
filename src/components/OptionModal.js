import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    className="modal"
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    >
    <h3 className="modal__title">You should pick:</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button modal__button" onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;