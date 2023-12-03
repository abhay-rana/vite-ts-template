import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0,
        counter_two: 0,
    },
    reducers: {
        increaseCounter: (state) => {
            state.counter += 1;
        },
        counterTwo: (state) => {
            state.counter_two += 1;
        },
    },
});

export const { increaseCounter, counterTwo } = counterSlice.actions;

export default counterSlice.reducer;
