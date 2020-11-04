import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import './ConfirmationModal.scss';

const ConfirmationModal = ({ modalState }) => (

  <div className='modal'>
    <div className='modal-content'>
      <header className='modal-header'>
        <i className='fas fa-check'></i>
        <h3>Toegevoegd aan je winkelmandje!</h3>
        <span className='close'>&times;</span>
      </header>
      <CheckoutItem />
      <CustomButton className='custom-button'>
        Naar winkelmandje
      </CustomButton>
      <CustomButton className='custom-button inverted-gray'>
        Verder shoppen
      </CustomButton>
    </div>
  </div>
)

export default ConfirmationModal;