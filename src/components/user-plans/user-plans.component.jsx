import { ReactComponent as AdvanceIcon } from '../../assets/images/icon-advanced.svg';
import { ReactComponent as ArcadeIcon } from '../../assets/images/icon-arcade.svg';
import { ReactComponent as ProIcon } from '../../assets/images/icon-pro.svg';
import Button from '../button/button.component';
import style from './styles.module.scss';

function UserPlans() {
  return (
    <div className="form__body__container">
      <div>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
        <div className={style.plans__details}>
          <div className={style.plan__cards}>
            <label htmlFor="arcade" className={style.plan__card}>
              <input type="radio" name="game-plan" id="arcade" />
              <span>
                <ArcadeIcon />
              </span>
              <div className={style.plan__price}>
                <h3>Arcade</h3>
                <span>$9/mo</span>
              </div>
            </label>
            <label htmlFor="advance" className={style.plan__card}>
              <input type="radio" name="game-plan" id="advance" />
              <span>
                <AdvanceIcon />
              </span>
              <div className={style.plan__price}>
                <h3>Advanced</h3>
                <span>$12/mo</span>
              </div>
            </label>
            <label htmlFor="pro" className={style.plan__card}>
              <input type="radio" name="game-plan" id="pro" />
              <span>
                <ProIcon />
              </span>
              <div className={style.plan__price}>
                <h3>Pro</h3>
                <span>$15/mo</span>
              </div>
            </label>
          </div>
          <div className={style.plan__tenure}>
            <span data-tenure="active">Monthly</span>
            <label htmlFor="toggle-checkbox" className={style.toggle__button}>
              <input
                className={style.toggle__checkbox}
                type="checkbox"
                name="plan-tenure"
                id="toggle-checkbox"
              />
              <span className={style.toggle__ball} />
            </label>
            <span>Yearly</span>
          </div>
        </div>
      </div>
      <div className="button__container">
        <Button buttonType="inverted">Go back</Button>
        <Button>Next Step</Button>
      </div>
    </div>
  );
}

export default UserPlans;
