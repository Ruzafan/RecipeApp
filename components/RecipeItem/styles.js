import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      },
      titles: {
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0
      },
      title:{
        fontSize: 30,
        fontWeight: '500',
        textAlign: 'center',
        width: '100%',
        
      },
      image:{
        width: '90%',
        height: 240,
        resizeMode: 'cover',
        marginTop: 50,
        borderRadius: 50
      }
});

export default styles;