import {Component} from 'react'
import './Forms.css'

class Forms extends Component {
  render(){
    return (
        <div className='forms'>
            <div className='container'>
                <form className='Login-form'>
                    <legend>Login</legend>
                   <div>
                     <label htmlFor='Username'>Username:</label>
                     <input type='text' required />
                   </div>
                   <div>
                     <label htmlFor='Password'>Password:</label>
                     <input type='password' required />
                   </div>
                    <div>
                     <button className='btn'>Login</button>
                    </div>
                </form>
                <span className='line'></span>
                <form className='register-form'>
                    <legend>Register</legend>
                   <div>
                     <label htmlFor='full_name'>Full names:</label>
                     <input type='text' required />
                   </div>
                   <div>
                     <label htmlFor='Username'>Username:</label>
                     <input type='text' required />
                   </div>
                   <div>
                     <label htmlFor='Email'>Email:</label>
                     <input type='email' required />
                   </div>
                   <div>
                     <label htmlFor='Password'>Password:</label>
                     <input type='password' required />
                   </div>
                   <div>
                   <button className='btn'>Register</button>
                   </div>
                </form>
            </div>
        </div>
      )
  }
}

export default Forms