import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';
const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [result, setResult] = useState(null);
  const getResult = async (id) => {
    const result = await yelp.get(`/${id}`);
    setResult(result.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);
  if (!result)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.imageStyle} source={{ uri: item }} />
        )}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300,
    margin: 10
  }
});

export default ResultsShowScreen;
