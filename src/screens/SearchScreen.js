import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ResultsList from '../components/ResultsList';
import Searchbar from '../components/Searchbar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const { results, errorMessage, searchApi } = useResults();

  const filterResultsByPrice = (price) => {
    // price = '$' || '$$' || '$$$'
    return results.filter((result) => result.price === price);
  };

  return (
    <>
      <Searchbar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <ScrollView>
          <ResultsList
            title='Cost Effective'
            results={filterResultsByPrice('$')}
          />
          <ResultsList
            title='Bit Pricier'
            results={filterResultsByPrice('$$')}
          />
          <ResultsList
            title='Big Spencer'
            results={filterResultsByPrice('$$$')}
          />
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
