import rootSaga, { fetchNews, fetchSources } from '../../src/sagas';
import { NEWS, SOURCES } from '../../src/actions/types';

describe('ROOT SAGA', () => {
    const gen = rootSaga();
    const recievedTakenArgs = [];
    for (const taken of gen) {
        recievedTakenArgs.push(taken.payload.args);
    }

    test('calls fetchNews', async () => {
        const expectedTakenArgs = [NEWS.REQUEST_NEWS, fetchNews];
        expect(recievedTakenArgs).toContainEqual(expectedTakenArgs);
    });

    test('calls fetchSources', async () => {
        const expectedTakenArgs = [SOURCES.REQUEST_SOURCES, fetchSources];
        expect(recievedTakenArgs).toContainEqual(expectedTakenArgs);
    });
});
