import Button from '../button/button.component';
import style from './styles.module.scss';

function PersonalInfo() {
  return (
    <div className="form__body__container">
      <div>
        <h2>Personal Info</h2>
        <p>Please provide your name, email address, and phone number.</p>
        <div className={style.personal__details}>
          <label>
            Name
            <input type="text" required placeholder="e.g. Stephen King" />
          </label>
          <label>
            Email Address
            <input
              type="text"
              required
              placeholder="e.g. stephenking@lorem.com"
            />
          </label>
          <label>
            Phone Number
            <input type="text" required placeholder="e.g. +1 234 567 890" />
          </label>
        </div>
      </div>
      <div className="button__container">
        <Button>Next Step</Button>
      </div>
    </div>
  );
}

export default PersonalInfo;
