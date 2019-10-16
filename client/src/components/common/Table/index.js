import React, { Component } from 'react'
import Column from './Column'
import Row from './Row'
import Header from './Header'
import Button from '../Button'
import styles from './Table.css'

const Table = ({
  headers,
  data,
  column,
}) => {
  return (
    <div className={styles.table}>
        <Header classNameRow = {styles.headerRow} classNameColumn = {styles.headerColumn} headers = {headers}/>
        {data && data.map(data => (
          <Row key={data.id} className = {styles.row}>
            <Column className = {styles.column}>{data.category}</Column>
            <Column className = {styles.column}>
              <div className = {styles.containerButton}><Button className={`far fa-edit  ${styles.button}`}></Button> </div>
              <div className = {styles.containerButton}><Button className={`fas fa-trash-alt  ${styles.button}`}></Button></div>
            </Column>
          </Row>
        ))}
    </div>
  )
}
export default Table