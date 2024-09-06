import styles from './Todo.module.css'

export function Todo({ props }) {
   return (
      <p className={styles.prop}>{props}</p>
   );
}