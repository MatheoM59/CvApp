import styles from './form.module.css';

export const Formulaire = ({
  type = 'text',
  placeHolder = 'Default',
  legend = '',
  value,
  onChange,
}) => {
  return (
    <div className={styles.formGroup}>
      {legend && <legend className={styles.legend}>{legend}</legend>}
      <input
        className={styles.input}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
