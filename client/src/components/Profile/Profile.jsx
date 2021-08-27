import React, { useState, useEffect, useRef } from 'react'
import Axios from 'axios'
import loadingImg from '../../assets/profile_logo.png'
import DropdownData from '../Dashboard/DropdownData'

function Profile () {
  const [stateImage, setStateImage] = useState(loadingImg)
  const [dropdown, setDropdown] = useState(false)
  const showDropdown = () => setDropdown(!dropdown)

  let menuRef = useRef()
  let buttonRef = useRef()

  useEffect(() => {
    let handler = event => {
      if (
				!menuRef.current.contains(event.target) &&
				!buttonRef.current.contains(event.target)
			) {
        setDropdown(false)
      }
    }

    document.addEventListener('mousedown', handler)

    Axios.get('/getUser').then(response => {
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
          <h1
            className='Navbar-logo'
            onClick={() => {
              window.location.href = 'http://localhost:3000/dashboard'
            }}
					>
						MERNmaid
					</h1>
        </div>
        <div>
          <button ref={buttonRef} className='Navbar-btn' onClick={showDropdown}>
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
    </div>
  )
}

export default Profile
