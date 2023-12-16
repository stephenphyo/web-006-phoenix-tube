import { createSlice } from '@reduxjs/toolkit';

/* Initial State */
const initialState = {
    count: 0,
}

/* Reducer */
const reducers = {
    increment: (state) => {
        state.count += 1;
    },
    decrement: (state) => {
        state.count -= 1;
    },
    reset: (state ) => {
        state.count = initialState.count;
    },
}

/* Slice */
export const counterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: reducers
});

/* Actions */
export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;