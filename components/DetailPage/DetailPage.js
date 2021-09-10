import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Image , Text } from 'react-native';
import styles from './styles';


const DetailPage = ({route}) => {
    const id = route.params.id;
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch('https://fast-refuge-32530.herokuapp.com/recipe/'+id)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));  
    }, []);
    return (
        <SafeAreaView style={styles.container}>
              <Image
              source={{uri: data.image }}
              style={styles.image} />
              <View style={styles.titles}>
                <Text style={styles.title}>{data.name}</Text>
              </View>
        </SafeAreaView>
    )
}
const GetRecipe = (id) => {
  fetch('https://fast-refuge-32530.herokuapp.com/recipe/1')
  .then((response) => response.json())
  .then((json) => setData(json))
  .catch((error) => console.error(error))
  .finally(() => setLoading(false));
}
export default DetailPage;