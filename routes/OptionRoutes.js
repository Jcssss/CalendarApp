import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { faCalendarDays, faGear, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import Settings from "../screens/Settings";
import CalendarRoutes from "./CalendarRoutes";
import TodoRoutes from "./TodoRoute";

const Tab = createBottomTabNavigator();

export default function OptionRoutes() {
    return (
        <Tab.Navigator showIcon={true} screenOptions={{ headerShown: false }}>
            <Tab.Screen 
                name="Calendar" 
                component={CalendarRoutes} 
                options={{
                    tabBarIcon: () => (
                        <FontAwesomeIcon icon={faCalendarDays} />
                    )
                }}
            />
            <Tab.Screen 
                name="Task List" 
                component={TodoRoutes} 
                options={{
                    tabBarIcon: () => (
                        <FontAwesomeIcon icon={faClipboardCheck} />
                    )
                }}
            />
            <Tab.Screen 
                name="Settings" 
                component={Settings} 
                options={{
                    tabBarIcon: () => (
                        <FontAwesomeIcon icon={faGear} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}