import React, {useState} from 'react';
import { 
  StyleSheet, 
  View,
  TextInput,
  Button,
} from 'react-native';

export default function Form({addHandler}) {

    const [text, setText] = useState('');

    const onChange = (text) => {
        setText(text);
    }

  return (
    <View>
        <TextInput 
        style={styles.form__input} 
        onChangeText={onChange} 
        placeholder={'Write the task'}
        ></TextInput>
        <Button onPress={() => addHandler(text)} title={'Add Todo'}/>
    </View>
  );
}
 
const styles = StyleSheet.create({
    form__input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%',
    }
});
