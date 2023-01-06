import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function CalendarHeader({ monthName, year, setCurMonth }) {
    return (
        <View style={ styles.headerContainer }>
            <View style={ styles.header }>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => setCurMonth(false)}
                >
                    <FontAwesomeIcon 
                        size={20} 
                        icon={faArrowLeft} 
                    />
                </TouchableOpacity>

                <View style={styles.title}>
                    <Text style={styles.month}>{ monthName }</Text>
                    <Text style={styles.year}>{ year }</Text>
                </View>
                
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => setCurMonth(true)}
                >
                    <FontAwesomeIcon 
                        size={20} 
                        icon={faArrowRight} 
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 65,
        margin: 20,
        marginBottom: 0
    },
    header: {
        flex: 1,
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        flex: 8,
    },
    month: {
        flex: 2,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 25,

    },
    year: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 12,
    }
});