import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { submitForm } from '../../store/formSlice';
import { getStep, previousStep } from '../../store/stepSlice';
import Button, { BUTTON_TYPE } from '../button/button.component';
import style from './styles.module.scss';

function OrderSummary() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { personalInfo, isYearly, yearlyDiscount, plan, addOns, status } =
    useSelector(state => state.form);

  let totalPrice = plan.price;
  addOns.forEach(el => {
    totalPrice += el.price;
  });

  const handelClickPrevious = () => {
    navigate('/add-ons');
    dispatch(previousStep());
  };

  const handelSubmit = e => {
    e.preventDefault();
    dispatch(submitForm(!status.isSubmitted));
  };

  useEffect(() => {
    dispatch(getStep(4));
  }, []);

  useEffect(() => {
    if (status.isSubmitted) navigate('/thank-you-for-your-order');
  }, [status.isSubmitted]);

  return (
    <form action="" className="form-wrapper">
      <div className="form__body__container">
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
        <div className={style.summary}>
          <div className={style.summary__personalInfo}>
            <h3>{personalInfo.name}</h3>
            <p>({personalInfo.email})</p>
          </div>
          <div className={style.game__plan}>
            <div className={style.game__plan__name}>
              <h3>
                {plan.name}({!isYearly ? 'Monthly' : 'Yearly'})
              </h3>
              <Link to="/user-plans">change</Link>
            </div>
            <strong className={style.game__plan__price}>
              {' '}
              ${plan.price}/{!isYearly ? 'mo' : 'yr'}
            </strong>
          </div>
          {addOns.length !== 0 ? (
            <div className={style.summary__addOns}>
              {addOns.map(el => {
                return (
                  <div className={style.summary__addOn} key={el.id}>
                    <p>{el.name}</p>
                    <span className={style.summary__addOn__price}>
                      ${el.price}/{!isYearly ? 'mo' : 'yr'}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            ''
          )}
        </div>

        <div className={style.summary__total}>
          {isYearly ? (
            <p>
              Your saving
              <span className={style.summary__total__saving}>
                -${Math.trunc(totalPrice * (1 + yearlyDiscount) - totalPrice)}
              </span>
            </p>
          ) : (
            ''
          )}
          <p className={style.summary__total__price}>
            Total(per {!isYearly ? 'month' : 'year'})
            <strong>
              ${totalPrice}/{!isYearly ? 'mo' : 'yr'}
            </strong>
          </p>
        </div>
      </div>
      <div className="button__container">
        <Button
          buttonType={BUTTON_TYPE.PREVIOUS}
          type="button"
          onClick={handelClickPrevious}
        >
          Go back
        </Button>
        <Button
          buttonType={BUTTON_TYPE.SUBMIT}
          type="submit"
          onClick={handelSubmit}
        >
          Confirm
        </Button>
      </div>
    </form>
  );
}

export default OrderSummary;
