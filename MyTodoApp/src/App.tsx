import React, { useState } from "react";
import { View, Text, ScrollView, Modal, TouchableOpacity } from "react-native";
import { Title, Paragraph, Button, Card, TextInput, RadioButton } from "react-native-paper";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { styles } from "./styles/styles";

interface IToDo {
  text: string;
  completed: boolean;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: Date | null;
  category: 'Work' | 'Personal' | 'Shopping' | 'Other';
}

export default function App() {
  const [value, setValue] = useState<string>("");
  const [priority, setPriority] = useState<'High' | 'Medium' | 'Low'>('Medium');
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);
  const [category, setCategory] = useState<'Work' | 'Personal' | 'Shopping' | 'Other'>('Work');
  const [isCategoryPickerVisible, setCategoryPickerVisibility] = useState<boolean>(false);
  const [toDoList, setToDos] = useState<IToDo[]>([]);
  const [error, showError] = useState<boolean>(false);

  const handleSubmit = (): void => {
    if (value.trim()) {
      setToDos([...toDoList, { text: value, completed: false, priority, dueDate, category }]);
      setValue("");
      setDueDate(null);
      setCategory('Work');
      showError(false);
    } else {
      showError(true);
    }
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

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setDueDate(date);
    hideDatePicker();
  };

  const showCategoryPicker = () => {
    setCategoryPickerVisibility(true);
  };

  const hideCategoryPicker = () => {
    setCategoryPickerVisibility(false);
  };

  const handleCategorySelect = (selectedCategory: 'Work' | 'Personal' | 'Shopping' | 'Other') => {
    setCategory(selectedCategory);
    hideCategoryPicker();
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>To-do List</Title>
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
        <RadioButton.Group onValueChange={(newValue: 'High' | 'Medium' | 'Low') => setPriority(newValue)} value={priority}>
          <View style={styles.radioGroup}>
            <RadioButton.Item label="High" value="High" />
            <RadioButton.Item label="Medium" value="Medium" />
            <RadioButton.Item label="Low" value="Low" />
          </View>
        </RadioButton.Group>
        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={showDatePicker} style={styles.button}>
            {dueDate ? `Due Date: ${dueDate.toLocaleDateString()}` : 'Set Due Date'}
          </Button>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <Button mode="contained" onPress={showCategoryPicker} style={styles.button}>
            {`Category: ${category}`}
          </Button>
          <Modal
            visible={isCategoryPickerVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={hideCategoryPicker}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select Category</Text>
                {['Work', 'Personal', 'Shopping', 'Other'].map((cat) => (
                  <TouchableOpacity
                    key={cat}
                    style={styles.modalItem}
                    onPress={() => handleCategorySelect(cat as 'Work' | 'Personal' | 'Shopping' | 'Other')}
                  >
                    <Text style={styles.modalItemText}>{cat}</Text>
                  </TouchableOpacity>
                ))}
                <Button onPress={hideCategoryPicker} style={styles.modalCloseButton}>
                  Close
                </Button>
              </View>
            </View>
          </Modal>
          <Button mode="contained" onPress={handleSubmit} style={styles.button}>
            Add
          </Button>
        </View>
      </View>
      <Text style={styles.subtitle}>Your Tasks :</Text>
      <ScrollView style={styles.scrollView}>
        {toDoList.length === 0 && <Paragraph>No to-do tasks available</Paragraph>}
        {toDoList.map((toDo, index) => (
          <Card key={`${index}_${toDo.text}`} style={styles.listItem}>
            <Card.Content>
              <Paragraph>{toDo.text}</Paragraph>
              <Paragraph>Priority: {toDo.priority}</Paragraph>
              <Paragraph>Due Date: {toDo.dueDate ? toDo.dueDate.toLocaleDateString() : 'None'}</Paragraph>
              <Paragraph>Category: {toDo.category}</Paragraph>
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
      </ScrollView>
    </View>
  );
}