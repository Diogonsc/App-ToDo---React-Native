import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Feather from "@expo/vector-icons/Feather";

export interface TaskData {
  id: string;
  title: string;
  done: boolean;
}

export interface TaskProps extends TaskData {
  handleToggleTaskDone: (id: string) => void;
  alertRemoveTask: (id: string) => void;
}

export default function Tasks({ id, title, done, handleToggleTaskDone, alertRemoveTask }: TaskProps) {
  return (
    <View style={styles.task}>
      <TouchableOpacity onPress={() => handleToggleTaskDone(id)}>
        {done ? (
          <Image source={require("../../../assets/done.png")} />
        ) : (
          <Image source={require("../../../assets/Vector.png")} />
        )}
      </TouchableOpacity>
      <Text style={done ? styles.done : styles.taskTitle}>
        {title}
      </Text>
      <TouchableOpacity onPress={() => alertRemoveTask(id)}>
        <Feather name="trash" size={20} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
