import React, { useState, useEffect } from 'react';
import {SafeAreaView, Button, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';

function AddRecipe({ navigation }) {
    const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

    return (
      <SafeAreaView style={styles.container}>
          {!image && <Button title="Add Image" onPress={pickImage} />}
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </SafeAreaView>
    );
  }

export default AddRecipe;