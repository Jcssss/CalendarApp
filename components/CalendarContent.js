import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import CalendarDays from './CalendarDays';

export default function CalendarContent() {
    const dayNames = [
        { name: 'Sun', key: '1'},
        { name: 'Mon', key: '2'},
        { name: 'Tue', key: '3'},
        { name: 'Wed', key: '4'},
        { name: 'Thu', key: '5'},
        { name: 'Fri', key: '6'},
        { name: 'Sat', key: '7'},
    ];

    return (
        <View>
            <View style={styles.dayNameContainer}>
                <View style={styles.dayList}>
                    {
                        dayNames.map((item) => (
                            <View key={ item.key } style={styles.dayNames}>
                                <Text>{ item.name }</Text>
                            </View>
                        ))
                    }
                </View>
            </View>
            <View style={{height: 500}}>
                <CalendarDays />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    dayNameContainer: {
        height: 40,
        margin: 10,
        marginBottom: 0
    },
    dayList: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'space-around'
    },
    dayNames: {
        width: '12%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});