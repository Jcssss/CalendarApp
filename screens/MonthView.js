import React from "react";
import { Text, View, Button } from "react-native";

export default function MonthView({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Month View Screen</Text>
            <Button title='Switch to Day View' onPress={() => navigation.navigate('Day')}/>
        </View>
    );
}