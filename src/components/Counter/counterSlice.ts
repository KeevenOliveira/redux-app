import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store';

interface CounterState {
    value: number
}
const initialState: CounterState = {
    value: 0
}
  
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state: CounterState) => {
        state.value += 1
      },
      decrement: (state: CounterState) => {
        state.value -= 1
      },
      incrementByAmount: (state, {payload}: PayloadAction<number>) => {
        state.value += payload
      }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value
export default counterSlice.reducer