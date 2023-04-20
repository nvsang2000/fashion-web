import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import clsx from 'clsx';
import slider from './slider.module.css';
import { CustomHeader } from '~/components';
import { CustomSlider } from '~/components';
import { CustomHomeProduct } from '~/components';
import { CustomFooter } from '~/components';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Header() {
  const router = useRouter();

  const products = [
    { name: 'Levents 111111', price: '300.000đ' },
    { name: 'Levents 222222', price: '300.000đ' },
    { name: 'Levents 333333', price: '300.000đ' },
    { name: 'Levents 444444', price: '300.000đ' },
  ];

  return (
    <>
      <div className='home'>
        <CustomHeader />
        <CustomSlider />
        <div className="container">
          <div className="row">
            {products.map(product => (
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <CustomHomeProduct
                  name={product.name}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </div>
        <CustomFooter />
      </div >
    </>

  );
}
