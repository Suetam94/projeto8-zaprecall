import axios from 'axios';

export const request = axios.create({
    baseURL: 'https://quizapi.io/api/v1',
})