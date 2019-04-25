import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PropagateLoader } from 'react-spinners';
import '../../styles/Content/SourcesList.scss';
import SectionHeader from './SectionHeader';

const SourceMenuItem = ({ menuItem }) => (
    <li className='dropdown'>
        <input type='checkbox' />
        <div data-toggle='dropdown'>{menuItem.letter}</div>
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

class SourcesList extends Component {
    componentDidMount() {
        this.props.requestSources();
    }

    render() {
        return (
            <section className='sources-list list'>
                <SectionHeader headerName='Sources' />
                <PropagateLoader color={'#d8d8d8'} loading={false} />
                <ul className='sources-list-wrap'>
                    {!this.props.isLoading
                    && this.props.sourcesSortedList.map((item, index) => <SourceMenuItem
                        key={index}
                        menuItem={item}
                    />)}
                </ul>
            </section>
        );
    }
}

SourcesList.propTypes = {
    sourcesSortedList: PropTypes.array,
    isLoading: PropTypes.bool,
    error: PropTypes.object,
    requestSources: PropTypes.func,
};

export default SourcesList;
