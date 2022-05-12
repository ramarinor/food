import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Searchbar from '../components/Searchbar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {
      const respone = await yelp.get('/search', {
        params: { limit: 50, term, location: 'san jose' }
      });
      setResults(respone.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  return (
    <View>
      <Searchbar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <Text>We found {results.length} results</Text>
      )}
    </View>
  );
};

export default SearchScreen;
