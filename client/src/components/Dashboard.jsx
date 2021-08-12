import React, { useEffect } from 'react'
import '../styles/dashboard.css'

function Dashboard () {
  let user = ''

  const fetchData = () => {
    return fetch('https://mernmaid.herokuapp.com/auth')
			.then(response => response.json())
			.then(data => {
  user = data
  console.log(user)
})
  }

  useEffect(
		() => {
  fetchData()
},
		[fetchData]
	)

  return (
    <div>
      <h1>
				hello world {user}
      </h1>
    </div>
  )
}

export default Dashboard
