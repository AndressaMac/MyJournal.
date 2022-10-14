import Navbar from './navbar'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  var name = sessionStorage.getItem('name')
  var password = sessionStorage.getItem('password')

  const [nameLoginValue, setLoginValue] = useState('')
  const [passwordLoginValue, setLoginPassword] = useState('')


  function Validation() {
    console.log('VALOD')
    if (name === nameLoginValue && password === passwordLoginValue) {
      navigate('/profile')
    }
  }

  return (
    <div>
      <Navbar />

      <div className="containerLogin">
        <div>
          <img className="imgLogin" src="/loginimage.png"></img>
        </div>
        <form className="formLogin" onSubmit={Validation}>
          <label htmlFor="uname" className="item">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            value={nameLoginValue}
            onChange={e => setLoginValue(e.target.value)}
            name="uname"
            required
            className="item input"
          />
          <label htmlFor="psw" className="item">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            value={passwordLoginValue}
            onChange={e => setLoginPassword(e.target.value)}
            name="psw"
            required
            className="item input"
          />
          <button type="submit" className="item button">
            Login
          </button>
          <span className="forgot">
            Forgot <a href="#">password?</a>
          </span>
        </form>
      </div>
    </div>
  )
}
