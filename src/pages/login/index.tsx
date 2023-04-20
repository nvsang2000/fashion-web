import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import style from './style.module.css';
import clsx from 'clsx';
import { AiFillFacebook } from 'react-icons/ai';
import axios from 'axios';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';

export default function Login() {
  const handleLogin = (values: any) => {
    console.log('value', values);
    axios
      .post('https://schema.getpostman.com/json/collection/v2.1.0/collection.json', {
        email: values?.email,
        password: values?.password,
      })
      .then((result: any) => {
        console.log(result.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className={clsx([style.container])}>
        <div className={clsx(['form', style.formLogin])}>
          <div className={style.formContent}>
            <header>Login</header>
            <Form
              name='basic'
              layout='vertical'
              initialValues={{ remember: true }}
              onFinish={handleLogin}
              onFinishFailed={(value) => console.log(value)}
              autoComplete='off'
              style={{ marginTop: 20 }}
            >
              <Form.Item name='email' rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input size='large' />
              </Form.Item>

              <Form.Item name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password size='large' />
              </Form.Item>

              <div className={style.info}>
                <Button type='primary' htmlType='submit'>
                  Submit
                </Button>
              </div>
            </Form>

            <div className={style.formLink}>
              <span>
                {`Don't have an account?`}
                <Link href='/signup' className='link signup-link'>
                  Signup
                </Link>
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
