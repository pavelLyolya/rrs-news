import { NEWS } from './types';

export const requestNews = () => ({ type: NEWS.REQUEST_NEWS });

export const newsGot = newsList => ({
    type: NEWS.REQUEST_NEWS_SUCCESS,
    newsList,
});

export const newsRequestError = error => ({
    type: NEWS.REQUEST_NEWS_ERROR,
    error,
});
