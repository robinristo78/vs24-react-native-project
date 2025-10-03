import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export default StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: "row",
        alignItems: "center",
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