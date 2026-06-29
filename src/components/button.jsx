import styles from './button.module.css';

export const Button = ({ content, handleClick }) => {
  return (
    <button className={styles.button} onClick={handleClick}>
      {content}
    </button>
  );
};
