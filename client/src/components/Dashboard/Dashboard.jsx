import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import loadingImg from '../../assets/profile_logo.png'
import FeatureCard from '../FeatureCard/FeatureCard'
import './dashboard.scss'

function Dashboard() {
  const [name, setName] = useState('')
  const [stateImage, setStateImage] = useState(loadingImg)

	useEffect(() => {
    Axios.get('/getUser').then(response => {
      setName(response.data.Name.split(' ')[0])
      setStateImage(response.data.thumbnail)
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
          <img className='stateImage' src={stateImage} 
            alt="profile-img"
            height='50px'
            width='50px'
            referrerPolicy="no-referrer"
            />
          </button>
        </div>  
      </div>
      <div className="Greeting">
        <h1 className="Greeting-text">Hey {name}</h1>
      </div>
      <div className="Features">
        <FeatureCard className='feature' FeatureName='Meet'/>
        <FeatureCard className='feature' FeatureName='Calendar'/>
        <FeatureCard className='feature' FeatureName='To-do'/>
        <FeatureCard className='feature' FeatureName='Whiteboard'/>
      </div>
    </>
  )
}

export default Dashboard
