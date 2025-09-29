import React from 'react'
import styles from './ErrHome.module.scss';



export const ErrHome = () => {
  return (
    <div className={styles.root} >
        <div><img width={250} height={250} src='/img/errHome.png' alt="Error Home" /></div>
        <h1>Произошла ошибка на сервере😕</h1>
        <h2>Попробуйте сделать заказ снова чуть позже :(</h2>
    </div>
  )
}
