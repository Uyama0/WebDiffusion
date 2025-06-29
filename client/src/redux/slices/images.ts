import { createSlice } from '@reduxjs/toolkit';

export interface IImages {
    images: string[];
}

const initialState: IImages = {
    images: [],
};
export const slice = createSlice({
    name: 'images',
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
