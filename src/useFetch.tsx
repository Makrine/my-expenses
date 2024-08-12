import { useState, useEffect } from 'react';
import {Item} from "./Interface";

const useFetch = (url : string) => {

    const [data, setData] = useState<Item[] | null>(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from the server
    useEffect(() => {
      const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
        .then(res => {
          if (!res.ok) { // error coming back from server
            throw Error('could not fetch the data for that resource');
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
            console.log('fetch aborted');
          } else {
          setIsPending(false);
          setError(err.message);
          }
        })

        return () => abortCont.abort();
    }, [])

    return { data, isPending, error };
}

export default useFetch;