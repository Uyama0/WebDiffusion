import { configureStore, Store } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
// import { rtkQueryApi } from './rtkQuery';

import { name as settingsStoreName, reducer as settingsReducer } from './slices/settings';
import { name as imagesStoreName, reducer as imagesReducer } from './slices/images';

export const store: Store = configureStore({
    reducer: {
        [settingsStoreName]: settingsReducer,
        [imagesStoreName]: imagesReducer,
        // [rtkQueryApi.reducerPath]: rtkQueryApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    // .concat(rtkQueryApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
