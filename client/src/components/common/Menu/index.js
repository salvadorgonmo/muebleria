import React from 'react'
import styles from './Menu.css'

const Menu = ({
  Link
}) => {

  return (
    <React.Fragment>
      <ul>
        <li>
          <Link to='/' className={styles.products}> Menu principal </Link>
        </li>
        <li>
          <Link to='/usuarios'> Usuarios </Link>
        </li>
        <li>
          <Link to='/productos'> Productos </Link>
        </li>
        <li>
          <Link to='/categorias'> Categorias </Link>
        </li>
        <li>
          <Link to='/clientes'> Clientes </Link>
        </li>
      </ul>
    </React.Fragment>
  )
}

export default Menu