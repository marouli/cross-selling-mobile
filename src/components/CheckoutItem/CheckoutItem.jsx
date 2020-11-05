import React from 'react';
import './CheckoutItem.scss';

const CheckoutItem = (props) => {
    return (
        <div className='checkout-item'>
          <div
            className='checkout-item-image'
            style={{
              backgroundImage: `url(${props.main_image.image_sizes.medium})`,
            }}
          />
          <div className='checkout-info'>
            <h3 className='checkout-item-description'>{props.product_classification}</h3>
            <span className='checkout-item-price'>{props.price.attributes.available_max_regular_price.amount}€</span>
            <p className='checkout-item-color'>Kleur: {props.product_attributes[0].value}</p>
            <p className='checkout-item-size'>Maat: 42</p>
          </div>
        </div>
    );
};

export default CheckoutItem;
