import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    searchApi('');
  }, []);

  const searchApi = async (searchTerm) => {
    try {
      const respone = await yelp.get('/search', {
        params: { limit: 50, term: searchTerm, location: 'san jose' }
      });
      setResults(respone.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };
  return { results, errorMessage, searchApi };
};
