import 'bootstrap/dist/css/bootstrap.css';
import product from './style.module.css';
import menu from '../home/menu.module.css';
import React, { useState } from 'react';
import clsx from 'clsx';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Header() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <div className='product'>
        <div className='headerTop'>
          <div className={clsx(['container-fluid', menu.container])}>
            <div className={clsx(['row', menu.headerTop])}>
              <div className='col-lg-6'>
                <div className={clsx([menu.textLeftHeaderTop])}>
                  <p>Levent Love You!!!</p>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className={clsx([menu.textRightHeaderTop])}>
                  <a href=''>
                    <span>Mua Ngay</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className={clsx(['row', menu.menuTop])}
              style={{ borderBottom: '1px solid #e3e3e3' }}
            >
              <div className='col-lg-4'></div>
              <div className={clsx(['col-lg-4', 'col-sm-6'])}>
                <div className={clsx([menu.menuLogo])} style={{ padding: '20px' }}>
                  <center>
                    <a href=''>
                      <img src='https://levents.asia/wp-content/uploads/2021/10/logo.png' alt='' />
                    </a>
                  </center>
                </div>
              </div>
              <div className={clsx(['col-xl-4', 'col-sm-6'])}>
                <div className={clsx([menu.headerMenuRight])}>
                  <div className={clsx([menu.noti])}>
                    <a href=''>
                      <img
                        className={clsx([menu.imgMenuRight])}
                        style={{ width: '16px' }}
                        src='https://levents.asia/template/assets/images/notification.png'
                        alt=''
                      />
                    </a>
                  </div>
                  <div className={clsx([menu.wish])}>
                    <a href=''>
                      <p className={clsx([menu.textMenuRight])}>Sản phẩm yêu thích</p>
                    </a>
                  </div>
                  <div className={clsx([menu.ser])}>
                    <a href=''>
                      <img
                        className={clsx([menu.imgMenuRight])}
                        src='https://levents.asia/template/assets/images/svg/ic-ser.svg'
                        alt=''
                      />
                    </a>
                  </div>
                  <div className={clsx([menu.cart])}>
                    <a href=''>
                      <img
                        className={clsx([menu.imgMenuRight])}
                        src='https://levents.asia/template/assets/images/svg/ic-cart.svg'
                        alt=''
                      />
                    </a>
                  </div>
                  <div className={clsx([menu.accout])}>
                    <a href=''>
                      <img
                        className={clsx([menu.imgMenuRight])}
                        src='https://levents.asia/template/assets/images/svg/ic-user.svg'
                        alt=''
                      />
                    </a>
                  </div>
                  <div className={clsx([menu.flag])}>
                    <a href=''>
                      <img
                        className={clsx([menu.imgMenuRight])}
                        src='https://levents.asia/template/assets/images/svg/ic-vn.svg'
                        alt=''
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={clsx(['row', menu.mainMenu])}
              style={{ borderBottom: '1px solid #e3e3e3' }}
            >
              <div className='col-xl-12'>
                <div className='wrapper'>
                  <div id='header'>
                    <div id={clsx([menu.toggle])}>
                      <AiOutlineMenu />
                    </div>
                    <nav id={clsx([menu.navMenuBar])}>
                      <div className={clsx([menu.menuBar])}>
                        <ul id={clsx([menu.menuSmall])}>
                          <li>
                            <a href=''>Về chúng tôi</a>
                          </li>
                          <li>
                            <a href=''>Cửa hàng</a>
                          </li>
                          <li>
                            <a href=''>Giảm giá</a>
                          </li>
                          <li>
                            <a href=''>Bộ sưu tập</a>
                          </li>
                          <li>
                            <a href=''>Bộ phối</a>
                          </li>
                          <li>
                            <a href=''>Bài viết</a>
                          </li>
                          <li>
                            <a href=''>Liên hệ</a>
                          </li>
                          <li>
                            <a href=''>Chăm sóc khách hàng</a>
                          </li>
                          <li>
                            <a href=''>Tuyển dụng</a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='productMain' style={{ marginTop: '50px' }}>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-xl-3'></div>
              <div
                className='col-xl-3 col-lg-4 col-md-6 col-sm-12'
                style={{ border: '1px solid #e3e3e3', width: '100%', height: '100%' }}
              >
                <img
                  style={{ width: '100%' }}
                  src='https://levents.asia/wp-content/uploads/2023/01/z4062902778388_dc66e2b0d69a034cc54a0276848248c8-1000x1000.jpg'
                  alt=''
                />
              </div>
              <div className='col-xl-3 col-lg-4 col-md-4 col-sm-12 ' style={{ marginLeft: '20px' }}>
                <h1>LEVENTS® COLOR TEE</h1>
                <br />
                <h5>380,000 vnđ</h5>
                <br />
                <h6>Màu sắc: BLUE</h6>
                <div style={{ display: 'flex' }}>
                  <img
                    className={clsx([product.imgProduct])}
                    style={{ width: '80px', border: '1px solid #e3e3e3' }}
                    src='https://levents.asia/wp-content/uploads/2023/01/z4062902778388_dc66e2b0d69a034cc54a0276848248c8-150x150.jpg'
                    alt=''
                  />
                  <img
                    className={clsx([product.imgProduct])}
                    style={{ width: '80px', marginLeft: '20px' }}
                    src='https://levents.asia/wp-content/uploads/2023/01/z4062902869605_57b165da4120bccbe787fca0f9c2c058-150x150.jpg'
                    alt=''
                  />
                  <img
                    className={clsx([product.imgProduct])}
                    style={{ width: '80px', marginLeft: '20px' }}
                    src='https://levents.asia/wp-content/uploads/2023/01/z4062902869605_57b165da4120bccbe787fca0f9c2c058-150x150.jpg'
                    alt=''
                  />
                </div>
                <br />
                <h5>Size</h5>
                <div style={{ display: 'flex' }}>
                  <h6 className={clsx([product.sizeProduct])} style={{ marginLeft: '-1px' }}>
                    SIZE 1
                  </h6>
                  <h6 className={clsx([product.sizeProduct])}>SIZE 2</h6>
                  <h6 className={clsx([product.sizeProduct])}>SIZE 3</h6>
                  <h6 className={clsx([product.sizeProduct])}>SIZE 4</h6>
                </div>
                <br />

                <button
                  style={{
                    borderRadius: '5px',
                    border: '1px solid #e3e3e3',
                    backgroundColor: 'black',
                    color: 'white',
                    width: '300px',
                    height: 'auto',
                  }}
                >
                  Thêm vào giỏ hàng
                </button>
                <hr />
                <div className='moreInfo'>
                  <a
                    href='#box'
                    style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}
                    onClick={() => setChecked(!checked)}
                  >
                    Thông tin thêm{' '}
                  </a>
                </div>
                <hr />
                {checked && (
                  <div id='box' className={clsx([product.textAdd])}>
                    <h6>LEVENTS® COLOR TEE</h6>
                    <h6>
                      Sản phẩm: LÌ VEN ORIGINAL 2.0 – Phiên bản bề mặt vải có lông, khắc phục tình
                      trạng bị nhăn của sản phẩm.
                    </h6>
                    <p>
                      Lì ven Original không lông được áp dụng cho toàn bộ sản phẩm áo thun màu đen
                    </p>
                    <p>Lì ven Original 2.0 có lông vẫn được áp dụng cho các áo thun màu khác</p>
                    <h6>Kích cỡ: 1/2/3/4</h6>
                  </div>
                )}
              </div>
              <div className='col-xl-3'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
