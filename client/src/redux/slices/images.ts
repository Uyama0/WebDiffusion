import { createSlice } from '@reduxjs/toolkit';

interface BaseModelTypes {
    images: string[];
}

const initialState: BaseModelTypes = {
    images: [],
};
export const slice = createSlice({
    name: 'imageStore',
    initialState,
    reducers: {
        setImage: (state, action) => {
            return {
                ...state,
                images: [...state.images, action.payload],
            };
        },
    },
});

export const {
    name,
    actions: { setImage },
    reducer,
} = slice;
