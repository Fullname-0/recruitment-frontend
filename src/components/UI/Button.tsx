import Check from '../../icons/Check';
import Delete from '../../icons/Delete';
import Plus from '../../icons/Plus';
import styles from '../../styles/Button.module.scss';

type Props = {
  icon: string;
  onClick?: () => void;
}

const Button = ({icon, onClick}: Props) => {

  switch (icon) {
    case 'check': {
      return <button className={styles.button} onClick={onClick}><Check/></button>
    }
    case 'delete': {
      return <button className={styles.button} onClick={onClick}><Delete/></button>
    }
    case 'plus': {
      return <button className={styles.button} onClick={onClick}><Plus/></button>
    }
    default:
      return <button className={styles.button} onClick={onClick}><Check/></button>
  }
}

export default Button
