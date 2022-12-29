import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
    page: {
        flex: 1, 
        backgroundColor: '#fff',
    },
    title: {
        marginTop: 55,
        fontSize: 25,
        fontStyle: 'bold',
        textAlign: 'center',
    },
    content: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
});

export default GlobalStyles;