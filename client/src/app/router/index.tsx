import { RouteObject } from 'react-router';

import { Layout } from '../layout';
import { ImageToImage, About } from '@/pages';

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
            {
                path: PATHS.ABOUT,
                element: <About />,
                errorElement: <></>,
            },
        ],
    },
];

export default routes;
