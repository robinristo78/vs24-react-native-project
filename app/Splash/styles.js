import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // paddingTop: 144,
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: 200,
    },
    
    titleContainer: {
        marginVertical: 55,
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
    },
    innerTitle: {
        color: "#FF6347",
        textDecorationLine: "underline",
    },
    footerText: {
        paddingHorizontal: 8,
        color: "#4F63AC",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 30,
    },
    
});

export default styles;