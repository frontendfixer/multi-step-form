import { useSelector } from 'react-redux';

import style from './styles.module.scss';

function FormNav() {
  const stepValue = useSelector(state => state.step.value);

  return (
    <ul className={style.nav__items}>
      <li className={style.nav__item} data-active={stepValue === 1}>
        <div className={style.steps__index}>
          <span>1</span>
        </div>
        <div className={style.steps__details}>
          <span>step 1</span>
          <p>Your Info</p>
        </div>
      </li>
      <li className={style.nav__item} data-active={stepValue === 2}>
        <div className={style.steps__index}>
          <span>2</span>
        </div>
        <div className={style.steps__details}>
          <span>step 2</span>
          <p>select plan</p>
        </div>
      </li>
      <li className={style.nav__item} data-active={stepValue === 3}>
        <div className={style.steps__index}>
          <span>3</span>
        </div>
        <div className={style.steps__details}>
          <span>step 3</span>
          <p>add-ons</p>
        </div>
      </li>
      <li className={style.nav__item} data-active={stepValue === 4}>
        <div className={style.steps__index}>
          <span>4</span>
        </div>
        <div className={style.steps__details}>
          <span>step 4</span>
          <p>summary</p>
        </div>
      </li>
    </ul>
  );
}

export default FormNav;
