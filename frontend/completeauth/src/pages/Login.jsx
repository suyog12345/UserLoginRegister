import React, { useEffect, useState } from 'react'
import "../../src/App.css"
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Home'
import "react-bootstrap"
import ErrorPage from './ErrorPage'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        }
      }
      const { data } = await axios.post("api/users/login",
        {
          email,
          password
        },
        config
      )
      console.log(data)
      localStorage.setItem("userInfo", JSON.stringify(data))
      userInfo = localStorage.getItem('userInfo')
      setIsLoggedIn(true);
      {
        isLoggedIn ? (
          <Navigate to="/home" replace={true} />
        ) : (<Navigate to="/" replace={true} />)
      }

    } catch (err) {
      setError(err.response.data.message);
    }

  };
  return (

    <div className="Auth-form-container">
      {error && <ErrorPage variant='danger'>{error}</ErrorPage>}
      <form className="Auth-form" onSubmit={submitHandler}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              value={email}
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary"  >
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            <a href="/register">Register?</a>
          </p>
        </div>
      </form>
    </div>
  )
}
export default Login;
