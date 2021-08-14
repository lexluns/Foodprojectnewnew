import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from './ResultsDetail';



const ResultsList = ({ title, results }) => {

    return (
    
    <View style = {styles.container}>

        <Text style = {styles.title}>{title}</Text>
       <FlatList 
        horizontal = {true}
        data = {results}
        showsHorizontalScrollIndicator = {false}
        keyExtractor = {(result) => result.id}
        renderItem = {({item}) => {
            return <ResultsDetail result = {item} />;

        }}

       />

    </View>
    
    
    );

};

const styles = StyleSheet.create ({

    container: {

        marginBottom: 10
    },

    title: {
        fontSize: 18,
        marginLeft: 15,
        marginBottom: 5,
        fontWeight: 'bold'

    }




});

export default ResultsList;