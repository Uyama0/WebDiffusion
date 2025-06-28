import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IParameters {
    auto: boolean;
}

const initialState: IParameters = {
    auto: false,
};

export const slice = createSlice({
    name: 'parameters',
    initialState,
    reducers: {
        setAuto: (state, action: PayloadAction<boolean>) => {
            state.auto = action.payload;
        },
    },
});

export const {
    name,
    actions: { setAuto },
    reducer,
} = slice;
