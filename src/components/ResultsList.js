import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

function ReasultsList({ title, results }) {
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            showsHorizontalScrollIndicator =  {false}
            horizontal
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return <ResultsDetail result = {item}></ResultsDetail>
            }}
        />
    </View>;
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default ReasultsList;