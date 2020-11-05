import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import CrossSellItem from '../CrossSellItem/CrossSellItem';
import './ConfirmationModal.scss';

const ConfirmationModal = ({ handleClose, show, ...props }) => {

  const showHideClassName = show ? "modal show" : "modal hide";

  return (
    <div className={showHideClassName}>
      <div className='modal-content'>
        <header className='modal-header'>
          <i className='fas fa-check'></i>
          <h3>Toegevoegd aan je winkelmandje!</h3>
          <span className='close' onClick={handleClose}>&times;</span>
        </header>
        <CheckoutItem {...props}/>
        <CustomButton className='custom-button'>
          Naar winkelmandje
        </CustomButton>
        <CustomButton className='custom-button inverted-gray' onClick={handleClose}>
          Verder shoppen
        </CustomButton>
        <CrossSellItem />
      </div>
    </div>
  );
};

export default ConfirmationModal;
