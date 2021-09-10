import React from 'react';
import { View, SafeAreaView, Image , Text, Pressable } from 'react-native';
import styles from './styles';

const RecipeItem = (props) => {
    const {id, name, image} = props.recipe;
    const navigation = props.navigation;
    return (
        <SafeAreaView style={styles.container}>
            <Pressable  
            style={styles.container}
            onPress={() => navigation.navigate('DetailPage',{id: id})}>
                <Image
                source={{uri: image }}
                style={styles.image} />
                <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                </View>
            </Pressable>
        </SafeAreaView>
    )
}

export default RecipeItem;