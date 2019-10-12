import React, { useState } from 'react'
import styles from './Menu.css'

const handleResponsive = (responsive, setClass) => {
  if (responsive === 'responsive') {
    setClass('')
  } else {
    setClass('responsive')
  }
}

const Menu = ({
  Link
}) => {
  const [ responsiveClass, setClass ] = useState('')
  return (
    <React.Fragment>
      <div className={`${styles['menu-container']} ${styles[responsiveClass]}`}>
        <a>
          <Link to='/' className={styles['menu-item']}> 
            <i className={`fas fa-hammer ${styles.icon}`}></i>FurnitureStore
          </Link>
          <div className={`fa fa-bars ${styles['hamburguer-icon']}`} onClick={() => handleResponsive(responsiveClass, setClass)}></div>
        </a>
        <a>
          <Link to='/usuarios' className={styles['menu-item']}>
          <i className={`fas fa-user ${styles.icon}`}></i> Usuarios </Link>
          <Link to='/productos' className={styles['menu-item']}> 
          <i className={`fas fa-box ${styles.icon}`}></i>Productos </Link>
          <Link to='/categorias' className={styles['menu-item']}> 
          <i className={`fas fa-folder-minus ${styles.icon}`}></i>Categorias </Link>
          <Link to='/clientes' className={styles['menu-item']}> 
          <i className={`fas fa-users ${styles.icon}`}></i>Clientes </Link>
        </a>
      </div>
    </React.Fragment>
  )
}

export default Menu