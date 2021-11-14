import React from 'react'
import logo from '../../assests/img/Home/logs.svg'
import './signup.css'
function Signup() {
    return (
        <div className="App">
           <div class="top-bar">
            <div className="header">
           
        <img alt="logo" src={logo}/>
        </div>
      </div>
      
     
      <h1>Signup</h1>
      <div class="main">
    <form class="form1">
      <input class="un " type="text" align="center" placeholder="First Name"/>
      <input class="un" type="text" align="center" placeholder="Last Name"/>
      <input class="un" type="email" align="center" placeholder="Email"/>
      <input class="pass" type="password" align="center" placeholder="Set password"/>
      <a class="submit" align="center">Sign up</a>
     
      </form>
          </div> 
      
     
                
    </div>
     
        
    )
}

export default Signup;
