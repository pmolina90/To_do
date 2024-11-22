import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Task from "./components/Task";
import InputField from "./components/InputField";
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
      <Text style={styles.title}>Todo List</Text>
      <InputField
        value={value}
        onChange={(text) => {
          setValue(text);
          showError(false);
        }}
        onSubmit={handleSubmit}
        error={error}
      />
      <Text style={styles.subtitle}>Your Tasks :</Text>
      {toDoList.length === 0 && <Text>No to-do tasks available</Text>}
      {toDoList.map((toDo, index) => (
        <Task
          key={`${index}_${toDo.text}`}
          text={toDo.text}
          completed={toDo.completed}
          onComplete={() => toggleComplete(index)}
          onRemove={() => removeItem(index)}
        />
      ))}
    </View>
  );
}
