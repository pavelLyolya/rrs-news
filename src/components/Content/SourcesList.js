import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PropagateLoader } from 'react-spinners';
import '../../styles/Content/SourcesList.scss';
import SectionHeader from './SectionHeader';

class SourceItem extends Component {
    requestNewsFromTheSource = () => {
        if (this.props.sourceId) {
            this.props.requestNewsFromTheSource(this.props.sourceId);
        } else {
            this.props.requestNewsFromTheSource(null);
        }
    }

    render() {
        if (!this.props.sourceId) {
            return (<p
                className={
                    this.props.showOnlyFrom
                        ? 'dropdown-menu_item-link'
                        : 'dropdown-menu_item-link dropdown-menu_item-link__active'
                }
                onClick={this.requestNewsFromTheSource}
            >{this.props.name}</p>);
        }
        return (<p
            className={
                this.props.showOnlyFrom === this.props.sourceId
                    ? 'dropdown-menu_item-link dropdown-menu_item-link__active'
                    : 'dropdown-menu_item-link'
            }
            onClick={this.requestNewsFromTheSource}
        >{this.props.name}</p>);
    }
}

SourceItem.propTypes = {
    name: PropTypes.string.isRequired,
    sourceId: PropTypes.string,
    showOnlyFrom: PropTypes.any,
    requestNewsFromTheSource: PropTypes.func,
};

const SourceMenuItem = ({ menuItem, requestNewsFromTheSource, showOnlyFrom }) => (
    <li className='dropdown'>
        <input type='checkbox' />
        <div data-toggle='dropdown'>{menuItem.letter}</div>
        <ul className='dropdown-menu'>
            {menuItem.entities.map(sourceItem => <li key={sourceItem.id}>
                <SourceItem
                    name={sourceItem.name}
                    sourceId={sourceItem.id}
                    requestNewsFromTheSource={requestNewsFromTheSource}
                    showOnlyFrom={showOnlyFrom}
                />
            </li>)}
        </ul>
    </li>
);

SourceMenuItem.propTypes = {
    menuItem: PropTypes.object.isRequired,
    showOnlyFrom: PropTypes.any,
    requestNewsFromTheSource: PropTypes.func,
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
                    <SourceItem
                        name={'Show all news'}
                        requestNewsFromTheSource={this.props.requestNewsFromTheSource}
                        showOnlyFrom={this.props.showOnlyFrom}
                    />
                    {!this.props.isLoading
                    && this.props.sourcesSortedList.map((item, index) => <SourceMenuItem
                        key={index}
                        menuItem={item}
                        requestNewsFromTheSource={this.props.requestNewsFromTheSource}
                        showOnlyFrom={this.props.showOnlyFrom}
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
    showOnlyFrom: PropTypes.any,
    requestSources: PropTypes.func,
    requestNewsFromTheSource: PropTypes.func,
};

export default SourcesList;
