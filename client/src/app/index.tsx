import { RouterProvider, createBrowserRouter } from 'react-router';
import { Provider } from 'react-redux';

import routes from './router';

import { store } from '@/redux/store';

const router = createBrowserRouter(routes);

export const App: React.FC = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
};
