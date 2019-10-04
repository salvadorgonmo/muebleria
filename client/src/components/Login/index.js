import React, { Component } from 'react'
import { Input, Label, Button } from '../common'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user:''
    }
  }

  componentDidMount () {
    // put here the call to the API to call the login method
  }

  render () {
    return ( 
      <div className='Login'>
        <header> Ingresar al sistema </header>
        <Input 
          placeholder='Usuario'
          className='user_input'
          type='email'
        />
        <Input 
          placeholder='Contraseña'
          className='user_input'
          type='password'
        />
        <Button> Ingresar </Button>
      </div>
    )
  }
}

export default Login