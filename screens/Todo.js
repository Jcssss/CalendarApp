import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import TodoList from "../components/TodoList";
import GlobalStyles from "../styles/GlobalStyles";

export default function Todo({ navigation, route }) {
    const [tasks, setTasks] = useState([
        { text: 'Justin', key: '1' },
        { text: 'Jessica', key: '2' },
        { text: 'Jet', key: '3' },
        { text: 'Emily', key: '4' },
    ]);

    function addTask (input) {
        setTasks([
            ...tasks,
            { text: input, key: (Math.floor(Math.random() * 100000)).toString()}
        ]);
    }

    function removeTask ( id ) {
        setTasks(() => (
            tasks.filter(item => item.key != id)
        ));
    }

    let content;

    useEffect(() => {
        if (route.params) {
            addTask(route.params.text);
        }
    }, [route.params]);

    if (tasks.length != 0) {
        content = <TodoList tasks={tasks} removeTask={removeTask}/>
    } else {
        content = 
        <View style={GlobalStyles.content}>
            <Text> No Current Tasks </Text>
        </View>
    }

    return (
        <View style={GlobalStyles.page}>
            {/* Header */}
            <Text style={GlobalStyles.title}> Task List </Text>

            {/* Add New Task Button */}
            <TouchableOpacity 
                style={styles.addButton} 
                onPress={() => {
                    navigation.navigate('New Task Form');
                }}
            >
                <FontAwesomeIcon 
                    size={20} 
                    icon={faPlus} 
                    style={styles.icon}
                />
            </TouchableOpacity>

            {/* Current Tasks */}
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    addButton: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 2,
        bottom: 20,
        right: 20,
        position: 'absolute',
    },
});