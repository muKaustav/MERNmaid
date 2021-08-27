import React, { useState, useEffect, useRef } from 'react'
import Axios from 'axios'
import loadingImg from '../../assets/profile_logo.png'
import FeatureCard from '../FeatureCard/FeatureCard'
import DropdownData from './DropdownData'
import './dashboard.scss'

function Dashboard () {
  const [name, setName] = useState('')
  const [stateImage, setStateImage] = useState(loadingImg)
  const [dropdown, setDropdown] = useState(false)
  const showDropdown = () => setDropdown(!dropdown)

  let menuRef = useRef()

  useEffect(() => {
    let handler = event => {
      if (!menuRef.current.contains(event.target)) {
        setDropdown(false)
      }
    }

    document.addEventListener('mousedown', handler)

    Axios.get('/getUser').then(response => {
      setName(response.data.Name.split(' ')[0])
      setStateImage(response.data.thumbnail)
    })

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [])

  return (
    <div>
      <div className='Navbar'>
        <div className='Navbar-logoBox'>
          <h1 className='Navbar-logo'>MERNmaid</h1>
        </div>
        <div>
          <button className='Navbar-btn' onClick={showDropdown}>
            <img
              className='stateImage'
              src={stateImage}
              alt='profile-img'
              height='50px'
              width='50px'
              referrerPolicy='no-referrer'
						/>
          </button>
        </div>
      </div>
      <div ref={menuRef} className={dropdown ? 'Dropdown Active' : 'Dropdown'}>
        <DropdownData />
      </div>
      <div className='Greeting'>
        <h1 className='Greeting-text'>
					Hey {name}
        </h1>
      </div>
      <div className='Features'>
        <FeatureCard className='feature' FeatureName='Meet' />
        <FeatureCard className='feature' FeatureName='Calendar' />
        <FeatureCard className='feature' FeatureName='To-do' />
        <FeatureCard className='feature' FeatureName='Whiteboard' />
      </div>
    </div>
  )
}

export default Dashboard
