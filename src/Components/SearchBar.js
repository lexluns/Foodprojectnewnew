import React from 'react';
import {View ,StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => 
{
    return (

        <View style = {styles.background}>
        <Feather name = 'search' size = {30} style = {styles.searchIcon} />
        <TextInput 
        autoCorrect = {false}
        autoCapitalize = "none"
        style = {styles.textstyles} 
        placeholder = "Search" 
        value = {term} 
        onChangeText = {onTermChange}
        onEndEditing = {onTermSubmit} 
        />

        </View>

      

    );

};

const styles = StyleSheet.create ({

searchIcon: {

    marginVertical: 8,
    marginLeft:10

},    

background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: 'row',
    paddingRight: 10
},

textstyles: {

    width: '85%',
    marginLeft:10,
    fontSize: 18,
    height: '100%'
    



}

});

export default SearchBar;