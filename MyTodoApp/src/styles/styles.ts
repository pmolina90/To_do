import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 25,
    marginTop: 40,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  inputBox: {
    marginBottom: 10,
  },
  error: {
    borderColor: "red",
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
  button: {
    marginBottom: 10,
  },
  addButton: {
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  listItem: {
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  modalItem: {
    padding: 10,
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  modalItemText: {
    fontSize: 18,
  },
  modalCloseButton: {
    marginTop: 20,
  },
});