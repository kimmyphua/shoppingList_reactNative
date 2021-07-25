import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    
      <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
        {/* <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
        style={styles.img}/> */}
      </View>
   
  )
}
Header.defaultProps = {
    title: 'My Shopping List'
};

const styles = StyleSheet.create({
  header: {
  height: 60,
  padding: 15,
  backgroundColor: 'darkslateblue' 
  
},
text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center'
}
})
export default Header;