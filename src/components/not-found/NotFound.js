import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className='not-found'>
        <div className='not-found-container'>
            <div id='not-found'>
                <div className='content'>
                  <h1>404</h1>
                  <h5>Page Not Found</h5>
                </div>
                <Link to={'/'} className='btn'>Go to Homepage</Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound