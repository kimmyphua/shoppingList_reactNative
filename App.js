import React, {useState} from 'react';
import {View, Image, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './Components/Header';
import {v4 as uuidv4} from 'uuid';
import ListItem from './Components/ListItem';
import AddItem from './Components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Bread'},
    {id: uuidv4(), text: 'Ice Cream'},
    {id: uuidv4(), text: 'Chocolate'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    if(!text){
    Alert.alert('Error! Please enter an item!', {text: 'OK'})
    }else{
      setItems(prevItems => {
        return [{id: uuidv4(), text}, ...prevItems];
      });
    };
    }


    

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
      {/* <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
        style={styles.img}/> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  // text: {
  //   color: 'darkslateblue'
  //   , fontSize: 30
  // },
  // img: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 100/2
  // }
});
export default App;
