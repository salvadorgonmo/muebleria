import React, { Component } from 'react'
import Column from './Column'
import Row from './Row'
import Header from './Header'
import axios from 'axios'
import styles from './Table.css'

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: null
    }
  }

  transformData ({ categories }) {
    return categories.map(category => {
      return {
        id: category._id,
        category: category.category
      }
    })
  }

  async componentDidMount() {
    const { data } = await axios('http://localhost:3000/categorias')
    const category = this.transformData(data)
    this.setState({
      categories: category
    })
  }

  render() {
      const { categories } = this.state
      console.log(categories)
      return (
        <div className={styles.table}>
            <Header />
            {categories && categories.map(category => (
              <Row key={category.id}>
                <Column>{category.id}</Column>
                <Column>{category.category}</Column>
              </Row>
            ))}
        </div>
      )
  }
}



export default Table