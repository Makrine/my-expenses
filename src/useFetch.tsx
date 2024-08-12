import { useState, useEffect } from 'react';
import {Item} from "./Interface";

const useFetch = (url : string) => {

    const [data, setData] = useState<Item[] | null>(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from the server
    useEffect(() => {
        fetch(url)
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
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        })
    }, [])

    return { data, isPending, error };
}

export default useFetch;