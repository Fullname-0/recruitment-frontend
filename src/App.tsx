import React from 'react';
import TasksList from "./components/TasksList";
import Input from "./components/Input";
import styles from './styles/Layout.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {clearTasks} from "./store/tasksSlice";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((store: any) => store.tasks)

  const handleButton = () => {
    dispatch(clearTasks())
  }

  return (
    <main>
      <Input />
      <TasksList />
      {tasks.tasks.length > 1 && <div className={styles.layout__box}>
        <button className={styles.layout__button} onClick={handleButton}>
          Clear all
        </button>
      </div>}

    </main>
  );
}

export default App;
