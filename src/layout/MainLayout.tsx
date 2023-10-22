import {ReactNode} from 'react';
import Header from '../components/Header';
import styles from '../styles/Layout.module.scss';

const MainLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.layout__container}>
          <Header />
          {children}
        </div>
      </div>
    </>
  )
}

export default MainLayout
