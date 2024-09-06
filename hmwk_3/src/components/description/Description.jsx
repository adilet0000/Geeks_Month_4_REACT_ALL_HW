import styles from './Description.module.css'

export function Description({ info: { title, description } }) {
   return (
      <>
         <h2 className={styles.title}>{title}</h2>
         <p className={styles.description}>{description}</p>
      </>
   );
}