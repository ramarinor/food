import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
const ResultsDetail = ({ result, navigate }) => {
  return (
    <TouchableOpacity onPress={() => navigate('ResultsShow')}>
      <View style={styles.containerStyle}>
        <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
        <Text style={styles.nameStyle}>{result.name}</Text>
        <Text>
          {result.rating} Stars, {result.review_count} Reviews
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  nameStyle: {
    fontWeight: 'bold'
  },
  containerStyle: {
    marginLeft: 15
  }
});

export default ResultsDetail;
