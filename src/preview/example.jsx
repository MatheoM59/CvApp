import { Personnal } from './personnal';
import styles from './style/example.module.css';
import { Education } from './education';
import { Experience } from './experience';
export const Example = ({ data }) => {
  // console.log(data);
  return (
    <div className={styles.example}>
      <Personnal data={data} />
      <Education data={data} />
      <Experience data={data} />
    </div>
  );
};
