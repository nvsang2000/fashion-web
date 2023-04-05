import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import clsx from 'clsx';
import slider from './slider.module.css';
import { CustomHeader } from '~/components';

export default function Header() {
  return (
    <div className='home'>
      <CustomHeader />
      <div className='homeSlides'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12'>
              <div className={clsx([slider.banner])}>
                <a href=''>
                  <img
                    style={{ width: '100%' }}
                    src='https://levents.asia/wp-content/uploads/2023/03/1920x760-1920x988.png'
                    alt=''
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='homeProduct'
        style={{ borderBottom: '1px solid #e3e3e3', paddingBottom: '30px' }}
      >
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-12 col-sm-12'>
              <p style={{ textAlign: 'center', fontSize: '25px' }}>Sản Phẩm Yêu Thích</p>
            </div>
            <div className='col-xl-3 col-sm-12 col-md-6 col-lg 6'>
              <center>
                <a href=''>
                  <img
                    style={{ width: '300px' }}
                    src='https://levents.asia/wp-content/uploads/2023/01/z4062902873074_11115d37d843e789bd678eb1e04039ce-400x500.jpg'
                    alt=''
                  />
                </a>
                <p>LEVENTS® COLOR TEE/ BLACK</p>
                <div>361,000 vnđ</div>
                <div style={{ textDecoration: 'line-through' }}>380,000 vnđ</div>
              </center>
            </div>
            <div className='col-xl-3 col-sm-12 col-md-6 col-lg 6'>
              <center>
                <a href=''>
                  <img
                    style={{ width: '300px' }}
                    src='https://levents.asia/wp-content/uploads/2023/01/z4062902873074_11115d37d843e789bd678eb1e04039ce-400x500.jpg'
                    alt=''
                  />
                </a>
                <p>LEVENTS® COLOR TEE/ BLACK</p>
                <div>361,000 vnđ</div>
                <div style={{ textDecoration: 'line-through' }}>380,000 vnđ</div>
              </center>
            </div>
            <div className='col-xl-3 col-sm-12 col-md-6 col-lg 6'>
              <center>
                <a href=''>
                  <img
                    style={{ width: '300px' }}
                    src='https://levents.asia/wp-content/uploads/2023/01/z4062902873074_11115d37d843e789bd678eb1e04039ce-400x500.jpg'
                    alt=''
                  />
                </a>
                <p>LEVENTS® COLOR TEE/ BLACK</p>
                <div>361,000 vnđ</div>
                <div style={{ textDecoration: 'line-through' }}>380,000 vnđ</div>
              </center>
            </div>
            <div className='col-xl-3 col-sm-12 col-md-6 col-lg 6'>
              <center>
                <a href=''>
                  <img
                    style={{ width: '300px' }}
                    src='https://levents.asia/wp-content/uploads/2023/01/z4062902873074_11115d37d843e789bd678eb1e04039ce-400x500.jpg'
                    alt=''
                  />
                </a>
                <p>LEVENTS® COLOR TEE/ BLACK</p>
                <div>361,000 vnđ</div>
                <div style={{ textDecoration: 'line-through' }}>380,000 vnđ</div>
              </center>
            </div>
          </div>
        </div>
      </div>
      <div className='footerEnd' style={{ marginTop: '50px', marginLeft: '20px' }}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-4 col-md-6 col-sm-12'>
              <h3>Về chúng tôi</h3>
              <p>Levents® – Popular Streetwear Brand</p>
              <p>HỘ KINH DOANH Red Label</p>
              <p>GPKD được cấp bởi Cục Cảnh sát QLHC & TTXH</p>
              <p>Trụ sở hộ kinh doanh: 842 Sư Vạn Hạnh, Phường 13, Quận 10, Tp. Hồ Chí Minh</p>
              <p>Mä só thuê: 41J8031547</p>
              <p>Ngày cấp: 06/07/2021</p>
              <p>Người đại diện: Nguyễn Trần Duy Khiết</p>
              <p>Mã Số thuế cá nhân: 8748861448-001</p>
              <img
                style={{ width: '200px' }}
                src='https://levents.asia/wp-content/uploads/2023/02/logoSaleNoti-1.png'
                alt=''
              />
            </div>
            <div className='col-xl-2 col-sm-6'>
              <h3>LIÊN HỆ</h3>
              <p>Hotline</p>
              <p>1900 633 028</p>
              <p>Email</p>
              <p>Customercare@levents.asia</p>
              <p>Thứ Hai - Chủ nhật</p>
              <p>09:30 ~ 21:30</p>
              <p>Email liên hệ công việc</p>
              <p>business@levents.asia</p>
            </div>
            <div className='col-xl-2 col-sm-6'>
              <h3>LIÊN HỆ</h3>
              <p>Hotline</p>
              <p>1900 633 028</p>
              <p>Email</p>
              <p>Customercare@levents.asia</p>
              <p>Thứ Hai - Chủ nhật</p>
              <p>09:30 ~ 21:30</p>
              <p>Email liên hệ công việc</p>
              <p>business@levents.asia</p>
            </div>
            <div className='col-xl-2 col-sm-6'>
              <h3>LIÊN HỆ</h3>
              <p>Hotline</p>
              <p>1900 633 028</p>
              <p>Email</p>
              <p>Customercare@levents.asia</p>
              <p>Thứ Hai - Chủ nhật</p>
              <p>09:30 ~ 21:30</p>
              <p>Email liên hệ công việc</p>
              <p>business@levents.asia</p>
            </div>
            <div className='col-xl-2 col-sm-6'>
              <h3>LIÊN HỆ</h3>
              <p>Hotline</p>
              <p>1900 633 028</p>
              <p>Email</p>
              <p>Customercare@levents.asia</p>
              <p>Thứ Hai - Chủ nhật</p>
              <p>09:30 ~ 21:30</p>
              <p>Email liên hệ công việc</p>
              <p>business@levents.asia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
