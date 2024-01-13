import css from './button.module.css';

const Button = ({ onClick, type = 'submit', children }) => {
  return (
    <button onClick={onClick} className={css.button} type={type}>
      {children}
    </button>
  );
};

export default Button;
