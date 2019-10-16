import React, { Component } from 'react'
import Table from '../../components/common/Table'
import Button from '../../components/common/Button'
import Label from '../../components/common/Label'
import Input from '../../components/common/Input'
import styles from './Categories.css'
import axios from 'axios'

class Categories extends Component {
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
      const headers = [{
        id: 'category',
        label: 'Categoria',
      },
      {
        id: 'accion',
        label: 'Acciones'
      }]

    return (
      <React.Fragment>
        <div className = { styles.containerLabel }> <Label className = { styles.label }> ADMINISTRACIÓN DE CATEGORÍAS </Label> </div> 
        <div className = { styles.containerBtnIn }>
          <div className = { styles.containerButton }> <Button className = { styles.button }>Nuevo</Button></div>
          <div className = { styles.containerInput }><Input type = "text" placeholder = "  Buscar.." className = { styles.input }></Input><Button className={`fas fa-search ${styles.inputButton}`}></Button></div>
        </div>
        <Table data = { categories } headers = { headers } />
      </React.Fragment>
    )
  }
}

export default Categories