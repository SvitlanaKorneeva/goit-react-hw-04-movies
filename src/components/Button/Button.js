import React from 'react';
import PropTypes from 'prop-types';
import s from "./Button.module.css"

const Button = ({ onClick}) => (
  <button
    type="button"
    aria-label="Загрузить еще"
    className={s.Button}
    onClick={onClick}>
    Load more
  </button>
);

Button.defaultProps = {
  onClick: () => null,
  children: null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default Button;