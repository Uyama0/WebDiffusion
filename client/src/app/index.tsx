import { RouterProvider, createBrowserRouter } from 'react-router';
import { routes } from './router';

const router = createBrowserRouter(routes);

export const App: React.FC = () => {
    return <RouterProvider router={router} />;
};
