import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { styles } from "../styles/styles";

interface InputFieldProps {
  value: string;
  onChange: (text: string) => void;
  onSubmit: () => void;
  error: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange, onSubmit, error }) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder="Enter your todo task..."
        value={value}
        onChangeText={onChange}
        style={[styles.inputBox, error && styles.error]}
      />
      <Button title="Add Task" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  inputBox: {
    width: 200,
    borderColor: "purple",
    borderRadius: 8,
    borderWidth: 2,
    paddingLeft: 8
  },
  error: {
    borderColor: "red"
  }
});

export default InputField;