import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 35,
    alignItems: "center",
  },
  inputWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  inputBox: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 30,
    marginTop: 40,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: "purple",
  },
  listItem: {
    width: "100%",
    marginBottom: 10,
  },
  addButton: {
    alignItems: "flex-end",
  },
  error: {
    borderColor: "red",
  },
});