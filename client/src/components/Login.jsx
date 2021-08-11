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
                <button
                  className='social google'
                  formAction='https://mernmaid.herokuapp.com/auth/google'
								>
                  <img src={googleImg} height='25' width='25' alt='google' />
                </button>
                <button
                  className='social github'
                  formAction='https://mernmaid.herokuapp.com/auth/google'
								>
                  <img src={githubImg} height='25' width='25' alt='github' />
                </button>
              </form>
            </div>
            <h2>
              <span>OR</span>
            </h2>
            <form
              action='https://mernmaid.herokuapp.com'
              method='POST'
						>
              <input
                required
                type='email'
                placeholder='Enter Email'
                name='username'
							/>
              <input
                required
                type='password'
                placeholder='Enter Password'
                name='password'
							/>
              <button className='login' type='submit'>
								Sign in
							</button>
            </form>
            <h6>
              <Link to='' className='forgot'>
								Forgot your password?
							</Link>
            </h6>
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
