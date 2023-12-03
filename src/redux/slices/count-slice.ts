import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0,
    },
    reducers: {
        increaseCounter: (state) => {
            state.counter += 1;
        },
    },
});

export const { increaseCounter } = counterSlice.actions;

export default counterSlice.reducer;
