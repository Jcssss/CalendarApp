import React, { useState } from "react";
import { Text, View, TextInput, Pressable, StyleSheet } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";

export default function TodoForm({ navigation }) {
    const [input, setInput] = useState('');

    const updateInput = ( newInput ) => {
        setInput(newInput);
    }

    return (
        <View style={GlobalStyles.page}>
            <Text style={GlobalStyles.title}>Todo Form Screen</Text>
            <View style={GlobalStyles.content}>
                <TextInput 
                    maxLength={40}
                    style={styles.input}
                    placeholder="Create Website, Call Family, etc."
                    onChangeText={ text => updateInput(text)}
                />
                <Pressable
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('Todo', {text: input});
                    }}
                >
                    <Text> Add Task </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        padding: 10
    },
    button: {
        borderColor: 'black',
        marginTop: 10,
        padding: 10
    }
});