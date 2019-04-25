import React from 'react';
import '../../styles/Content/Content.scss';
import NewsList from '../../containers/NewsListContainer';
import SourcesList from '../../containers/SourcesListContainer';

const Content = () => (
    <main className='app-content'>
        <div className='app-content-wrap wrapper'>
            <SourcesList />
            <NewsList />
        </div>
    </main>
);

export default Content;
