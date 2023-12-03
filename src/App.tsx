import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { increaseCounter } from '~/redux/slices/count-slice';
import { RootState } from '~/redux/store';

const App = () => {
    const store = useSelector(
        (state: RootState) => ({
            first_counter: state.counter_store.counter,
        }),
        shallowEqual
    );
    const dispatch = useDispatch();

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
        </>
    );
};

export default App;
