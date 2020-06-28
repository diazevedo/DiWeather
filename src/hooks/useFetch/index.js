import { useState, useEffect } from 'react';
import { forecast, current } from '~/utils/data/fakeWeather';
import api from '~/services/api';

const useFetch = ({ url, options, callback = false }) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setResponse([]);
    setError(false);
    setLoading(true);

    const fetchData = async () => {
      try {
        const result = await api.get(url, {
          params: options,
        });

        let { data } = result;

        if (callback) {
          data = callback(data);
        }

        setResponse(data);
      } catch (err) {
        console.tron.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, options, callback]);

  return [response, error, loading];
};

export default useFetch;
