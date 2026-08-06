import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ServiceCard({ title, price, description }) {
  return (
    <View style={styles.card}>

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.description}>
        {description}
      </Text>

      <Text style={styles.price}>
        {price} AZN
      </Text>

      <Button
        title="Əlaqə saxla"
        onPress={() => {}}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  description: {
    marginTop: 8,
    fontSize: 16,
  },

  price: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
