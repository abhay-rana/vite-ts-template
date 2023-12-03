import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import CounterTwo from '~/components/counter-two';
import { useAppSelector } from '~/hooks/redux-hooks';
import { increaseCounter } from '~/redux/slices/count-slice';
import { RootState } from '~/redux/store';

const App = () => {
    const store = useAppSelector((state) => ({
        first_counter: state.counter_store.counter,
    }));
    const dispatch = useDispatch();

    function increaseCount() {
        dispatch(increaseCounter());
    }
    console.log('component one');
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

export default App;
