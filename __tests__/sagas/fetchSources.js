import recordSaga from '../../src/testUtils';
import { fetchSources } from '../../src/sagas';
import {
    requestSources,
    sourcesGot,
    sourcesRequestError,
} from '../../src/actions/sourcesActions';
import * as api from '../../src/api';
import sortSourcesByNames from '../../src/helpers/sortSourcesByNames';

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

    test('api call fails and error action called', async () => {
        const errorMsg = 'Error occured!';
        const error = new Error(errorMsg);
        api.fetchSourcesFromApi.mockImplementation(() => { throw new Error(errorMsg); });
        const dispatched = await recordSaga(fetchSources, requestSources());
        expect(api.fetchSourcesFromApi).toHaveBeenCalled();
        expect(dispatched).toContainEqual(sourcesRequestError(error));
    });
});
