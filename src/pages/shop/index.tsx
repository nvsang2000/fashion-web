import menushop from './menuShop.module.css';
import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
export default function menuShop() {
  return (
    <>
      <div className={clsx([menushop.menuShop])}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12'>
              <div className={clsx([menushop.menuShopHeader])} style={{ display: 'flex' }}>
                <a className={clsx([menushop.text])} href=''>
                  Trang chủ
                </a>
                <div style={{ marginLeft: '10px' }}>/</div>
                <a className={clsx([menushop.text])} style={{ marginLeft: '10px' }} href=''>
                  Cửa hàng
                </a>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-3 col-sm-12 col-md-6 col-lg 6'>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link href='/product'>
                  <img
                    className={clsx([menushop.menuShopImg])}
                    style={{ width: '300px' }}
                    src='https://levents.asia/wp-content/uploads/2023/01/z4062902873074_11115d37d843e789bd678eb1e04039ce-400x500.jpg'
                    alt=''
                  />
                </Link>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p>LEVENTS® COLOR TEE/ BLACK 123</p>
                <div>361,000 vnđ</div>
              </div>
            </div>
            <div className='col-xl-3 col-sm-12 col-md-6 col-lg 6'>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link href='/product'>
                  <img
                    style={{ width: '300px' }}
                    src='https://levents.asia/wp-content/uploads/2023/01/z4062902873074_11115d37d843e789bd678eb1e04039ce-400x500.jpg'
                    alt=''
                  />
                </Link>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p>LEVENTS® COLOR TEE/ BLACK 123</p>
                <div>361,000 vnđ</div>
              </div>
            </div>
            <div className='col-xl-3 col-sm-12 col-md-6 col-lg 6'>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link href='/product'>
                  <img
                    style={{ width: '300px' }}
                    src='https://levents.asia/wp-content/uploads/2023/01/z4062902873074_11115d37d843e789bd678eb1e04039ce-400x500.jpg'
                    alt=''
                  />
                </Link>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p>LEVENTS® COLOR TEE/ BLACK 123</p>
                <div>361,000 vnđ</div>
              </div>
            </div>
            <div className='col-xl-3 col-sm-12 col-md-6 col-lg 6'>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link href='/product'>
                  <img
                    style={{ width: '300px' }}
                    src='https://levents.asia/wp-content/uploads/2023/01/z4062902873074_11115d37d843e789bd678eb1e04039ce-400x500.jpg'
                    alt=''
                  />
                </Link>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p>LEVENTS® COLOR TEE/ BLACK 123</p>
                <div>361,000 vnđ</div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-3 col-sm-12 col-md-6 col-lg 6'>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link href='/product'>
                  <img
                    className={clsx([menushop.menuShopImg])}
                    style={{ width: '300px' }}
                    src='https://levents.asia/wp-content/uploads/2023/01/z4062902873074_11115d37d843e789bd678eb1e04039ce-400x500.jpg'
                    alt=''
                  />
                </Link>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p>LEVENTS® COLOR TEE/ BLACK 123</p>
                <div>361,000 vnđ</div>
              </div>
            </div>
            <div className='col-xl-3 col-sm-12 col-md-6 col-lg 6'>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link href='/product'>
                  <img
                    style={{ width: '300px' }}
                    src='https://levents.asia/wp-content/uploads/2023/01/z4062902873074_11115d37d843e789bd678eb1e04039ce-400x500.jpg'
                    alt=''
                  />
                </Link>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p>LEVENTS® COLOR TEE/ BLACK 123</p>
                <div>361,000 vnđ</div>
              </div>
            </div>
            <div className='col-xl-3 col-sm-12 col-md-6 col-lg 6'>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link href='/product'>
                  <img
                    style={{ width: '300px' }}
                    src='https://levents.asia/wp-content/uploads/2023/01/z4062902873074_11115d37d843e789bd678eb1e04039ce-400x500.jpg'
                    alt=''
                  />
                </Link>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p>LEVENTS® COLOR TEE/ BLACK 123</p>
                <div>361,000 vnđ</div>
              </div>
            </div>
            <div className='col-xl-3 col-sm-12 col-md-6 col-lg 6'>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link href='/product'>
                  <img
                    style={{ width: '300px' }}
                    src='https://levents.asia/wp-content/uploads/2023/01/z4062902873074_11115d37d843e789bd678eb1e04039ce-400x500.jpg'
                    alt=''
                  />
                </Link>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p>LEVENTS® COLOR TEE/ BLACK 123</p>
                <div>361,000 vnđ</div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-3 col-sm-12 col-md-6 col-lg 6'>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link href='/product'>
                  <img
                    className={clsx([menushop.menuShopImg])}
                    style={{ width: '300px' }}
                    src='https://levents.asia/wp-content/uploads/2023/01/z4062902873074_11115d37d843e789bd678eb1e04039ce-400x500.jpg'
                    alt=''
                  />
                </Link>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p>LEVENTS® COLOR TEE/ BLACK 123</p>
                <div>361,000 vnđ</div>
              </div>
            </div>
            <div className='col-xl-3 col-sm-12 col-md-6 col-lg 6'>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link href='/product'>
                  <img
                    style={{ width: '300px' }}
                    src='https://levents.asia/wp-content/uploads/2023/01/z4062902873074_11115d37d843e789bd678eb1e04039ce-400x500.jpg'
                    alt=''
                  />
                </Link>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p>LEVENTS® COLOR TEE/ BLACK 123</p>
                <div>361,000 vnđ</div>
              </div>
            </div>
            <div className='col-xl-3 col-sm-12 col-md-6 col-lg 6'>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link href='/product'>
                  <img
                    style={{ width: '300px' }}
                    src='https://levents.asia/wp-content/uploads/2023/01/z4062902873074_11115d37d843e789bd678eb1e04039ce-400x500.jpg'
                    alt=''
                  />
                </Link>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p>LEVENTS® COLOR TEE/ BLACK 123</p>
                <div>361,000 vnđ</div>
              </div>
            </div>
            <div className='col-xl-3 col-sm-12 col-md-6 col-lg 6'>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link href='/product'>
                  <img
                    style={{ width: '300px' }}
                    src='https://levents.asia/wp-content/uploads/2023/01/z4062902873074_11115d37d843e789bd678eb1e04039ce-400x500.jpg'
                    alt=''
                  />
                </Link>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p>LEVENTS® COLOR TEE/ BLACK 123</p>
                <div>361,000 vnđ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
