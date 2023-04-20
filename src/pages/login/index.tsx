import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import style from './style.module.css';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { AiFillFacebook } from 'react-icons/ai';
import { CustomHeader } from '~/components';
import axios from 'axios';

export default function Login() {
  const handleSubmitValue = (values: any) => {
    console.log('values', values);
  };
  const [isChecked, setIsChecked] = useState(false);
  const onSubmit = (data) => console.log(data);

  const handleRadioChange = () => {
    setIsChecked(!isChecked);
  };
  const { register, handleSubmit } = useForm();

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleApi = () => {
    console.log(email, password);
    axios
      .post('https://schema.getpostman.com/json/collection/v2.1.0/collection.json', {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <CustomHeader />
      <div className={clsx([style.container])}>
        <div className={clsx(['form', style.formLogin])} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.formContent}>
            <header>Login</header>
            <form className='loginForm'>
              <div className={style.info}>
                <input onChange={handleEmail} value={email} type='email' placeholder='Email' className='email' name='email' />
              </div>

              <div className={style.info}>
                <input onChange={handlePassword} value={password} type='password' placeholder='Password' className='password' name='password' />
                <i className='bx bx-hide eye-icon'></i>
              </div>
              <div className={style.formLink}>
                <a href='#' className='forgot-pass'>
                  Forgot password?
                </a>
              </div>

              <div className={style.info}>
                <button onClick={handleApi} type='submit'>
                  Login
                </button>
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
