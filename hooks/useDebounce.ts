import { useEffect, useState } from 'react'

/**
 * The `useDebounce` function is a custom hook in TypeScript that returns a debounced value after a
 * specified delay.
 * @param {T} value - The value that you want to debounce. This can be of any type.
 * @param {number} [delay] - The `delay` parameter is an optional number that specifies the delay in
 * milliseconds before updating the debounced value. If no `delay` is provided, the default value is
 * 500 milliseconds.
 * @returns the debounced value.
 */
function useDebounce<T>(value: T, delay?: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debouncedValue
}

export default useDebounce