import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from 'react-native';
import axios from 'axios';

// const Tab = createMaterialTopTabNavigator();

const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      renderItem={({item}) => (
        <View style={styles.card}>
          <Image source={{uri: item.image}} style={styles.image} />
          <Text numberOfLines={1} style={styles.title}>
            {item.title}{' '}
          </Text>
          <Text style={styles.price}>₹{item.price}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default Home;
