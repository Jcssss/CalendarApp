import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Todo from "../screens/Todo";
import TodoForm from "../screens/TodoForm";

const Stack = createNativeStackNavigator();

export default function TodoRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
                name="Todo" 
                component={Todo} 
            />
            <Stack.Screen 
                name="New Task Form" 
                component={TodoForm} 
            />
        </Stack.Navigator>
    )
}