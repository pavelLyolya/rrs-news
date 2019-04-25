import { SOURCES } from './types';

export const requestSources = () => ({ type: SOURCES.REQUEST_SOURCES });

export const sourcesGot = sourcesSortedList => ({
    type: SOURCES.REQUEST_SOURCES_SUCCESS,
    sourcesSortedList,
});

export const sourcesRequestError = error => ({
    type: SOURCES.REQUEST_SOURCES_ERROR,
    error,
});
