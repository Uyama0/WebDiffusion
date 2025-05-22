import { RouteObject } from 'react-router';

import { Layout } from '../layout';
import { ImageToImage } from '@/pages';

import { PATHS } from '@/constants/paths';

const routes: RouteObject[] = [
    {
        element: <Layout />,
        errorElement: <></>,
        children: [
            {
                path: PATHS.HOME,
                element: <ImageToImage />,
                errorElement: <></>,
            },
        ],
    },
];

export default routes;
