

import './signup.css'
import logo from '../../assests/img/Home/logs.svg'


function Login() {
  return (
    <>

      <div className="App">
      <div class="top-bar">
            <div className="header">
           
        <img alt="logo" src={logo}/>
        </div>
      </div>
     
      <h1>Login</h1>
      <div class="main">
    <form class="form1">
      <input class="un-login " type="text" align="center" placeholder="Username"/>
      <input class="pass" type="password" align="center" placeholder="Set password"/>
      <a href="/" className="submit" align="center">Login</a>
      <p className="forgot" align="center"><a href="/">Forgot Password?</a></p>
      </form>
          </div> 
      
     
                
    </div>
    </>
   
  );
}

export default Login;
