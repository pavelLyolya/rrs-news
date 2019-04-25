import axios from 'axios';
import {
    baseUrl,
    apiKey,
    topHeadlines,
    sources,
} from './constants';

export const api = axios.create({
    baseURL: baseUrl,
    headers: { 'X-Api-Key': apiKey },
});


export const fetchNewsFromApi = async () => {
    const { data } = await api.get(topHeadlines);
    return data;
};

export const fetchSourcesFromApi = async () => {
    const { data } = await api.get(sources);
    return data;
};
