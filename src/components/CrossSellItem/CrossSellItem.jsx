import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import useCustom from '../../hooks/customHook';
import CustomButton from '../CustomButton/CustomButton';
import './CrossSellItem.scss';

const CrossSellItem = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [globalState, setGlobalState] = useCustom();
  const [radioValue, setRadioValue] = useState("");

  const add1Global = () => {
    const newCounterValue = globalState.counter + 1;
    setGlobalState({ counter: newCounterValue });
  };


  useEffect(() => {
    let cancel = false;
    const fetchData = async () => {
      !cancel && setIsLoading(true) && setIsError(false);
      try {
        const { data } = await axios('http://dump.dataplatform.shoes/20201005_frontend_assignment/cross_sell_products_for_362950.json')
        !cancel && setData(data)
        data.data.hits.map(async item => {
          const itemData = await axios(`http://dump.dataplatform.shoes/20201005_frontend_assignment/prod_details_${item.attributes.product.id}.json`)
          item['child_products'] = itemData.data.data.attributes.child_products ? itemData.data.data.attributes.child_products : [] 
          }
        )
      } catch (error) {
        setIsError(true)
      } finally {
        !cancel && setIsLoading(false)
      }
    }

    fetchData()
    return () => { cancel = true }

  }, []);

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
        <div className='cross-sell-items__containter'>
          <p className='cross-sell-items-description'>Misschien vind je deze ook leuk:</p>
          <ul className="cross-sell-items__list">
            {data.data.hits.map(item => (
              <li key={item.attributes.product.attributes.product_id} className="cross-sell-item">
                <img className="cross-sell-item-image" src={item.attributes.product.attributes.main_image.image_sizes.medium} alt={item.title}/>
                <div className='cross-sell-item-info'>
                  <h3 className='cross-sell-item-title'>{item.attributes.product.attributes.product_classification}</h3>
                  <span className='cross-sell-item-price'>{item.attributes.product.attributes.price.available_max_regular_price.amount}€</span>
                  {/* ToDo fix */}
                  {/* {item.child_products && item.child_products.lenght > 0 ? (
                    <p className='cross-sell-item-instruction'>Kies een optie:</p>
                    ) : null   
                  }    */}
                  {item.child_products ? item.child_products.map(data => (
                    <div className='cross-sell-item-form-container'>
                      <form className='cross-sell-item-form'>  
                        <input
                          className='cross-sell-item-option'
                          type="radio"
                          name="dynamic-radio"
                          value={data.attributes[0].value}
                          checked={radioValue === data.attributes[0].value}
                          onChange={(e) => setRadioValue(e.target.value)}
                        />
                        <label key={data.id} className='cross-sell-item-child'>{data.attributes[0].value}</label> 
                      </form>
                    </div>
                    )) : null
                  }
                </div>
                <CustomButton className='custom-button checkout' onClick={add1Global}>
                  In winkelmandje
                </CustomButton>
              </li>
            ))}
          </ul>
        </div>
        )
      }
    </>
  );
};

export default CrossSellItem;