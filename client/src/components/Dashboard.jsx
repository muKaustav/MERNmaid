import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../styles/dashboard.css'

let name = ''

function Dashboard () {
  const [data, setData] = useState('')

  useEffect(() => {
    Axios.get('/getUser').then(response => {
      name = response.data.Name.split(' ')[0]
      setData(response.data)
    })
  }, [])

  return (
    <div>
      <h1>
				Hey {name}
        <img
          src={data.thumbnail}
          alt='user-thumbnail'
          height='100'
          width='100'
				/>
      </h1>
    </div>
  )
}

export default Dashboard
