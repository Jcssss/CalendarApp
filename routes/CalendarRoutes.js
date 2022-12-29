import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MonthView from "../screens/MonthView";
import DayView from "../screens/DayView";

const Stack = createNativeStackNavigator();

export default function CalendarRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
                name="Month" 
                component={MonthView} 
            />
            <Stack.Screen 
                name="Day" 
                component={DayView} 
            />
        </Stack.Navigator>
    )
}