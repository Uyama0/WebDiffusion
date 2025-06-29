import { API_URL } from '@/envs';
import { TEndpointBuilder } from '../types';

const generateImage = (endpointBuilder: TEndpointBuilder) => {
    return endpointBuilder.mutation<string, any>({
        query: (body) => ({
            url: `${API_URL}/generate_image`,
            method: 'POST',
            body,
            responseHandler: (response) => response.blob(),
        }),

        transformResponse: (blob: Blob) => {
            return URL.createObjectURL(blob);
        },

        invalidatesTags: ['Txt2Img'],
    });
};

export default generateImage;
