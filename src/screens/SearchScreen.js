import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ReasultsList from '../components/ResultsList';

function SearchScreen() {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    }

    return <>
        <SearchBar
            onTermChange={setTerm}
            term={term}
            onTermSubmit={() => searchApi(term)}>
        </SearchBar>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
            <ReasultsList results={filterResultsByPrice('$')} title="Cost Effective"></ReasultsList>
            <ReasultsList results={filterResultsByPrice('$$')} title="Bit Pricier"></ReasultsList>
            <ReasultsList results={filterResultsByPrice('$$$')} title="Big Spender"></ReasultsList>
            <ReasultsList results={filterResultsByPrice('$')} title="Cost Effective"></ReasultsList>
            <ReasultsList results={filterResultsByPrice('$$')} title="Bit Pricier"></ReasultsList>
            <ReasultsList results={filterResultsByPrice('$$$')} title="Big Spender"></ReasultsList>
        </ScrollView>
    </>;
}

const styles = StyleSheet.create({})
export default SearchScreen;