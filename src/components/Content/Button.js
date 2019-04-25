import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Content/Button.scss';

const Button = ({ name }) => (
    <button className="text-button">{name}</button>
);

Button.propTypes = {
    name: PropTypes.string,
};

export default Button;
