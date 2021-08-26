import * as React from 'react';
import {View, Pressable} from 'react-native';
import { Icon } from 'react-native-elements'
import styles from './styles';
import RecipeList from '../RecipeList/RecipeList';

function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
      <Pressable 
        style={styles.addBtn}
        onPress={() => navigation.navigate('AddRecipe')}
        >
          <Icon
            name='add-circle-outline'
            color='white'
            size={50} 
          />
        </Pressable>
        <RecipeList navigation={navigation} />
      </View>
    );
  }

export default HomeScreen;