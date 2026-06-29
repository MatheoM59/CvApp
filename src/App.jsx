import styles from './App.module.css';
import { Title } from './components/title';
import { Creator } from './components/creator';
import { Example } from './preview/example';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({
    personal: {},
    educations: [],
    experience: [],
  });
  return (
    <div className={styles.all}>
      <Title text="Make It" />
      <div className={styles.content}>
        <div className={styles.creator}>
          <Creator setData={setData} data={data} />
        </div>
        <div className={styles.example}>
          <Example data={data} />
        </div>
      </div>
    </div>
  );
}
export default App;
