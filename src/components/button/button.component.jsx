import style from './style.module.scss';

function Button({ children, buttonType, ...otherProps }) {
  if (buttonType && buttonType === 'inverted')
    return (
      <button
        {...otherProps}
        className={[style.button, style.inverted].join(' ')}
      >
        {children}
      </button>
    );
  if (buttonType && buttonType === 'confirm')
    return (
      <button
        {...otherProps}
        className={[style.button, style.confirm].join(' ')}
      >
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
