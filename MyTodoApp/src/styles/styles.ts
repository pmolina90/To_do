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
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  inputWrapper: {
    marginBottom: 20,
  },
  inputBox: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#f9f9f9",
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
  // Primary Action Button - Green (Add / Update Task)
  addButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#4CAF50",  // Green for Add / Update Task
    borderRadius: 5,
  },
  // Secondary Action Buttons - Blue (Set Due Date, Category, Edit)
  button: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#2196F3",  // Blue for Set Due Date / Category / Edit
    borderRadius: 5,
  },
  // Destructive Action Button - Red (Remove Task)
  removeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#F44336",  // Red for Remove Task (Destructive)
    borderRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: "#555",
  },
  listItem: {
    marginBottom: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  scrollView: {
    flex: 1,
  },
  // Modal Styling
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    maxHeight: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalItem: {
    padding: 15,
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  modalItemText: {
    fontSize: 16,
    color: "#333",
  },
  modalCloseButton: {
    marginTop: 20,
    backgroundColor: "#F44336",  // Red for Close Button (Destructive)
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  saveButton: {
    backgroundColor: "#4CAF50",  // Green for Save (Positive Action)
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: "#F44336",  // Red for Cancel (Destructive Action)
    padding: 10,
    borderRadius: 5,
  },
});
