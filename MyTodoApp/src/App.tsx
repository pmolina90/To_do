import React, { useState } from "react";
import { View, Text } from "react-native";
import { Title, Paragraph, Button, Card, TextInput } from "react-native-paper";
import { styles } from "./styles/styles";

interface IToDo {
  text: string;
  completed: boolean;
}

export default function App() {
  const [value, setValue] = useState<string>("");
  const [toDoList, setToDos] = useState<IToDo[]>([]);
  const [error, showError] = useState<boolean>(false);

  const handleSubmit = (): void => {
    if (value.trim()) setToDos([...toDoList, { text: value, completed: false }]);
    else showError(true);
    setValue("");
  };

  const removeItem = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDos(newToDoList);
  };

  const toggleComplete = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList[index].completed = !newToDoList[index].completed;
    setToDos(newToDoList);
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>My Todo</Title>
      <View style={styles.inputWrapper}>
        <TextInput
          label="New Task"
          value={value}
          onChangeText={(text) => {
            setValue(text);
            showError(false);
          }}
          style={[styles.inputBox, error && styles.error]}
          mode="outlined"
        />
        <Button mode="contained" onPress={handleSubmit} style={styles.addButton}>
          Add
        </Button>
      </View>
      <Text style={styles.subtitle}>Your Tasks :</Text>
      {toDoList.length === 0 && <Paragraph>No to-do tasks available</Paragraph>}
      {toDoList.map((toDo, index) => (
        <Card key={`${index}_${toDo.text}`} style={styles.listItem}>
          <Card.Content>
            <Paragraph>{toDo.text}</Paragraph>
            <Paragraph>Completed: {toDo.completed ? 'Yes' : 'No'}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => toggleComplete(index)}>
              {toDo.completed ? 'Undo' : 'Complete'}
            </Button>
            <Button onPress={() => removeItem(index)}>Remove</Button>
          </Card.Actions>
        </Card>
      ))}
    </View>
  );
}