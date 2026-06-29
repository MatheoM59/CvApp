import { Name } from './name';
import styles from './style/personnal.module.css';
export const Personnal = ({ data }) => {
  const personal = data.personal;

  return (
    <div className={styles.personnal}>
      <Name data={data} />
      {personal.adress ? <p>{personal.adress}</p> : <p></p>}
      <div className={styles.contact}>
        <p>{personal.email}</p>
        <p>{personal.phone}</p>
      </div>
    </div>
  );
};
