import { TEndpointBuilder } from '../types';

const API_URL = 'https://t7cgczbg-3000.euw.devtunnels.ms';

const createDeployment = (endpointBuilder: TEndpointBuilder) => {
    return endpointBuilder.mutation<any, any>({
        query: (body) => ({
            url: `${API_URL}/api/deployments/`,
            method: 'POST',
            body,
            credentials: 'include',
        }),

        invalidatesTags: ['Images'],
    });
};

export default createDeployment;
