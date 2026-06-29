import styles from './style/education.module.css';
export const Education = ({ data }) => {
  return (
    <>
      <h1 className={styles.title}>Educations</h1>
      <div>
        {data.educations.map((edu, index) => (
          <div className={styles.eduItem} key={index}>
            <div>
              <p>
                {edu.startDate} - {edu.endDate}
              </p>
              <p>{edu.location}</p>
            </div>
            <div>
              <h3>{edu.school}</h3>
              <p>{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
