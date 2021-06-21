import { useState, useEffect, useRef } from "react";

const useFetch = (url) => {
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data: data,
          });
        } else {
          console.log("setState no se llamo");
        }
      });
  }, [url]);

  return state;
};

export default useFetch;
