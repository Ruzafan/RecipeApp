import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import RecipeItem from '../RecipeItem/RecipeItem';
import recipes from '../RecipeNetworking/recipes';

const RecipeList = (props) => {
    const recipes = GetRecipes();
    const navigation = props.navigation;
    return (
        <View style={styles.container}>
            <FlatList 
                data={recipes} 
                
                renderItem={({item}) => <RecipeItem recipe={item} navigation={navigation} /> }
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%'
    }
});

function GetRecipes() {
    return recipes;
}
export default RecipeList;