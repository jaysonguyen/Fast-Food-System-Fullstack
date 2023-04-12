import React from "react";

const loginBG = require("../../../images/admin/login-bg.jpg");

export const LoginPage = () => {
  return (
    <div
      id="loginContent"
      style={{ backgroundImage: `url(${loginBG})` }}
      class="row position-relative"
    >
      <div class="col bg-left"></div>
      <div class="col bg-right"></div>
      <div id="loginForm" class="">
        <div class="row bg">
          <div class="col bg-left">
            {/* <!-- <img src="../../images/abstract-img.png" alt="" /> --> */}
          </div>
          <div class="col bg-right">
            <div class="form-title w-100 text-center">Tạo tài khoản</div>
            <div class="form-container">
              <form>
                {/* <!-- Email input --> */}
                <div class="form-outline mb-4">
                  <input type="email" id="form2Example1" class="form-control" />
                  <label class="form-label" for="form2Example1">
                    Email
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example2"
                    class="form-control"
                  />
                  <label class="form-label" for="form2Example2">
                    Mật khẩu
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example2"
                    class="form-control"
                  />
                  <label class="form-label" for="form2Example2">
                    Nhập lại mật khẩu
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
                        value=""
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
                <button type="button" class="submit-btn btn btn-block mb-4">
                  Đăng ký
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
