import React from 'react';
// import PropTypes from 'prop-types';
import { PropagateLoader } from 'react-spinners';
// import '../../styles/Content/Content.scss';
import SectionHeader from './SectionHeader';

const SourcesList = () => (
    <section className='sources-list list'>
        <SectionHeader headerName='Sources' />
        <PropagateLoader color={'#d8d8d8'} loading={true} />
    </section>
);

export default SourcesList;
