import { API_URL } from '@/envs';
import { TEndpointBuilder } from '../types';

const generateImage = (endpointBuilder: TEndpointBuilder) => {
    return endpointBuilder.mutation<string, any>({
        query: (body) => ({
            url: `${API_URL}/default`,
            method: 'POST',
            body,
            credentials: 'include',
            responseHandler: (response) => response.blob(),
        }),

        transformResponse: (blob: Blob) => {
            return URL.createObjectURL(blob);
        },

        invalidatesTags: ['Txt2Img'],
    });
};

export default generateImage;
