import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
  onPress: () => void;
  placeholder: string;
}

const SearchBar = ({ onPress, placeholder }: Props) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color={"white"} />
      <TextInput 
        onPressIn={onPress} // Use onPressIn instead of onPress for TextInput
        placeholder={placeholder}
        placeholderTextColor={'#A8B5DB'}
        value='' 
        onChangeText={() => {}}
        style={styles.input}
      />
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E2F', 
    borderRadius: 25, 
    paddingHorizontal: 15, // Horizontal padding
    paddingVertical: 10,
    marginTop:200 // Vertical padding
  },
  input: {
    flex: 1,
    marginLeft: 10, // Space between icon and input
    color: 'white', // Text color
  },
});