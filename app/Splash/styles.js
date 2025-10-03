import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

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
        color: colors.orange,
        textDecorationLine: "underline",
    },
    footerText: {
        paddingHorizontal: 8,
        color: colors.blue,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 30,
    },
    
});

export default styles;