import { NEWS } from './types';

export const requestNews = () => ({ type: NEWS.REQUEST_NEWS });

export const requestNewsFromTheSource = sourceId => ({
    type: NEWS.REQUEST_NEWS,
    sourceId,
});

export const newsGot = newsList => ({
    type: NEWS.REQUEST_NEWS_SUCCESS,
    newsList,
});

export const newsRequestError = error => ({
    type: NEWS.REQUEST_NEWS_ERROR,
    error,
});

export const addShownNews = (newsList, howMuchIsShown = 5) => {
    const shownNews = newsList.slice(0, howMuchIsShown);
    return ({
        type: NEWS.ADD_SHOWN_NEWS,
        shownNews,
        howMuchIsShown,
    });
};
