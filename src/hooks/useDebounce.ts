import debounce from 'lodash.debounce';
import { useEffect, useMemo, useRef } from 'react';

/**
 * A custom hook that debounces a callback function.
 * @param {Function} callback - The callback function to debounce.
 * @param {number} timer - The debounce delay in milliseconds (default: 1000ms).
 * @returns {Function} - The debounced function.
 */

interface UseDebounce {
    callback: (...args: any[]) => void;
    timer?: number;
}

export const useDebounce: UseDebounce = (callback, timer = 1000) => {
    const debouncedCallbackRef = useRef();

    const debouncedCallback = useMemo(() => {
        const debouncedFunction = (...args) => {
            debouncedCallbackRef.current?.(...args);
        };

        return debounce(debouncedFunction, timer);
    }, [timer]);

    useEffect(() => {
        debouncedCallbackRef.current = callback;
    }, [callback, debouncedCallback]);

    useEffect(() => {
        return () => {
            debouncedCallback.cancel(); // Clean up the debounce timer
        };
    }, [debouncedCallback]);

    return debouncedCallback;
};

//! Example

// const Input = () => {
//     const [value, setValue] = useState();

//     const debouncedRequest = useDebounce(callbackfunction,1000);

//     const onChange = (e) => {
//         const value = e.target.value;
//         setValue(value);

//         debouncedRequest(callbackfunction);
//     };

//     return <input onChange={onChange} value={value} />;
// };
