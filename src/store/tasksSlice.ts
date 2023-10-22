import {createSlice} from "@reduxjs/toolkit";

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

const initialState: Tasks = {
  tasks: [],
  lastUsedId: 0,
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTask(state: Tasks, action: ActionType) {
      state.tasks = [...state.tasks, action.payload]
      state.lastUsedId = action.payload.id
    },
    setActive(state: Tasks, action: ActionType) {
      state.tasks = state.tasks.map((it, index) => {
        return it.id === action.payload ? {...it, status: true} : it
      })
    },
    removeActive(state: Tasks, action: ActionType) {
      state.tasks = state.tasks.map((it, index) => {
        return it.id === action.payload ? {...it, status: false} : it
      })
    },
    removeTask(state: Tasks, action: ActionType) {
      state.tasks = state.tasks.filter((it, index) => {
        return it.id !== action.payload && it
      })
    },
    clearTasks(state: Tasks) {
      state.tasks = []
      state.lastUsedId = 0
    }
  }
})

export const {
  setTask,
  setActive,
  removeActive,
  clearTasks,
  removeTask} = taskSlice.actions

export default taskSlice.reducer
