import { createStore } from 'redux';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
  }
};

const persistedState = loadState();

const initialState = {
  tasks: persistedState && persistedState.tasks ? persistedState.tasks : [],
};

let uniqueIdCounter = 0; 

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTask = {
        ...action.payload,
        id: uniqueIdCounter++,
        completed: false, 
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
      
    case 'DELETE_TASK':
      const taskId = action.payload;
      const filteredTasks = state.tasks.filter((task) => task.id !== taskId);
      return {
        ...state,
        tasks: filteredTasks,
      };
      
    case 'EDIT_TASK':
      const editedTask = action.payload;
      const editedTasks = state.tasks.map((task) =>
        task.id === editedTask.id ? editedTask : task
      );
      return {
        ...state,
        tasks: editedTasks,
      };
      case 'TOGGLE_COMPLETED_TASK':
  const completedTaskId = action.payload;
  const updatedTasks = state.tasks.map((task) =>
    task.id === completedTaskId ? { ...task, completed: !task.completed } : task
  );
  return {
    ...state,
    tasks: updatedTasks,
  };
      
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  saveState(store.getState());
});


export default store;
