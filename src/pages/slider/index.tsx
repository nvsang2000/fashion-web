import React from 'react';
import slider from './slider.module.css';
import clsx from 'clsx';

export default function Header() {
  return (
    <div className='slides'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <div className={clsx([slider.banner])}>
              <a href=''>
                <img style={{ width: '100%' }} src='https://levents.asia/wp-content/uploads/2023/03/1920x760-1920x988.png' alt='' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
