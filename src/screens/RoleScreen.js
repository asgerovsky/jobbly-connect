import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function RoleScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Siz kimsiniz?
      </Text>

      <Button
        title="Xidmət axtarıram"
        onPress={() => navigation.navigate('Home')}
      />

      <View style={{height: 20}} />

      <Button
        title="Xidmət göstərirəm"
        onPress={() => navigation.navigate('Home')}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },

});
