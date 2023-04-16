import React from 'react';
import clsx from 'clsx';
import homeProduct from '../pages/home/homeProduct.module.css';
import Link from 'next/link';
export default function CustomHomeProduct() {
    return (
        <>
            <div className='homeProduct' style={{ borderBottom: '1px solid #e3e3e3', paddingBottom: '30px' }}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xl-12 col-sm-12'>
                            <p style={{ textAlign: 'center', fontSize: '25px' }}>Sản Phẩm Yêu Thích</p>
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
                                <div style={{ textDecoration: 'line-through' }}>380,000 vnđ</div>
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
                                <div style={{ textDecoration: 'line-through' }}>380,000 vnđ</div>
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
                                <div style={{ textDecoration: 'line-through' }}>380,000 vnđ</div>
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
                                <div style={{ textDecoration: 'line-through' }}>380,000 vnđ</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
