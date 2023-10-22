import Button from "./UI/Button";
import styles from '../styles/Task.module.scss'
import {useDispatch} from "react-redux";
import {removeActive, removeTask, setActive} from "../store/tasksSlice";

type Props = {
  task: {
    id: number;
    text: string;
    status: boolean;
  };
}

const Task = ({task}: Props) => {
  const dispatch = useDispatch()

  const handleActive = () => {
    task.status ? dispatch(removeActive(task.id)) : dispatch(setActive(task.id))
  }

  const handleRemove = () => {
    dispatch(removeTask(task.id))
  }

  return (
    <li className={styles.task}>
      <div className={`${styles.task__button} ${task.status ? styles.task__active : ''}`}>
        <Button icon={'check'} onClick={handleActive} />
      </div>
      <div className={styles.task__box}>
        <p className={task.status ? styles.active : ''}>{task.text}</p>
      </div>
      <div className={styles.task__button}>
        <Button icon={'delete'} onClick={handleRemove} />
      </div>
    </li>
  )
}

export default Task
