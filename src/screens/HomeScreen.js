import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  Button,
  ActivityIndicator
} from 'react-native';

import ServiceCard from '../components/ServiceCard';

// Supabase qoşulması sonra əlavə olunacaq

export default function HomeScreen({ navigation }) {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    loadJobs();

  }, []);


  const loadJobs = async () => {

    // Burada Supabase-dən jobs gələcək
    // Hazırda test məlumatıdır

    const data = [
      {
        id: '1',
        title: 'Şkaf yığılması',
        price: 30,
        description: 'Mebel yığılması xidməti'
      },
      {
        id: '2',
        title: 'Logo dizayn',
        price: 50,
        description: 'Professional dizayn xidməti'
      }
    ];


    setJobs(data);
    setLoading(false);

  };


  if (loading) {
    return (
      <ActivityIndicator size="large" />
    );
  }


  return (

    <View style={styles.container}>


      <Text style={styles.header}>
        Jobbly Connect
      </Text>


      <Button
        title="Yeni elan yarat"
        onPress={() => navigation.navigate('CreateService')}
      />


      <FlatList

        data={jobs}

        keyExtractor={(item)=>item.id}

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

  container:{
    flex:1,
    padding:10
  },


  header:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:15
  }

});
