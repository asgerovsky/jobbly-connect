import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Qeydiyyat
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ad Soyad"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
      />

      <TextInput
        style={styles.input}
        placeholder="Telefon nömrəsi"
      />

      <TextInput
        style={styles.input}
        placeholder="Şifrə"
        secureTextEntry
      />

      <Button
        title="Qeydiyyatdan keç"
        onPress={() => {}}
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
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },
});
