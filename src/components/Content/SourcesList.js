import React from 'react';
import PropTypes from 'prop-types';
import { PropagateLoader } from 'react-spinners';
import '../../styles/Content/SourcesList.scss';
import SectionHeader from './SectionHeader';
import sortSourcesByNames from '../../helpers/sortSourcesByNames';

const SourceMenuItem = ({ menuItem }) => (
    <li className='dropdown'>
        <input type='checkbox' />
        <a href='#' data-toggle='dropdown'>{menuItem.letter}</a>
        <ul className='dropdown-menu'>
            {menuItem.entities.map(sourceItem => <li key={sourceItem.id}>
                <p className='dropdown-menu_item-link'>{sourceItem.name}</p>
            </li>)}
        </ul>
    </li>
);

SourceMenuItem.propTypes = {
    menuItem: PropTypes.object.isRequired,
};

const SourcesList = ({ sourcesList }) => {
    let sortedList = null;
    if (sourcesList) {
        sortedList = sortSourcesByNames(sourcesList);
    }
    return (
        <section className='sources-list list'>
            <SectionHeader headerName='Sources' />
            <PropagateLoader color={'#d8d8d8'} loading={false} />
            <ul className='sources-list-wrap'>
                {sortedList && sortedList.map((item, index) => <SourceMenuItem
                    key={index}
                    menuItem={item}
                />)}
            </ul>
        </section>
    );
};

SourcesList.propTypes = {
    sourcesList: PropTypes.array,
};

export default SourcesList;
