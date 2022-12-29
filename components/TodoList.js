import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity} from 'react-native';

export default function TodoList({ tasks, removeTask }) {
    return (
        <View style={styles.content}>
            <FlatList style={styles.taskList}
                data={tasks}
                renderItem={({ item }) => (
                    <View key={ item.key } style={styles.item}>
                        <TouchableOpacity onPress={() => removeTask( item.key )}>
                            <Text> { item.text } </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    taskList: {
        flex: 1,
        margin: 20,
        marginBottom: 100
    },
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 2,
        borderRadius: 10,
    },
});