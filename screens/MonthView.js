import React, { useState } from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";

import CalendarHeader from "../components/CalendarHeader";
import CalendarContent from "../components/CalendarContent";

export default function MonthView({ navigation }) {
    const [curMonth, setCurMonth] = useState(0);

    const MonthNamesFull = ["January", "February", 
    "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"];

    return (
        <View style={ GlobalStyles.page }>
            <CalendarHeader 
                monthName={ MonthNamesFull[curMonth] }
                monthNumber={ curMonth } 
                setCurMonth={ setCurMonth }
            />
            <CalendarContent 
            
            />
            {/* <Button title='Switch to Day View' onPress={() => navigation.navigate('Day')}/> */}
        </View>
    );
}