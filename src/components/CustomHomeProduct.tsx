import React from 'react';
import clsx from 'clsx';
import homeProduct from '../pages/home/homeProduct.module.css';
import Link from 'next/link';
export default function CustomHomeProduct(props) {
    return (
        <>
            <div className='homeProduct'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div style={{}}>
                            <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Link href='/product'>
                                    <img
                                        style={{ width: '100%' }}
                                        src='https://levents.asia/wp-content/uploads/2023/01/z4062902873074_11115d37d843e789bd678eb1e04039ce-400x500.jpg'
                                        alt=''
                                    />
                                </Link>
                                <div style={{ textAlign: 'center' }}>
                                    <p>{props.name}</p>
                                    <div>{props.price}</div>
                                    <div style={{ textDecoration: 'line-through' }}>380,000 vnđ</div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
