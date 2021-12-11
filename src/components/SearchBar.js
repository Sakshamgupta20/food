import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

function SearchBar({ term, onTermChange, onTermSubmit }) {
    return <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle} color="black" />
        <TextInput
            value={term}
            style={styles.inputStyle}
            placeholder='Search'
            onChangeText={onTermChange}
            autoCapitalize='none'
            autoCorrect={false}
            onEndEditing={onTermSubmit}>
        </TextInput>
    </View>;
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})
export default SearchBar;