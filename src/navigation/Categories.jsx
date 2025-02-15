import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios(
          'https://fakestoreapi.com/products/categories',
        );
        console.log(response);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <FlatList
      data={categories}
      numColumns={2}
      renderItem={({item}) => (
        <View style={styles.card}>
          <Text style={styles.categoryText}>{item}</Text>
        </View>
      )}
      contentContainerStyle={styles.flatListBackground}
    />
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  flatListBackground: {
    backgroundColor: '#111827',
    flexGrow: 1,
    paddingVertical: 10,
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    textAlign: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    textAlign: 'center',
    alignItems: 'center',
    color: '#333',
  },
});

export default Categories;
