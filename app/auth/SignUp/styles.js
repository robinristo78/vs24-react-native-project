import { StyleSheet } from "react-native";
import colors from "@/utils/colors";

export default StyleSheet.create({
    container: {
        padding: 24,
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    agreeText: {
        color: colors.blue,
        marginHorizontal: 14,
    },
    agreeTextBold: {
        fontWeight: '700',
    },
    button: {
        marginVertical: 20,
    },
        footer: {
        textAlign: 'center',
        marginTop: 20,
        color: colors.blue,
    },
    footerLink: {
        fontWeight: '700',
        color: colors.blue,
    },
});