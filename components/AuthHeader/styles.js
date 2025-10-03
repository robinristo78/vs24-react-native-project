import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 54,
    },
    image: {
        width: 18,
        height: 18,
    },
    title: {
        color: colors.blue,
        fontSize: 20,
        fontWeight: "500",
        paddingHorizontal: 16,
    },
});