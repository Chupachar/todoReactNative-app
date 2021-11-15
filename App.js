import React, { useState } from 'react';
import Header from './components/Header/Header';
import ListItem from './components/ListItem/ListItem';
import Form from './components/Form/Form';
import { 
  StyleSheet, 
  View, 
  FlatList,
} from 'react-native';

export default function App() {

  const [list, setList] = useState([
    {text: 'Todo one', key: '1'},
    {text: 'Todo Two', key: '2'},
    {text: 'Todo Three', key: '3'},
    {text: 'Todo Four', key: '4'},
  ]);

  const addHandler = (text) => {
    setList((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list
      ]
    })
    update();
  }

  const deleteHandler = (key) => {
    setList((list) => {
      return list.filter(setList => setList.key != key);
    });
  }

  const update = () => {
    setList({list: "" }); 
}

  return (
    <View >
      <Header/>
      <Form addHandler={addHandler} />
      <View>
        <FlatList data={list} renderItem={({ item }) => (
          <ListItem el={item} deleteHandler={deleteHandler}/>
        )}/>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({

});
