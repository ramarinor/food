import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Searchbar from '../components/Searchbar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  return (
    <View>
      <Searchbar term={term} onTermChange={(newTerm) => setTerm(newTerm)} />
      <Text>{term}</Text>
    </View>
  );
};

export default SearchScreen;
