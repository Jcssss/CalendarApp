import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function CalendarDays() {
    return (
        <View style={styles.container}>
            <Text style={styles.day}>1</Text>
            <Text style={styles.day}>1</Text>
            <Text style={styles.day}>1</Text>
            <Text style={styles.day}>1</Text>
            <Text style={styles.day}>1</Text>
            <Text style={styles.day}>1</Text>
            <Text style={styles.day}> Hello </Text>
            <Text style={styles.day}> Hello </Text>
        </View>
    );
}

export default CalendarDays;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        margin: 10,
        marginTop: 0
    },
    day: {
        width: '12%',
        margin: 2,
        textAlign: 'center'
    }
});