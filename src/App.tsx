import React from 'react';
import CounterIncrease from '~/components/counter-increase';

import CounterTwo from '~/components/counter-two';
import Button from '~/components/library/Button/button';
import { useAppDispatch, useAppSelector } from '~/hooks/redux-hooks';
import { increaseCounter } from '~/redux/slices/count-slice';

const App: React.FC = () => {
    const store = useAppSelector((state) => ({
        first_counter: state.counter_store.counter,
    }));
    const dispatch = useAppDispatch();

    function increaseCount() {
        dispatch(increaseCounter());
    }

    return (
        <>
            <div>hello this is vite app</div>
            {/* <div>{title}</div> */}
            <button
                onClick={increaseCount}
                className="rounded-lg bg-red-200 p-4"
            >
                Increase Counter
            </button>
            <p>Value of counter is : {store.first_counter}</p>
            <CounterTwo />
            <CounterIncrease />
            <Button color="danger">Abhay Rana</Button>
        </>
    );
};

export default App;
