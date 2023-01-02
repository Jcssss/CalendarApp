import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function CalendarHeader({ monthName, monthNumber, setCurMonth }) {
    return (
        <View style={ styles.headerContainer }>
            <View style={ styles.header }>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => setCurMonth((monthNumber + 11) % 12)}
                >
                    <FontAwesomeIcon 
                        size={20} 
                        icon={faArrowLeft} 
                    />
                </TouchableOpacity>
                <Text style={styles.title}>{ monthName }</Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => setCurMonth((monthNumber + 1) % 12)}
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
        height: 60,
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
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 30
    }
});