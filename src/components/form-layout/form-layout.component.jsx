import { Outlet } from 'react-router-dom';

import { ReactComponent as NavBackgroundImage } from '../../assets/images/bg-sidebar-desktop.svg';
import FormNav from '../form-nav/form-nav.component';
import style from './styles.module.scss';

function FormLayout() {
  return (
    <div className={style.form__container}>
      <div className={style.form__nav}>
        <div className={style.nav__image}>
          <NavBackgroundImage className={style.form__nav__image} />
        </div>
        <div className={style.nav__container}>
          <FormNav />
        </div>
      </div>
      <div className={style.form__body}>
        <Outlet />
      </div>
    </div>
  );
}

export default FormLayout;
