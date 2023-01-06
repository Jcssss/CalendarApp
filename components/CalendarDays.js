import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';

function CalendarDays({ viewDay }) {
    return (
        <View style={styles.container}>
            { 
                Array(35).fill()
                    .map((element, index) => index)
                    .map((element, index) => (
                        <View key={index} style={styles.dayContainer}>
                            <TouchableOpacity style={styles.button} onPress={ () => viewDay(index) }>
                                <Text style={styles.dayText}>{ element }</Text>
                            </TouchableOpacity>
                        </View>
                    ))
            }
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
        marginTop: 0,
    },
    dayContainer: {
        width: '12%',
        marginHorizontal: 4,
        marginVertical: 7,
        height: 90,
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 10
    },
    button: {
        flex: 1,
    },
    dayText: {
        textAlign: 'center',
    }
});