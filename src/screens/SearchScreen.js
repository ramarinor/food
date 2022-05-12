import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Searchbar from '../components/Searchbar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const respone = await yelp.get('/search', {
      params: { limit: 50, term, location: 'san jose' }
    });
    setResults(respone.data.businesses);
  };

  return (
    <View>
      <Searchbar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <Text>{results.length}</Text>
    </View>
  );
};

export default SearchScreen;
