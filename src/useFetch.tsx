import { useState, useEffect } from 'react';

// Define the generic type for useFetch
const useFetch = <T,>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) { // Error coming back from server
                    throw new Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setIsPending(false);
                setData(data);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            });

        return () => abortCont.abort();
    }, [url]); // Dependency array to re-run effect when URL changes

    return { data, isPending, error };
};

export default useFetch;
