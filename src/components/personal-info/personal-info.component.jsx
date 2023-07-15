import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addPersonalInfo } from '../../store/formSlice';
import { getStep, nextStep } from '../../store/stepSlice';
import Button, { BUTTON_TYPE } from '../button/button.component';
import style from './styles.module.scss';

function PersonalInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name, email, phone } = useSelector(state => state.form.personalInfo);

  useEffect(() => {
    dispatch(getStep(1));
  }, []);

  const [formData, setFormData] = useState({
    name,
    email,
    phone,
  });

  const handelChange = e => {
    const { name: n, value: v } = e.target;
    setFormData(previousData => ({ ...previousData, [n]: v }));
  };

  const handelOnSubmit = () => {
    navigate('/user-plans');
    dispatch(nextStep());
    dispatch(addPersonalInfo(formData));
  };

  return (
    <form onSubmit={handelOnSubmit} className="form-wrapper">
      <div className="form__body__container">
        <h2>Personal Info</h2>
        <p>Please provide your name, email address, and phone number.</p>
        <div className={style.personal__details}>
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Stephen King"
              onChange={handelChange}
              value={formData.name}
            />
          </label>
          <label>
            Email Address
            <input
              type="email"
              name="email"
              required
              placeholder="e.g. stephenking@lorem.com"
              onChange={handelChange}
              value={formData.email}
            />
          </label>
          <label>
            Phone Number
            <input
              type="text"
              name="phone"
              required
              placeholder="e.g. +1 234 567 890"
              onChange={handelChange}
              value={formData.phone}
            />
          </label>
        </div>
      </div>
      <div className="button__container">
        <Button buttonType={BUTTON_TYPE.NEXT}>Next Step</Button>
      </div>
    </form>
  );
}

export default PersonalInfo;
