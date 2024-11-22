import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#861388",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 12,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
      },
      container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
      },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
      },
    button: {
        backgroundColor: '#6200ee',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
      },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
    climaContainer: {
        marginTop: 16,
        paddingHorizontal: 16,
    },
});