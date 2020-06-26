import { useState, useEffect } from 'react';
import { forecast, current } from '~/utils/data/fakeWeather';

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
        // console.tron.log(options, 'options');
        // console.tron.log(url, 'url');

        // const response = await api.get(url, {
        //   params: options,
        // });

        // console.tron.log(response);
        // let { data } = response;
        let data = {};
        if (url === 'current') {
          data = current;
        } else {
          data = forecast;
        }

        if (callback) {
          data = callback(data);
          // console.tron.log('alksndaslkdn');
        }
        // console.tron.log(data);
        setResponse([data]);
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
