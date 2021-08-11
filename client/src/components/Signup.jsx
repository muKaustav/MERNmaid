import React from 'react'
import '../styles/login.css'
import googleImg from '../assets/icons8-google.png'
import githubImg from '../assets/icons8-github.png'
import { Link } from 'react-router-dom'

function Signup () {
  return (
    <div>
      <div className='container' id='container'>
        <div className='form-container log-in-container'>
          <div className='rightpanel'>
            <h1>Sign Up</h1>
            <div className='social-container'>
              <form>
                <button
                  className='social google'
                  formAction='http://localhost:5000/auth/google'
								>
                  <img src={googleImg} height='25' width='25' alt='google' />
                </button>
                <button
                  className='social github'
                  formAction='http://localhost:5000/auth/google'
								>
                  <img src={githubImg} height='25' width='25' alt='github' />
                </button>
              </form>
            </div>
            <h2>
              <span>OR</span>
            </h2>
            <form action='http://localhost:5000/register' method='POST'>
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
								Sign up
							</button>
            </form>
            <h6>
              <a
                href='https://www.reddit.com/r/memes/comments/ibr31t/here_have_a_cookie/'
                className='forgot'
                target='_blank'
                rel='noreferrer'
							>
								Surprise!
							</a>
            </h6>
            <h5 className='createacc'>
              <span className='OR'>Already have an account? </span>
              <Link to='/' className='create'>
								Log In.
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

export default Signup
