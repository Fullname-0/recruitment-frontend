import {useSelector} from 'react-redux';
import Task from './Task';
import styles from '../styles/TaskList.module.scss';
import Message from "./Message";
import {useEffect, useState} from "react";

const TasksList = () => {
  const [filteredTasks, setFilteredTasks] = useState<any[]>([]);
  const tasks = useSelector((store: any) => store.tasks)

  useEffect(() => {
    setFilteredTasks([
      ...tasks.filter((item: any) => !item.status),
      ...tasks.filter((item: any) => item.status),
    ])
  }, [tasks])

  return (
    <>
      {filteredTasks.length < 1 && <Message />}
      <ul className={styles.taskList}>
        {filteredTasks.map((item: {id: number, text: string, status: boolean}, index: number) => {
          return <Task key={index} task={item} />
        })}
      </ul>
    </>
  )
}

export default TasksList
