import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchProducts();
  });

  const fetchProducts = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
    } catch (error) {
      console.log('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>;
  }

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <ProductCard item={item} />}
    />
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductList;
