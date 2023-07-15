import style from './style.module.scss';

export const BUTTON_TYPE = {
  NEXT: 'next',
  PREVIOUS: 'previous',
  SUBMIT: 'submit',
};

function Button({ children, buttonType, ...otherProps }) {
  if (buttonType && buttonType === BUTTON_TYPE.PREVIOUS)
    return (
      <button
        {...otherProps}
        className={[style.button, style.inverted].join(' ')}
      >
        {children}
      </button>
    );
  if (buttonType && buttonType === BUTTON_TYPE.SUBMIT)
    return (
      <button
        {...otherProps}
        className={[style.button, style.confirm].join(' ')}
      >
        {children}
      </button>
    );
  if (buttonType && buttonType === BUTTON_TYPE.NEXT)
    return (
      <button {...otherProps} className={style.button}>
        {children}
      </button>
    );

  return (
    <button {...otherProps} className={style.button}>
      {children}
    </button>
  );
}

export default Button;
