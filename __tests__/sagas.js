import { fetchNews, fetchSources } from '../src/sagas';
import recordSaga from '../src/testUtils';
import {
    requestNews,
    newsGot,
    addShownNews,
} from '../src/actions/newsActions';
import {
    requestSources,
    sourcesGot,
} from '../src/actions/sourcesActions';
import * as api from '../src/api';
import sortSourcesByNames from '../src/helpers/sortSourcesByNames';

describe('FETCH SOURCES SAGA', () => {
    api.fetchSourcesFromApi = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
    });

    test('calls api and success action', async () => {
        const sourcesList = {
            sources: [
                {
                    id: 'abc-news',
                    name: 'ABC News',
                    description: 'Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.',
                },
                {
                    id: 'abc-news-au',
                    name: 'ABC News (AU)',
                    description: "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
                },
            ],
        };
        api.fetchSourcesFromApi.mockImplementation(() => sourcesList);
        const dispatched = await recordSaga(fetchSources, requestSources());
        expect(api.fetchSourcesFromApi).toHaveBeenCalled();
        expect(dispatched).toContainEqual(sourcesGot(sortSourcesByNames(sourcesList.sources)));
    });
});

describe('FETCH NEWS SAGA', () => {
    api.fetchNewsFromApi = jest.fn();

    const newsList = {
        articles: [
            {
                title: 'TITLE 2',
                author: 'Alex',
                description: 'Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.',
            },
            {
                title: 'TITLE 1',
                author: 'Bob',
                description: "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
            },
        ],
    };

    beforeEach(() => {
        jest.resetAllMocks();
    });

    test('gets all news and calls success action', async () => {
        api.fetchNewsFromApi.mockImplementation(() => newsList);
        const dispatched = await recordSaga(fetchNews, requestNews());
        expect(api.fetchNewsFromApi).toHaveBeenCalled();
        expect(dispatched).toContainEqual(newsGot(newsList.articles));
        expect(dispatched).toContainEqual(addShownNews(newsList.articles));
    });
});
