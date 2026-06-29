import styles from './style/education.module.css';
export const Experience = ({ data }) => {
  return (
    <>
      <h1 className={styles.title}>Experience</h1>
      <div>
        {data.experience?.map((exp, index) => (
          <div className={styles.eduItem} key={index}>
            <div>
              <p>
                {exp.startDate} - {exp.endDate}
              </p>
              <p>{exp.location}</p>
            </div>
            <div>
              <h3>{exp.company}</h3>
              <p>{exp.position}</p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
