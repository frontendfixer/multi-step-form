import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as ThanksIcon } from '../../assets/images/icon-thank-you.svg';
import { resetForm } from '../../store/formSlice';
import Button from '../button/button.component';
import style from './styles.module.scss';

function ThanksCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelClose = () => {
    dispatch(resetForm());
    navigate('/');
  };

  return (
    <form className="form-wrapper">
      <div className={`form__body__container ${style.container}`}>
        <ThanksIcon className={style.thankYou__icon} />
        <div className={style.thankYou__message}>
          <h2>Thank you!</h2>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
      <div className="button__container">
        <Button buttonType="confirm" onClick={handelClose}>
          {' '}
          Close
        </Button>
      </div>
    </form>
  );
}

export default ThanksCard;
