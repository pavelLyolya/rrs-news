import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Content/Button.scss';

const Button = ({ name, onClick }) => (
    <button className="text-button" onClick={onClick} >{name}</button>
);

Button.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
