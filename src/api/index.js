import axios from 'axios';
import {
    baseUrl,
    apiKey,
    topHeadlines,
    sources,
    params,
} from './constants';

export const api = axios.create({
    baseURL: baseUrl,
    headers: { 'X-Api-Key': apiKey },
});


export const fetchNewsFromApi = async (requiredSource = null) => {
    let data;
    if (requiredSource) {
        ({ data } = await api.get(`${topHeadlines}?${params.defaultPageSize}&${params.sources}${requiredSource}`));
    } else {
        ({ data } = await api.get(`${topHeadlines}?${params.defaultCountry}&${params.defaultPageSize}`));
    }
    return data;
};

export const fetchSourcesFromApi = async () => {
    const { data } = await api.get(sources);
    return data;
};
