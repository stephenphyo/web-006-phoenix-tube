import { configureStore } from '@reduxjs/toolkit';

/* Reducer Imports */
import counterReducer from 'app/slices/CounterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})