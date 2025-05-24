import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INVALIDATION_TAGS } from './constants';

export const rtkQueryApi = createApi({
    reducerPath: 'rtkQuery',
    baseQuery: fetchBaseQuery({
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    tagTypes: Object.values(INVALIDATION_TAGS),
    endpoints: () => ({}),
});
