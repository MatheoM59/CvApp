import { Personal, Educations, Experiences } from './card';
import styles from './style/creator.module.css';

export const Creator = ({ setData, data }) => {
  return (
    <>
      <div className={styles.items}>
        <Personal className={styles.item} setData={setData} data={data} />
      </div>
      <div className={styles.items}>
        <Educations className={styles.item} setData={setData} data={data} />
        <Experiences className={styles.item} setData={setData} data={data} />
      </div>
    </>
  );
};
