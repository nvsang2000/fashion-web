import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import style from './style.module.css';
import clsx from 'clsx';
import { AiFillFacebook } from 'react-icons/ai';

export default function Login() {
  const handleSubmitValue = (values: any) => {
    console.log('values', values);
  };
  return (
    <div className={clsx([style.container])}>
      <div className={clsx(['form', style.formLogin])}>
        <div className={style.formContent}>
          <header>Login</header>
          <form onSubmit={handleSubmitValue}>
            <div className={style.info}>
              <input type='text' placeholder='Email' className='input' name='email' />
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
  );
}
