import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as AdvanceIcon } from '../../assets/images/icon-advanced.svg';
import { ReactComponent as ArcadeIcon } from '../../assets/images/icon-arcade.svg';
import { ReactComponent as ProIcon } from '../../assets/images/icon-pro.svg';
import { setPlan, toYearly } from '../../store/formSlice';
import { getStep, nextStep, previousStep } from '../../store/stepSlice';
import Button, { BUTTON_TYPE } from '../button/button.component';
import style from './styles.module.scss';

function UserPlans() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isYearly, yearlyDiscount, plan } = useSelector(state => state.form);
  const yearlyFactor = 12 * (1 - yearlyDiscount);

  const [userPlan, setUserPlan] = useState({
    id: plan.id,
    name: plan.name,
    price: plan.price,
  });

  const handelClickPrevious = () => {
    navigate('/');
    dispatch(previousStep());
  };
  const handelClickNext = () => {
    navigate('/add-ons');
    dispatch(nextStep());
  };

  const handelToggleToYear = () => {
    dispatch(toYearly(!isYearly));
    let newPrice;
    if (isYearly) newPrice = Math.round(userPlan.price / yearlyFactor);
    if (!isYearly) newPrice = Math.round(userPlan.price * yearlyFactor);

    setUserPlan(previousValue => ({ ...previousValue, price: newPrice }));
  };

  const handelRadio = e => {
    const inputEl = document.getElementById(e.target.id);
    const planEl = inputEl.labels[0];
    const planName = planEl.querySelector('h3').textContent;
    const planPrice = +planEl.querySelector('.price').textContent;

    setUserPlan(previousValue => ({
      ...previousValue,
      id: e.target.id,
      name: planName,
      price: planPrice,
    }));
  };

  useEffect(() => {
    dispatch(getStep(2));
    const inputEl = document.getElementById(plan.id);
    inputEl.checked = true;
  }, []);
  useEffect(() => {
    dispatch(setPlan(userPlan));
  }, [userPlan]);

  return (
    <form className="form-wrapper">
      <div className="form__body__container">
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
        <div className={style.plan__cards} onChange={handelRadio}>
          <input type="radio" name="game-plan" id="arcade" />
          <label htmlFor="arcade" className={style.plan__card}>
            <span>
              <ArcadeIcon alt="" aria-hidden />
            </span>
            <div className={style.plan__price}>
              <h3>Arcade</h3>
              {isYearly ? (
                <>
                  <span className="discount">{yearlyDiscount * 100}% off</span>
                  <p className={style.plan__price__details}>
                    $
                    <span className="price">
                      {Math.round(9 * 12 * (1 - yearlyDiscount))}{' '}
                    </span>
                    /yr
                    <span className={style.free__months}>2 months free</span>
                  </p>
                </>
              ) : (
                <p className={style.plan__price__details}>
                  $<span className="price">9</span>/mo
                </p>
              )}
            </div>
          </label>
          <input type="radio" name="game-plan" id="advance" />
          <label htmlFor="advance" className={style.plan__card}>
            <span>
              <AdvanceIcon alt="" aria-hidden />
            </span>
            <div className={style.plan__price}>
              <h3>Advanced</h3>
              {isYearly ? (
                <>
                  <span className="discount">{yearlyDiscount * 100}% off</span>
                  <p className={style.plan__price__details}>
                    $
                    <span className="price">
                      {Math.round(12 * 12 * (1 - yearlyDiscount))}{' '}
                    </span>
                    /yr
                    <span className={style.free__months}>2 months free</span>
                  </p>
                </>
              ) : (
                <p className={style.plan__price__details}>
                  $<span className="price">12</span>/mo
                </p>
              )}
            </div>
          </label>
          <input type="radio" name="game-plan" id="pro" />
          <label htmlFor="pro" className={style.plan__card}>
            <span>
              <ProIcon alt="" aria-hidden />
            </span>
            <div className={style.plan__price}>
              <h3>Pro</h3>
              {isYearly ? (
                <>
                  <span className="discount">{yearlyDiscount * 100}% off</span>
                  <p className={style.plan__price__details}>
                    $
                    <span className="price">
                      {Math.round(15 * 12 * (1 - yearlyDiscount))}{' '}
                    </span>
                    /yr
                    <span className={style.free__months}>2 months free</span>
                  </p>
                </>
              ) : (
                <p className={style.plan__price__details}>
                  $<span className="price">15</span>/mo
                </p>
              )}
            </div>
          </label>
        </div>
        <div className={style.plan__tenure}>
          <span data-tenure={!isYearly ? 'active' : 'inactive'}>Monthly</span>
          <label htmlFor="toggle-checkbox" className={style.toggle__button}>
            <input
              className={style.toggle__checkbox}
              type="checkbox"
              name="plan-tenure"
              id="toggle-checkbox"
              checked={isYearly}
              onChange={handelToggleToYear}
            />
            <span className={style.toggle__ball} />
          </label>
          <span data-tenure={isYearly ? 'active' : 'inactive'}>Yearly</span>
        </div>
      </div>
      <div className="button__container">
        <Button
          type="button"
          buttonType={BUTTON_TYPE.PREVIOUS}
          onClick={handelClickPrevious}
        >
          Go back
        </Button>
        <Button
          type="submit"
          buttonType={BUTTON_TYPE.NEXT}
          onClick={handelClickNext}
        >
          Next Step
        </Button>
      </div>
    </form>
  );
}

export default UserPlans;
