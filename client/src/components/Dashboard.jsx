import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../styles/dashboard.css'

function Dashboard () {
  const [data, setData] = useState('')

  useEffect(() => {
    Axios.get('/getUser').then(response => {
      setData(response.data)
    })
  }, [])

  return (
    <div>
      <h1>
				Hey {data.Name}
      </h1>
    </div>
  )
}

export default Dashboard
