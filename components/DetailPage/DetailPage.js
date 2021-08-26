import React from 'react';
import { View, SafeAreaView, Image , Text } from 'react-native';
import styles from './styles';
import recipes from '../RecipeNetworking/recipes';


const DetailPage = ({ route}) => {
    const id = route.params.id;
    const recipe = recipes.filter(function(item){
        return item.id == id;
     })[0];
    return (
        <SafeAreaView style={styles.container}>
             <Image
            source={recipe.image}
            style={styles.image} />
            <View style={styles.titles}>
              <Text style={styles.title}>{recipe.name}</Text>
            </View>
        </SafeAreaView>
    )
}

export default DetailPage;