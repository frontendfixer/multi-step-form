import { Outlet } from 'react-router-dom';

import FormNav from '../form-nav/form-nav.component';
import style from './styles.module.scss';

function FormLayout() {
  return (
    <main className={style.form__container}>
      <h1 className="visually-hidden">multi step game subscription form</h1>
      <nav className={style.form__nav}>
        <div className={style.nav__container}>
          <FormNav />
        </div>
      </nav>
      <section className={style.form__body}>
        <Outlet />
      </section>
    </main>
  );
}

export default FormLayout;
