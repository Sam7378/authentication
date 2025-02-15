import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const ProductCard = ({item}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: item.Image}} style={styles.image} />

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    color: 'green',
    marginTop: 5,
  },
});

export default ProductCard;
