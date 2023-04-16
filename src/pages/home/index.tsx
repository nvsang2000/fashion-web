import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
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
  return (
    <div className='home'>
      <CustomHeader />
      <CustomSlider />
      <CustomHomeProduct />
      <CustomFooter />
    </div>
  );
}
