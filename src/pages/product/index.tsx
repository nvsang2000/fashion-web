import product from './style.module.css';
import React, { useState } from 'react';
import clsx from 'clsx';

export default function Header() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <div className='product'>
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
                    style={{ textDecoration: 'none', color: 'black', fontSize: '20px', fontWeight: 'bold' }}
                    onClick={() => setChecked(!checked)}
                  >
                    Thông tin{' '}
                  </a>
                </div>
                <hr />
                {/* đóng mở info reactjs */}
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

                <hr />
                <div className='moreInfo'>
                  <a href='#box' style={{ textDecoration: 'none', color: 'black', fontSize: '20px', fontWeight: 'bold' }} onClick={() => setChecked(!checked)}>Bảng size{' '}</a>
                </div>
                <hr />
                {/* đóng mở info reactjs */}
                {checked && (
                  <div id='box' className={clsx([product.textAdd1])}>
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
