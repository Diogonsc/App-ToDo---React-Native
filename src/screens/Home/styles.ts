import { StyleSheet } from 'react-native';

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
  container: {
    flex: 1,
  },

  box1: {
    width: '100%',
    height: 180,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    top: 55,
    zIndex: 2,
  },

  logotipo: {
    alignSelf: 'center',
    marginBottom: spacing.large,
  },

  addTask: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: spacing.xlarge,
    paddingRight: spacing.xlarge,
    gap: spacing.medium
  },

  inputAdd: {
    backgroundColor: colors.inputBackground,
    color: colors.text,
    flex: 1,
    height: 54,
    marginTop: spacing.large,
    borderRadius: 10,
    padding: spacing.medium,
    borderColor: 'transparent',
  },

  btnAdd: {
    backgroundColor: colors.primary,
    width: 54,
    height: 54,
    borderRadius: 10,
    marginTop: spacing.large,
    justifyContent: 'center',
    alignItems: 'center',
  },

  box2: {
    flex: 1,
    backgroundColor: colors.background,
  },

  tasksAddAndDone: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    paddingLeft: spacing.xlarge,
    paddingRight: spacing.xlarge,
  },

  contentTask: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.small,
  },

  tasksAdd: {
    color: colors.createdTaskText,
    fontSize: 18,
  },

  tasksAddNumber: {
    minWidth: 20,
    borderRadius: 12,
    color: colors.text,
    backgroundColor: colors.inputBackground,
    paddingHorizontal: spacing.small,
    paddingVertical: spacing.small / 2,
    textAlign: 'center',
  },

  tasksDone: {
    color: colors.doneTaskText,
    fontSize: 18,
  },

  tasksDoneNumber: {
    minWidth: 20,
    borderRadius: 12,
    color: colors.text,
    backgroundColor: colors.inputBackground,
    paddingHorizontal: spacing.small,
    paddingVertical: spacing.small / 2,
    textAlign: 'center',
  },

  borderBotton: {
    height: 1,
    backgroundColor: colors.border,
    marginHorizontal: spacing.xlarge,
    marginVertical: spacing.medium,
  },

});
