import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

const clientId = "929003680891-119jtisrogokacs0dk5muu6qs8ohke4k.apps.googleusercontent.com";


const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    pinNo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('https://rms-bee.onrender.com/submit', formData)
      .then(response => {
        console.log(response.data);
        // handle success, for example, redirect to another page
      })
      .catch(error => {
        console.error("There was an error!", error);
        // handle error, for example, show an error message to the user
      });
  };

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user: ",res.profileObj);
  }

  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ",res);
  }


  return (
    <body class="login-page">
       <div className="login-container">
       <h2 style={{ color: 'white' }}>Login here </h2>

      <form onSubmit={handleSubmit} className="login-form" >
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="number" // Use type "password" for PIN for added security
          name="pinNo"
          placeholder="PIN Number"
          maxLength="4" // Assuming PIN is 4 digits
          value={formData.pinNo}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <div className="redirect-to-login">

      
        Don't have an account-Signup? <a href="./S" style={{ color: 'yellow' }}>Signup here</a>
      </div>
      <div id="signInButton">
        <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
      </div>
    </div>
    </body>
  );
};

export default Login;
