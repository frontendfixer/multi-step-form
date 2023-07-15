import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addAddOns } from '../../store/formSlice';
import { getStep, nextStep, previousStep } from '../../store/stepSlice';
import Button, { BUTTON_TYPE } from '../button/button.component';
import style from './styles.module.scss';

function AddOn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isYearly, addOns, yearlyDiscount } = useSelector(state => state.form);
  const yearlyFactor = 12 * (1 - yearlyDiscount);

  const [userAddOns, setUserAddOns] = useState(addOns);

  const handelToggle = e => {
    const inputEl = document.getElementById(e.target.id);
    const parentEl = inputEl.closest('label');
    const addOnObject = {
      id: e.target.id,
      name: parentEl.querySelector('h3').textContent,
      price: +parentEl.querySelector('.price').textContent,
    };

    if (e.target.checked) {
      parentEl.setAttribute('data-active', true);
      setUserAddOns(val => [...val, addOnObject]);
    }
    if (!e.target.checked) {
      parentEl.removeAttribute('data-active');
      let addOnsArray = userAddOns;
      addOnsArray = addOnsArray.filter(el => el.name !== addOnObject.name);
      setUserAddOns(addOnsArray);
    }
  };

  const handelClickNext = () => {
    navigate('/order-summary');
    dispatch(nextStep());
  };
  const handelClickPrevious = () => {
    navigate('/user-plans');
    dispatch(previousStep());
  };

  useEffect(() => {
    dispatch(addAddOns(userAddOns));
  }, [userAddOns]);

  useEffect(() => {
    dispatch(getStep(3));
    let newArray = [];
    userAddOns.forEach(el => {
      const inputEl = document.getElementById(el.id);
      inputEl.checked = true;
      const parentEl = inputEl.closest('label');
      parentEl.setAttribute('data-active', true);
      newArray = [
        ...newArray,
        {
          id: el.id,
          name: parentEl.querySelector('h3').textContent,
          price: +parentEl.querySelector('.price').textContent,
        },
      ];
    });
    setUserAddOns(newArray);
  }, []);

  return (
    <form className="form-wrapper">
      <div className="form__body__container">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
        <div className={style.addOn__container} onChange={handelToggle}>
          <label htmlFor="online-service" className={style.addOn__details}>
            <input type="checkbox" id="online-service" />
            <div className={style.addOn__desc}>
              <h3>Online service</h3>
              <span>Access to multiplayer games</span>
            </div>
            {isYearly ? (
              <>
                <span className="discount">{yearlyDiscount * 100}% off</span>
                <p className={style.addOn__price}>
                  +$
                  <span className="price">{Math.round(1 * yearlyFactor)}</span>
                  /yr
                </p>
              </>
            ) : (
              <p className={style.addOn__price}>
                +$<span className="price">1</span>/mo
              </p>
            )}
          </label>
          <label htmlFor="larger-storage" className={style.addOn__details}>
            <input type="checkbox" id="larger-storage" />
            <div className={style.addOn__desc}>
              <h3>Larger storage</h3>
              <span>Extra 1TB of cloud save</span>
            </div>
            {isYearly ? (
              <>
                <span className="discount">{yearlyDiscount * 100}% off</span>
                <p className={style.addOn__price}>
                  +$
                  <span className="price">{Math.round(2 * yearlyFactor)}</span>
                  /yr
                </p>
              </>
            ) : (
              <p className={style.addOn__price}>
                +$<span className="price">2</span>/mo
              </p>
            )}
          </label>
          <label htmlFor="custom-profile" className={style.addOn__details}>
            <input type="checkbox" id="custom-profile" />
            <div className={style.addOn__desc}>
              <h3>Customizable Profile</h3>
              <span>Custom theme on your profile</span>
            </div>
            {isYearly ? (
              <>
                <span className="discount">{yearlyDiscount * 100}% off</span>
                <p className={style.addOn__price}>
                  +$
                  <span className="price">{Math.round(2 * yearlyFactor)}</span>
                  /yr
                </p>
              </>
            ) : (
              <p className={style.addOn__price}>
                +$<span className="price">2</span>/mo
              </p>
            )}
          </label>
        </div>
      </div>
      <div className="button__container">
        <Button buttonType={BUTTON_TYPE.PREVIOUS} onClick={handelClickPrevious}>
          Go back
        </Button>
        <Button buttonType={BUTTON_TYPE.NEXT} onClick={handelClickNext}>
          Next Step
        </Button>
      </div>
    </form>
  );
}

export default AddOn;
