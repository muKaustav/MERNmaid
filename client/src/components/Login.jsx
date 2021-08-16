import React from 'react'
import '../styles/login.css'
import googleImg from '../assets/icons8-google.png'
import githubImg from '../assets/icons8-github.png'
import { Link } from 'react-router-dom'

function Login () {
  return (
    <div>
      <div className='container' id='container'>
        <div className='form-container log-in-container'>
          <div className='rightpanel'>
            <h1>Login</h1>
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
                <button className='social github' formAction='/auth/github'>
                  <img src={githubImg} height='30' width='30' alt='github' />
									GitHub
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
