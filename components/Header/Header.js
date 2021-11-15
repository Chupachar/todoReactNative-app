import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
} from 'react-native';

export default function Header() {

  return (
    <View style={styles.main}>
        <Text style={styles.main__txt}>To Do:</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
    main: {
        paddingTop: 60,
        height: 100,
        backgroundColor: 'silver',
    },
    main__txt: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
