import React from 'react'
import Column from '../Column'
import Row from '../Row'
import styles from '../Table.css'

const Header = () => (
  <Row className={styles.header}>
    <Column> # </Column>
    <Column> Categoria </Column>
    <Column> Acciones </Column>
  </Row>
)

export default Header