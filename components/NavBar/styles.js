import { StyleSheet } from "react-native";
import colors from "@/utils/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#fff",
  },
  iconWrapper: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default styles;