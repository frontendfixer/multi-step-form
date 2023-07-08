import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import style from './styles.module.scss';

function OrderSummary() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handelSubmit = () => {
    return setIsSubmitted(!isSubmitted);
  };

  useEffect(() => {
    if (isSubmitted) navigate('/thank-you-for-your-order');
  }, [isSubmitted]);

  return (
    <div className="form__body__container">
      <div>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
        <div className={style.summary}>
          <div className={style.summary__schemes}>
            <div className={style.game__plan}>
              <div className={style.game__plan__name}>
                <h3>Arcade(Monthly)</h3>
                <Link to="/user-plans">change</Link>
              </div>
              <strong className={style.game__plan__price}> $9/mo</strong>
            </div>
            <div className={style.summary__addOns}>
              <div className={style.summary__addOn}>
                <p>Addon name</p>
                <span className={style.summary__addOn__price}>$2/mo</span>
              </div>
              <div className={style.summary__addOn}>
                <p>Addon name</p>
                <span className={style.summary__addOn__price}>$2/mo</span>
              </div>
            </div>
          </div>
          <div className={style.summary__total}>
            <p>
              Total(per <span>month</span>)
            </p>
            <strong className={style.summary__total__price}>$12/mo</strong>
          </div>
        </div>
      </div>
      <div className="button__container">
        <Button buttonType="inverted">Go back</Button>
        <Button buttonType="confirm" onClick={handelSubmit}>
          Confirm
        </Button>
      </div>
    </div>
  );
}

export default OrderSummary;
