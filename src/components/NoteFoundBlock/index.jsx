import React from 'react'
import styles from './NoteFoundBlock.module.scss';



export const NoteFoundBlock = () => {
  return (
    <div className={styles.root} >
        <div><img width={250} height={250} src='/img/noteFound.png' alt="efewfw" /></div>
        <h1>Страница не существует!</h1>
        <h2>Ошибка 404 :(</h2>

    </div>
  )
}
