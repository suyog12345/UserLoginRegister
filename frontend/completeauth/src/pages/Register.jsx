import "bootstrap/dist/css/bootstrap.min.css"
import "../../src/App.css"
import React, { useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    }
    else {
      setMessage(null)
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          }
        }
        const { data } = await axios.post("api/users",
          {
            name,
            email,
            password
          },
          config
        )
        localStorage.setItem("userInfo", JSON.stringify(data))
      } catch (error) {

      }
    }
  };

  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={submitHandler}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Register</h3>
            <div className="text-center">
              <a href='/'>Already registered?</a>
              <span className="link-primary">

              </span>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="name"
                className="form-control mt-1"
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                className="form-control mt-1"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group mt-3">
              <label>Confirm Password</label>
              <input
                className="form-control mt-1"
                type="password"
                value={confirmpassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>


            <div className="form-group mt-3">
              <label>DOB</label>
              <input
                type="date"
                className="form-control mt-1"
                placeholder="Date of Birth"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              <a href="/">Login?</a>
            </p>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register