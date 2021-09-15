import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    addBtn: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        zIndex: 200,
        backgroundColor: '#00aced',
        borderRadius: 50
    },
    search : {
        width: 100
    }
});

export default styles;