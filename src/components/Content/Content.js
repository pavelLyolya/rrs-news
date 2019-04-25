import React from 'react';
import '../../styles/Content/Content.scss';
import NewsList from './NewsList';
import SourcesList from './SourcesList';

import articles from './articles';
import sources from './sources';

const Content = () => (
    <main className='app-content'>
        <div className='app-content-wrap wrapper'>
            <SourcesList sourcesList={sources}/>
            <NewsList newsList={articles} />
        </div>
    </main>
);

export default Content;
