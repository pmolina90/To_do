import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../styles/styles";

interface TaskProps {
  text: string;
  completed: boolean;
  onComplete: () => void;
  onRemove: () => void;
}

const Task: React.FC<TaskProps> = ({ text, completed, onComplete, onRemove }) => {
  return (
    <View style={styles.listItem}>
      <Text
        style={[
          styles.task,
          { textDecorationLine: completed ? "line-through" : "none" }
        ]}
      >
        {text}
      </Text>
      <Button title={completed ? "Completed" : "Complete"} onPress={onComplete} />
      <Button title="X" onPress={onRemove} color="crimson" />
    </View>
  );
};

export default Task;