import React from 'react'
import styles from './Menu.css'

const Menu = ({
  Link
}) => {

  return (
    <React.Fragment>
      <div className={styles.container}>
        <a>
          <Link to='/' className={styles.products}> Menu principal </Link>
        </a>
        <a>
          <Link to='/usuarios'> Usuarios </Link>
        </a>
        <a>
          <Link to='/productos'> Productos </Link>
        </a>
        <a>
          <Link to='/categorias'> Categorias </Link>
        </a>
        <a>
          <Link to='/clientes'> Clientes </Link>
        </a>
      </div>
    </React.Fragment>
  )
}

export default Menu