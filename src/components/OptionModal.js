import React from 'react';
import Modal from 'react-modal';



const OptionModal = (props) => (
    <Modal
        isOpen = {!!props.selectedOption} // al ponerle !! va a ser false cuando este undefined y true cuando tenga string
        contentLabel = "Opcion Ganadora" //opcion para screenreaders
        onRequestClose = {props.handleClearSelected} //para que se cierre cuando se apriete esc o click afuera del modal
        closeTimeoutMS= {200}
        className='modal'
    >
        <h3 className="modal__title">Ganador</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p> }
        <button className="button" onClick = {props.handleClearSelected} >Ok</button>
    </Modal>
    

);

export default OptionModal;