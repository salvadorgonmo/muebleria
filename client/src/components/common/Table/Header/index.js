import React from 'react'
import Column from '../Column'
import Row from '../Row'
import styles from '../Table.css'

const Header = ({
  headers,
  classNameRow,
  classNameColumn
}) => {
  console.log(headers);
  return(
    <Row className = {classNameRow}>
      { headers.map(column => (
        <Column className={classNameColumn} key = {column.id}>{ column.label }</Column>
      ))}
    </Row>
  )
    }

export default Header