import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import useCustom from '../../hooks/customHook';
import CustomButton from '../CustomButton/CustomButton';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import './CollectionItem.scss';

const CollectionItem = (props) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [globalState, setGlobalState] = useCustom();

  const add1Global = () => {
    const newCounterValue = globalState.counter + 1;
    setGlobalState({ counter: newCounterValue });
  };

  useEffect(() => {
    let cancel = false;
    const fetchData = async () => {
      !cancel && setIsLoading(true) && setIsError(false);
      try {
        const { data } = await axios('http://dump.dataplatform.shoes/20201005_frontend_assignment/prod_details_362950.json')
        !cancel && setData(data.data.attributes)
      } catch (error) {
        setIsError(true)
      } finally {
        !cancel && setIsLoading(false)
      }
    }

    fetchData()
    return () => { cancel = true }

  }, []);

  const showModal = () => setModalState(true);
  const hideModal = () => setModalState(false);

  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

  return (
    <>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div style={style}>
          <Loader
          type="Oval"
          color="orange"
          height={60}
          width={60}
          timeout={3000}
          />
        </div>
      ) : (
        <div className='collection-item'>
          <div
            className='collection-item-image'
            style={{
              backgroundImage: `url(${data.main_image.image_sizes.medium})`,
            }}
          />
          <div className='collection-footer'>
            <h3 className='collection-item-name'>{data.name}</h3>
            <span className='collection-item-price'>{data.price.attributes.available_max_regular_price.amount}€</span>
            <p className='collection-item-description'>{data.product_classification}</p>
            <p className='collection-item-color'>Kleur: {data.product_attributes[0].value}</p>
          </div>
          <CustomButton className='custom-button inverted'>
            Kies je maat
          </CustomButton>
          <CustomButton className='custom-button' onClick={() => {showModal(); add1Global();}} >
            In winkelmandje
          </CustomButton>
          <ConfirmationModal {...data} show={modalState} handleClose={hideModal}/>
        </div>
        )
      } 
    </>
  );
};

export default CollectionItem;
