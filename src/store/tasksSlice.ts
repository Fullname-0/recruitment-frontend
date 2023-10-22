const SET_TASK = 'set/task'
const SET_ACTIVE = 'active/task'
const REMOVE_ACTIVE = 'nonactive/task'
const REMOVE_TASK = 'remove/task'
const CLEAR_TASKS = 'clear/tasks'

type Task = {
  id: number,
  text: string,
  status: boolean,
}

type Tasks = {
  tasks: Task[],
  lastUsedId: number,
}

type ActionType = {
  type: string;
  payload: any;
}

const InitialState: Tasks = {
  tasks: [],
  lastUsedId: 0,
}

export const tasksReducer = (state: Tasks = InitialState, action: ActionType)=> {
  switch (action.type) {
    case SET_TASK: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        lastUsedId: action.payload.id
      }
    }
    case SET_ACTIVE: {
      return {
        ...state,
        tasks: state.tasks.map((it, index) => {
          return it.id === action.payload ? {...it, status: true} : it
        }),
        lastUsedId: state.lastUsedId
      }
    }
    case REMOVE_ACTIVE: {
      return {
        ...state,
        tasks: state.tasks.map((it, index) => {
          return it.id === action.payload ? {...it, status: false} : it
        }),
        lastUsedId: state.lastUsedId
      }
    }
    case REMOVE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter((it, index) => {
          return it.id !== action.payload && it
        }),
        lastUsedId: state.lastUsedId
      }
    }
    case CLEAR_TASKS: {
      return {
        tasks: [],
        lastUsedId: 0
      }
    }
    default:
      return state;
  }
}

export const setTask = (payload: Task) => {
  return {type: SET_TASK, payload: payload}
}

export const setActive = (payload: number) => {
  return {type: SET_ACTIVE, payload: payload}
}

export const removeActive = (payload: number) => {
  return {type: REMOVE_ACTIVE, payload: payload}
}

export const removeTask = (payload: number) => {
  return {type: REMOVE_TASK, payload: payload}
}

export const clearTasks = () => {
  return {type: CLEAR_TASKS}
}
