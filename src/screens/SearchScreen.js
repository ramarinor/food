import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import Searchbar from '../components/Searchbar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const { results, errorMessage, searchApi } = useResults();

  return (
    <View>
      <Searchbar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <Text>We found {results.length} results</Text>
      )}
    </View>
  );
};

export default SearchScreen;
