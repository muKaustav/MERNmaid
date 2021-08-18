// import React, { useState, useEffect } from 'react'
import React from 'react'
// import Axios from 'axios'
import './dashboard.scss'

import profile_logo from '../../assets/profile_logo.png'

// let name = ''

function Dashboard () {
	// const [data, setData] = useState('')

	// useEffect(() => {
	//   Axios.get('/getUser').then(response => {
	//     name = response.data.Name.split(' ')[0]
	//     setData(response.data)
	//   })
	// }, [])

  return (
    <>
      <div className='Navbar'>
          <h1 className='Navbar-logo'>MERNmaid</h1>
          <button className='Navbar-btn'>
          <img src={profile_logo}
            alt="profile-img"
            height='50px'
            width='50px'
            />
          </button>
      </div>
    </>
  )
}

export default Dashboard
