import { useState } from "react";
import "./index.css";

import { useAppSelector, useAppDispatch } from '../../app/hook';

import { decrement, increment } from './counterSlice'

const Counter = () => {
    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch();

    const incrementCount = () => {
        dispatch(increment())
    }

    const decrementCount = () => {
        if (count !== 0)
            dispatch(decrement())
    }

    // console.log("dispatch", dispatch);
    console.log("count", count);

    return (
        <section className="sessionCounter">
            <p className="moreStyle" onClick={decrementCount}> - </p>
            <p className="quantityStyle"> {count}  </p>
            <p className="lessStyle" onClick={incrementCount}> + </p>
        </section>
    );
}

export default Counter;