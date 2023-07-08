import Button from '../button/button.component';
import style from './styles.module.scss';

function AddOn() {
  return (
    <div className="form__body__container">
      <div>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
        <div className={style.addOn__container}>
          <label htmlFor="online-service" className={style.addOn__details}>
            <input type="checkbox" id="online-service" />
            <div className={style.addOn__desc}>
              <h3>Online service</h3>
              <span>Access to multiplayer games</span>
            </div>
            <span className={style.addOn__price}>+$1/mo</span>
          </label>
          <label htmlFor="larger-storage" className={style.addOn__details}>
            <input type="checkbox" id="larger-storage" />
            <div className={style.addOn__desc}>
              <h3>Larger storage</h3>
              <span>Extra 1TB of cloud save</span>
            </div>
            <span className={style.addOn__price}>+$2/mo</span>
          </label>
          <label htmlFor="custom-profile" className={style.addOn__details}>
            <input type="checkbox" id="custom-profile" />
            <div className={style.addOn__desc}>
              <h3>Customizable Profile</h3>
              <span>Custom theme on your profile</span>
            </div>
            <span className={style.addOn__price}>+$2/mo</span>
          </label>
        </div>
      </div>
      <div className="button__container">
        <Button buttonType="inverted">Go back</Button>
        <Button>Next Step</Button>
      </div>
    </div>
  );
}

export default AddOn;
