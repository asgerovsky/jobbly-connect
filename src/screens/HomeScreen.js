import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

import ServiceCard from '../components/ServiceCard';

export default function HomeScreen({ navigation }) {

  const services = [
    {
      id: '1',
      title: 'Şkaf yığılması',
      price: 30,
      description: 'Evə gəlib mebel yığılması xidməti'
    },
    {
      id: '2',
      title: 'Kondisioner təmiri',
      price: 50,
      description: 'Kondisioner yoxlanışı və təmiri'
    },
    {
      id: '3',
      title: 'Elektrik işi',
      price: 25,
      description: 'Ev elektrik problemlərinin həlli'
    }
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.header}>
        Xidmətlər
      </Text>

      <Button
        title="Yeni elan yarat"
        onPress={() => navigation.navigate('CreateService')}
      />

      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <ServiceCard
            title={item.title}
            price={item.price}
            description={item.description}
          />
        )}
      />

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 10,
  },

  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
  },

});
