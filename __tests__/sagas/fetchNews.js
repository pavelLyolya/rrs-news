import recordSaga from '../../src/testUtils';
import { fetchNews } from '../../src/sagas';
import {
    requestNews,
    requestNewsFromTheSource,
    requestNewsByQuery,
    newsGot,
    addShownNews,
    newsRequestError,
} from '../../src/actions/newsActions';
import * as api from '../../src/api';

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

    test('gets news from certain source and calls success action', async () => {
        const sourceId = 'source-id';
        api.fetchNewsFromApi.mockImplementation(() => newsList);
        const dispatched = await recordSaga(fetchNews, requestNewsFromTheSource(sourceId));
        expect(api.fetchNewsFromApi).toHaveBeenCalledWith(sourceId);
        expect(dispatched).toContainEqual(newsGot(newsList.articles));
        expect(dispatched).toContainEqual(addShownNews(newsList.articles));
    });

    test('gets news by query and calls success action', async () => {
        const query = 'football';
        api.fetchNewsFromApi.mockImplementation(() => newsList);
        const dispatched = await recordSaga(fetchNews, requestNewsByQuery(query));
        expect(api.fetchNewsFromApi).toHaveBeenCalledWith(null, query);
        expect(dispatched).toContainEqual(newsGot(newsList.articles));
        expect(dispatched).toContainEqual(addShownNews(newsList.articles));
    });

    test('api call fails and error action called', async () => {
        const errorMsg = 'Error occured!';
        const error = new Error(errorMsg);
        api.fetchNewsFromApi.mockImplementation(() => { throw new Error(errorMsg); });
        const dispatched = await recordSaga(fetchNews, requestNews());
        expect(api.fetchNewsFromApi).toHaveBeenCalled();
        expect(dispatched).toContainEqual(newsRequestError(error));
    });
});
