import { useState, useEffect } from 'react';
import { getApartments } from '../apis/home';


export const useFetchApartments = (url) => {
  const [apartments, setApartments] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getApartments();
        if(response.status) {
            const returnData = response.apartments.map(item => ({ label: item.name, value: item.id }))
            setApartments(returnData);
        } else {
            throw new Error(response.message);
        }
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { apartments, error, isLoading };
};

