import React, { useState, useEffect } from 'react'
import { Menu } from '../../components/common'

const Dashboard = ({
  Link
}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // put here your call to the API
  })

  return (
    <React.Fragment>
      <Menu 
        Link={Link}/>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </React.Fragment>
    )
}

export default Dashboard
