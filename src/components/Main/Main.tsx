import styles from './Main.module.scss';

interface MainProps { }

export const Main = ({ }: MainProps) => (
  <div className={styles.main}>
    Main Component
  </div>
);
