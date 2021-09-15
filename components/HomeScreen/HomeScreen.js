import * as React from 'react';
import {View, Pressable} from 'react-native';
import { Icon, SearchBar } from 'react-native-elements'
import styles from './styles';
import RecipeList from '../RecipeList/RecipeList';

function HomeScreen({ navigation }) {
  const search = "";
  updateSearch = (s) => {
    serach = s;
  };
    return (
      <View style={styles.container}>
      <SearchBar
        placeholder="Search"
        onChangeText={this.updateSearch}
        value={search}
        style={styles.search}
      />
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
        <RecipeList navigation={navigation}  search={search}/>
      </View>
    );
  }

export default HomeScreen;