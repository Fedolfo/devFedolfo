import PropTypes from "prop-types"
import React from 'react';

const Modal = ({ id = 'modal', onClose = () => {}, children }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };
 return (
   <div id='modal' className='modal' onClick={ handleOutsideClick }>
     <div className='container'>
       <button type='button' className='close' onClick={ onClose }/>
       <div className='content'>{children}</div>
     </div>
   </div>
 );
};

Modal.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  onClose: PropTypes.func
}.isRequired;

export default Modal;