import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Content/SectionHeader.scss';

const SectionHeader = ({ headerName }) => (
    <h2 className='section-header'>
        {headerName}
    </h2>
);

SectionHeader.propTypes = {
    headerName: PropTypes.string,
};

export default SectionHeader;
