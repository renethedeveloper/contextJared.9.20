import React, { useContext } from 'react'
import {primaryContext} from '../../context/primaryContext'

const Home = () => {
    const {user} =useContext(primaryContext)
  return (
    <div>
      <h1>Home Page</h1>
      <p>The user's name is  {user.name} : </p>
    </div>
  )
}

export default Home
