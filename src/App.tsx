import { memo } from 'react';

import CounterTwo from '~/components/counter-two';
import { useAppDispatch, useAppSelector } from '~/hooks/redux-hooks';
import { increaseCounter } from '~/redux/slices/count-slice';

const App = () => {
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
            <button
                onClick={increaseCount}
                className="rounded-lg bg-red-200 p-4"
            >
                Increase Counter
            </button>
            <p>Value of counter is : {store.first_counter}</p>
            <CounterTwo />
        </>
    );
};

export default memo(App);
