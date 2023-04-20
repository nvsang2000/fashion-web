import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import style from './style.module.css';
import clsx from 'clsx';
import { AiFillFacebook } from 'react-icons/ai';
import { CustomHeader } from '~/components';
import axios from 'axios';
import loginApi from './authApi';
import axiosClient from './axiosClient';
import authApi from './authApi';
export default function Signup() {
  const handleSubmitValue = (values: any) => {
    console.log('values', values);
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioChange = () => {
    setIsChecked(!isChecked);
  };

  axios({
    method: 'GET',
    url: 'http://localhost:3000/posts',
    data: null,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleLogin = async () => {
  //   try {
  //     const response = await authApi.login(email, password);
  //     const accessToken = response.data.accessToken;
  //     console.log(response);
  //   } catch (error) {
  //     console.log("Error occurred: ", error);
  //   }
  // };
  // const [loginApi, setLoginApi] = useState([]);

  // useEffect(() => {
  //   const fetchloginApi = async () => {
  //     try {
  //       const params = { username: "duongxuankhai@gmail.com", password: "12345" }; {

  //       }
  //       const response = await loginApi.getAll(params);
  //       console.log(response)
  //       setLoginApi(response.data);
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchloginApi();
  // }, []);
  // const fetchloginApi = async () => {
  //   try {
  //     const params = { username: "duongxuankhai@gmail.com", password: "12345" };
  //     console.log("Sending login request with params: ", params);
  //     const response = await loginApi.getAll(params);
  //     console.log("Received response: ", response.data);
  //     setLoginApi(response.data);
  //   } catch (error) {
  //     console.log("Error occurred: ", error);
  //   }
  //   fetchloginApi();
  // };
  return (
    <>
      <CustomHeader />
      {/* <div>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Đăng nhập</button>
      </div> */}
      <div className={clsx([style.container])}>
        <div className={clsx(['form', style.formLogin])}>
          <div className={style.formContent}>
            <header>Login</header>
            <form onSubmit={handleSubmitValue}>
              <div className={style.info}>
                <input type='text' placeholder='Email' className='email' name='username' />
              </div>

              <div className={style.info}>
                <input type='' placeholder='Password' className='password' name='password' />
                <i className='bx bx-hide eye-icon'></i>
              </div>
              <div className={style.formLink}>
                <a href='#' className='forgot-pass'>
                  Forgot password?
                </a>
              </div>

              <div className={style.info}>
                <button type='submit'>Login</button>
              </div>
            </form>

            <div className={style.formLink}>
              <span>
                {`Don't have an account?`}
                <a href='/signup' className='link signup-link'>
                  Signup
                </a>
              </span>
            </div>
          </div>
          <div className={style.line}></div>
          <div className={style.socialLink}>
            <a href='#' className='info facebook'>
              <i className='bx bxl-facebook facebook-icon'></i>
              <span>Login with Facebook</span>
            </a>
          </div>

          <div className={style.socialLink}>
            <a href='#' className='info google'>
              <AiFillFacebook />
              <span>Login with Google</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
