import { StyleSheet } from "react-native";


const colors = {
  background: '#1a1a1a',
  primary: '#1e6f9f',
  secondary: '#5e60c2',
  inputBackground: '#262626',
  text: '#fff',
  textMuted: '#808080',
  border: '#333',
  taskBackground: '#262626',
  taskText: '#fff',
  taskDoneText: '#808080',
  createdTaskText: '#4ea8de',
  doneTaskText: '#8284fa',
};

const spacing = {
  small: 8,
  medium: 10,
  large: 20,
  xlarge: 24,
};


export const styles = StyleSheet.create({
  
  task: {
    height: 54,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.taskBackground,
    borderRadius: 10,
    padding: spacing.medium,
    marginHorizontal: spacing.xlarge,
    marginVertical: spacing.small,
    gap: spacing.medium,
  },

  taskTitle: {
    color: colors.taskText,
    fontSize: 16,
    flex: 1,
  },

  done: {
    color: colors.taskDoneText,
    fontSize: 16,
    flex: 1,
    textDecorationLine: 'line-through',
  },
})