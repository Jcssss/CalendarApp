import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import OptionRoutes from './routes/OptionRoutes';

export default function App() {
    return (
        <NavigationContainer>
            <OptionRoutes />
        </NavigationContainer>
    );
}
