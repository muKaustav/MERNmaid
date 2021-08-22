import React from 'react'
import './combined.scss'
import googleImg from '../../assets/icons8-google.png'
import facebookImg from '../../assets/icons8-facebook.png'
import { Link } from 'react-router-dom'

function Login () {
  return (
    <div>
      <div className='container' id='container'>
        <div className='form-container log-in-container'>
          <div className='rightpanel'>
            <h1 className='log-in-title'>Log In</h1>
            <div className='social-container'>
              <form>
                <button className='social google' formAction='/auth/google'>
                  <img
                    src={googleImg}
                    height='30'
                    width='30'
                    alt='google'
									/>Google
								</button>
                <button className='social facebook' formAction='/auth/facebook'>
                  <img
                    src={facebookImg}
                    height='30'
                    width='30'
                    alt='facebook'
									/>
									Facebook
								</button>
              </form>
            </div>
            <h5 className='createacc'>
              <span className='OR'>Don't have an account? </span>
              <Link to='/register' className='create'>
								Sign Up.
							</Link>
            </h5>
          </div>
        </div>
        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-right' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
