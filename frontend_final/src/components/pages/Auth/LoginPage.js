import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// const loginBG = require("../../../images/admin/login-bg.jpg");
import "../../../css/root.css";
import "./Login.css";
import { getUserList } from "../../../services/userServices";
import { getStaffByUserId } from "../../../services/staff";
const sha256 = require("js-sha256");
import loginBG from "./images/login-bg.png";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (email != "" && password != "") {
      console.log(email, password);
      // get All User
      const data = await getUserList();
      if (data && data.Ec != -1) {
        const users = data.DT;
        users.forEach(async (u) => {
          let psw = sha256(password);
          //login successfully
          if (u.Email == email && u.Password == psw) {
            //save user data to sessionStorage
            console.log(u.ID);
            if (!u.isAdmin) {
              const staffdt = await getStaffByUserId(u.ID);
              if (staffdt && staffdt.EC != -1) {
                console.log("Staff: ", staffdt);
              }
            }
            sessionStorage.setItem("user", JSON.stringify(u));
            // navigate("/");
          }
        });
        setError("Email or password incorrect, please try again!");
      }
    } else {
      setError("Please enter email and password fields");
    }
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmailChange = (event) => {
    setError(null);
    if (!isValidEmail(email)) {
      setEmailError("Invalid email");
    } else {
      setEmailError(null);
    }

    setEmail(event.target.value);
  };

  useEffect(() => {}, []);

  return (
    <div
      id="loginContent"
      // style={{ backgroundImage: `url(${loginBG})`, backgroundSize: "contain" }}
      class="row position-relative"
    >
      <div
        className="cloud-bg"
        style={{
          backgroundImage: `url(${loginBG})`,
          backgroundSize: "cover",
        }}
      >
        <div id="loginForm" class="">
          <div class="row bg">
            <div class="form-title w-100 text-center">Đăng nhập</div>
            <div class="form-container">
              <div className="text-danger">{error}</div>
              <form>
                {/* <!-- Email input --> */}
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="form-control"
                    onChange={(e) => handleEmailChange(e)}
                  />
                  <label class="form-label" for="email">
                    email
                    <span className="ms-2 text-danger">{emailError}</span>
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example2"
                    class="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label class="form-label" for="form2Example2">
                    Mật khẩu
                  </label>
                </div>
                {/* <!-- 2 column grid layout for inline styling --> */}
                <div class="row mb-4">
                  <div class="col d-flex justify-content-center">
                    {/* <!-- Checkbox --> */}
                    <div class="form-check d-flex flex-row gap-2 align-items-center">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="form2Example31"
                        checked
                      />
                      <label class="form-check-label" for="form2Example31">
                        Nhớ tài khoản
                      </label>
                    </div>
                  </div>
                  <div class="col">
                    {/* <!-- Simple link --> */}
                    <a href="#!">Quên mật khẩu?</a>
                  </div>
                </div>
                {/* <!-- Submit button --> */}
                <button
                  type="button"
                  class="submit-btn btn btn-block mb-4"
                  onClick={handleSubmit}
                >
                  Đăng nhập
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
