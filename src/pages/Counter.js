import React from 'react';

/*** Redux Imports ***/
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from 'app/slices/CounterSlice';

function Counter() {

    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div className='row d-flex flex-row'>
            <button onClick={() => dispatch(increment())}>+</button>
            <span>{count}</span>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
}

export default Counter;