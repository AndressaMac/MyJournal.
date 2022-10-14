import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Navbar from './navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SingUP() {
  const [nameValue, setNameValue] = useState('')
  const [occupationValue, setOccupationValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setpassword] = useState('')
  const [password2Value, setpassword2] = useState('')
  const navigate = useNavigate()

   function ValidationPassword (){
   if( passwordValue === password2Value){
    Save()
    navigate('/login')
   }else{
     alert('senha nao bate')
   }}


  function Save() { 
    sessionStorage.setItem('name', nameValue)
    sessionStorage.setItem('occupation', occupationValue)
    sessionStorage.setItem('email', emailValue)
    sessionStorage.setItem('password', passwordValue)
  }

 
  return (
    <div>
      <div id="signup"></div>
      <Navbar />
      <div className="signupB">
        <div>
          <div class="containerSignup">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />

            <label for="name">Name</label>
            <input
              type="text"
              placeholder="Mary"
              value={nameValue}
              onChange={e => setNameValue(e.target.value)}
              name="name"
              required
              className="input inputSig"
            />

            <label for="occupation">
              <b>Occupation</b>
            </label>
            <input
              type="text"
              placeholder="Actor"
              value={occupationValue}
              onChange={e => setOccupationValue(e.target.value)}
              name="occupation"
              required
              className="input inputSig"
            />

            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="mary@gmail.com"
              value={emailValue}
              onChange={e => setEmailValue(e.target.value)}
              name="email"
              required
              className="input inputSig"
            />

            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="********"
              value={passwordValue}
              onChange={e => setpassword(e.target.value)}
              name="psw"
              required
              className="input inputSig"
            />

            <label for="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="********"
              value={password2Value}
              onChange={e => setpassword2(e.target.value)}
              name="psw-repeat"
              required
              className="input inputSig"
            />

            <label>
              <input
                type="checkbox"
                checked="checked"
                name="remember"
                className="input"
              />{' '}
              Remember me
            </label>

            <p>
              By creating an account you agree to our{' '}
              <a href="#">Terms & Privacy</a>.
            </p>

            <div class="clearfix">
              <button type="submit" className="buttonSig" onClick={ValidationPassword}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
