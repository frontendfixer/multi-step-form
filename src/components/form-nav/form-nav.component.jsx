import { Link } from 'react-router-dom';

import style from './styles.module.scss';

function FormNav() {
  return (
    <ul className={style.nav__links}>
      <li>
        <Link to="/" className={style.nav__link}>
          <div className={style.steps__index} data-active="true">
            <span>1</span>
          </div>
          <div className={style.steps__details}>
            <span>step 1</span>
            <p>Your Info</p>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/user-plans" className={style.nav__link}>
          <div className={style.steps__index}>
            <span>2</span>
          </div>
          <div className={style.steps__details}>
            <span>step 2</span>
            <p>select plan</p>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/add-ons" className={style.nav__link}>
          <div className={style.steps__index}>
            <span>3</span>
          </div>
          <div className={style.steps__details}>
            <span>step 3</span>
            <p>add-ons</p>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/order-summary" className={style.nav__link}>
          <div className={style.steps__index}>
            <span>4</span>
          </div>
          <div className={style.steps__details}>
            <span>step 4</span>
            <p>summary</p>
          </div>
        </Link>
      </li>
    </ul>
  );
}

export default FormNav;
