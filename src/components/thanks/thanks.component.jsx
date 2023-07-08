import { ReactComponent as ThanksIcon } from '../../assets/images/icon-thank-you.svg';
import Button from '../button/button.component';
import Spinner from '../spinner/spinner.component';
import style from './styles.module.scss';

function ThanksCard() {
  return (
    <div className={style.container}>
      <ThanksIcon className={style.thankYou__icon} />
      <div className={style.thankYou__message}>
        <h2>Thank you!</h2>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
      <Button buttonType="confirm">
        <Spinner />
      </Button>
    </div>
  );
}

export default ThanksCard;
