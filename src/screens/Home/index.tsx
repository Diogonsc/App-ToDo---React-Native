import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { styles } from "./styles";
import NoTasksRegistered from "../../components/NoTasksRegistered";
import uuid from "react-native-uuid";
import Tasks, { TaskData } from "../../components/Tasks";

export default function Home() {
  const [isFocused, setIsFocused] = useState(false);
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    const trimmedTask = task.trim();
    if (!trimmedTask) {
      Alert.alert("Campo vazio", "Por favor, adicione uma tarefa.");
      return;
    }
    if (tasks.some((t) => t.title === trimmedTask)) {
      Alert.alert("Tarefa já cadastrada", "Você já cadastrou essa tarefa, tente cadastrar outra tarefa.");
      return;
    }
    const newTask: TaskData = { id: uuid.v4().toString(), title: trimmedTask, done: false };
    setTasks([...tasks, newTask]);
    setTask("");
  };

  const handleRemoveTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleTaskDone = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const alertRemoveTask = (id: string) => {
    Alert.alert("Remover tarefa", "Deseja remover a tarefa?", [
      {
        text: "Não",
        style: "cancel",
      },
      { text: "Sim", onPress: () => handleRemoveTask(id) },
    ]);
  };

  const completedTasksCount = tasks.filter((task) => task.done).length;

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.content}>
          <Image
            style={styles.logotipo}
            source={require("../../../assets/Logo.png")}
            accessible={true}
            accessibilityLabel="Logo"
          />
          <View style={styles.addTask}>
            <TextInput
              style={[
                styles.inputAdd,
                isFocused && { borderColor: "#5e60c2", borderWidth: 2 },
              ]}
              placeholder="Adicione uma nova tarefa"
              placeholderTextColor="#808080"
              value={task}
              onChangeText={setTask}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              accessibilityLabel="Campo de texto para adicionar uma nova tarefa"
            />
            <TouchableOpacity
              style={styles.btnAdd}
              onPress={handleAddTask}
              accessibilityLabel="Botão para adicionar tarefa"
            >
              <Feather name="plus-circle" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.tasksAddAndDone}>
          <View style={styles.contentTask}>
            <Text style={styles.tasksAdd}>Criadas</Text>
            <Text style={styles.tasksAddNumber}>{tasks.length}</Text>
          </View>
          <View style={styles.contentTask}>
            <Text style={styles.tasksDone}>Concluídas</Text>
            <Text style={styles.tasksDoneNumber}>{completedTasksCount}</Text>
          </View>
        </View>
        <View style={styles.borderBotton}></View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Tasks
              id={item.id}
              title={item.title}
              done={item.done}
              handleToggleTaskDone={handleToggleTaskDone}
              alertRemoveTask={alertRemoveTask}
            />
          )}
          ListEmptyComponent={<NoTasksRegistered />}
        />
      </View>
    </View>
  );
}
