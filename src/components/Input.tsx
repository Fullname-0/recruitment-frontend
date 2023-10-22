import styles from '../styles/Form.module.scss';
import Button from "./UI/Button";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setTask} from "../store/tasksSlice";

const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const lastUsedId = useSelector((store: any) => store.tasks.lastUsedId);
  const dispatch = useDispatch()

  const handlerInput = (e: any) => {
    setInputValue(e.target.value)
  }

  const handleButton = () => {
    if(inputValue.trim().length > 0) {
      dispatch(setTask({id: lastUsedId + 1, text: inputValue.trim(), status: false}))
      setInputValue('')
    }
  }

  return (
    <div className={styles.form}>
      <input className={styles.input} value={inputValue}
             onKeyDown={(e) => e.key === "Enter" && handleButton()}
             onChange={handlerInput} placeholder={'Write task...'} />
      <div className={styles.input__button}>
        <Button icon={'plus'} onClick={handleButton} />
      </div>
    </div>
  )
}

export default Input
