import React, { useState } from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const [showpassword, setshowpassword] = useState(false);

  return (
    <>
      <div className="container my-5">
        <div className="row main-content bg-success text-center">
          <div className="col-md-4 text-center company__info">
            <span className="company__logo">
              <h2>
                <span className="fa fa-android"></span>
              </h2>
            </span>
            <h4 className="company_title">Your Company Logo</h4>
          </div>
          <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div className="container-fluid">
              <div className="row">
                <h2 className="pt-3">Log In</h2>
              </div>
              <div className="row">
                <form control="" className="form-group">
                  <div className="row">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form__input"
                      placeholder="Email"
                    />
                  </div>
                  <div className="row position-relative">
                    <input
                      type={showpassword ? "text" : "password"}
                      name="password"
                      id="password"
                      className="form__input"
                      placeholder="Password"
                    />
                    <div
                      className=""
                      onClick={() => setshowpassword((preve) => !preve)}
                    >
                      <span className="set_eye">
                        {showpassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <a href="/forgot-password">Forgot password ?</a>
                  </div>
                  <div className="row">
                    <input
                      type="submit"
                      value="Login"
                      className="btn mx-auto"
                    />
                  </div>
                </form>
              </div>
              <div className="row">
                <p>
                  Don't have an account? <Link to="/signup">Sign-Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
