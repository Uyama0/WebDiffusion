import { type RouteObject } from 'react-router';

import { ImageToImage } from '@/pages';

import { ROUTES } from '@/constants/routes';

export const routes: RouteObject[] = [
    {
        path: ROUTES.MAIN,
        element: <ImageToImage />,
        errorElement: <div>error</div>,
        children: [],
    },
];
