import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './dashboard.scss'

function Dashboard () {
	const [data, setData] = useState('')

	useEffect(() => {
	  Axios.get('/getUser').then(response => {
	    setData(response.data)
	  })
	}, [])

  return (
    <>
      <div className='Navbar'>
        <div className="Navbar-logoBox">
          <h1 className="Navbar-logo">MERNmaid</h1>
        </div>
        <div>
          <button className='Navbar-btn'>
          <img src={data.thumbnail}
            alt="profile-img"
            height='50px'
            width='50px'
            referrerPolicy="no-referrer"
            />
          </button>
        </div>  
      </div>
    </>
  )
}

export default Dashboard
