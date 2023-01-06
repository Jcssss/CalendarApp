import React, { useState } from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";

import CalendarHeader from "../components/CalendarHeader";
import CalendarContent from "../components/CalendarContent";

export default function MonthView({ navigation }) {
    const [curMonth, setCurMonth] = useState(0);
    const [curYear, setCurYear] = useState(2023);

    const MonthNamesFull = ["January", "February", 
    "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"];

    const changeMonth = ( isIncrease ) => {
        if (isIncrease) {
            if (curMonth == 11) {
                setCurYear (curYear + 1);
            }
            setCurMonth((curMonth + 1) % 12);
        } else {
            if (curMonth == 0 && curYear == 2000) {
                return;
            }

            if (curMonth == 0) {
                setCurYear (curYear - 1);
            }
            setCurMonth((curMonth + 11) % 12);
        }
    }

    const viewDay = (dayNum) => {
        navigation.navigate('Day', dayNum)
    }

    return (
        <View style={ GlobalStyles.page }>
            <CalendarHeader 
                monthName={ MonthNamesFull[curMonth] }
                year={ curYear } 
                setCurMonth={ changeMonth }
            />
            <CalendarContent 
                viewDay = {viewDay}
            />
        </View>
    );
}