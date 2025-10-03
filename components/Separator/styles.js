import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: colors.lightGray,
        marginVertical: 8,
    },
    text: {
        color: colors.blue,
        fontWeight: "500",
    },
});