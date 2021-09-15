import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { useFetch } from "react-async"
import { StyleSheet } from "react-native";
import RecipeItem from '../RecipeItem/RecipeItem';

const RecipeList =  (props) => {
    const search = props.serach;
    var recips = GetRecipes();;
    console.log(search);
    if (search != undefined) {
    console.log("enter filter");
        recips = SearchRecipes(search);
    }
    const navigation = props.navigation;
    return (
        <View style={styles.container}>
            <FlatList 
                data={recips} 
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

const GetRecipes = () => {
    const { data, error } = useFetch(`https://fast-refuge-32530.herokuapp.com/recipes`, {
    headers: { accept: "application/json" },
  })
  if (error) return error.message
  if (data) return data
  return null
}

const SearchRecipes = (search) => {
    const { data, error } = useFetch(`https://fast-refuge-32530.herokuapp.com/recipe/find/`+search, {
    headers: { accept: "application/json" },
  })
  if (error) return error.message
  if (data) return data
  return null
}
export default RecipeList;