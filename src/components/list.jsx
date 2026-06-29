import { Button } from './button';
import styles from './list.module.css';

export const List = (props) => {
  return (
    <>
      {props.items && props.items.length === 0 && (
        <div>You haven't added any studies, add one !</div>
      )}

      {props.items && props.items.length > 0 && (
        <div className={styles.container}>
          {props.items.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                <div>
                  <button>{item.school}</button>
                </div>
                <div>
                  <Button
                    content="Edit"
                    handleClick={() => props.onEdit(index)}
                  />
                  <Button
                    content={index}
                    handleClick={() => props.onDelete(index)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export const ListExp = (props) => {
  return (
    <>
      {props.items && props.items.length === 0 && (
        <div>You haven't added any experiences, add one ! </div>
      )}

      {props.items && props.items.length > 0 && (
        <div className={styles.container}>
          {props.items.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                <div>
                  <button>{item.company}</button>
                </div>
                <div>
                  <Button
                    content="Edit"
                    handleClick={() => props.onEdit(index)}
                  />
                  <Button
                    content={index}
                    handleClick={() => props.onDelete(index)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
