import 'bootstrap/dist/css/bootstrap.css';
import menu from '../home/menu.module.css';
import about from './about.module.css';
import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
export default function CustomAbout() {
    return (
        <>
            <div className='headerTop'>
                <div className={clsx(['container-fluid', menu.container])}>
                    <div className={clsx(['row', menu.headerTop])}>
                        <div className='col-lg-6'>
                            <div className={menu.textLeftHeaderTop}>
                                <p>Levent Love You!!!</p>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className={menu.textRightHeaderTop}>
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
                            <div
                                className={clsx([menu.menuLogo])}
                                style={{
                                    padding: '20px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <a href=''>
                                    <img src='https://levents.asia/wp-content/uploads/2021/10/logo.png' alt='' />
                                </a>
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
                <div className={clsx([about.headerAbout])}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6-col-md-12 col-sm-12" style={{ border: '1px solid black', width: '100%', height: '400px' }}>

                            </div>
                            <div className="col-xl-6 col-lg-6-col-md-12 col-sm-12" style={{ marginTop: '20px', maxWidth: '100%' }}>
                                <div className={clsx([about.aboutMain])}>
                                    <div style={{ marginBottom: '20px' }}>THÔNG TIN LIÊN HỆ !</div>
                                    <div style={{ display: 'flex', marginBottom: '20px' }}>
                                        <div>Hotline:</div>
                                        <div style={{ marginLeft: '10px', fontWeight: 'bold' }}>1900 633028</div>
                                        <Link href={''}>
                                            <button className={clsx([about.buttonAbout])} style={{ marginLeft: '164px', width: '200px', }}>Gọi ngay</button>
                                        </Link>


                                    </div>
                                    <div style={{ display: 'flex', marginBottom: '20px' }}>
                                        <div>Email:</div>
                                        <div style={{ marginLeft: '10px', fontWeight: 'bold' }}>Customercare@levents.asia</div>
                                        <Link href={''}>
                                            <button className={clsx([about.buttonAbout])} style={{ marginLeft: '20px', width: '200px' }}>Gửi ngay</button>
                                        </Link>


                                    </div>
                                    <div style={{ display: 'flex', marginBottom: '20px' }}>
                                        <div>Chatbot:</div>
                                        <div style={{ marginLeft: '10px', fontWeight: 'bold' }}>Messenger</div>
                                        <Link href={''}>
                                            <button className={clsx([about.buttonAbout])} style={{ marginLeft: '188px', width: '200px' }}>Nhắn ngay</button>
                                        </Link>
                                    </div>
                                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                                        <div >Mở cửa:</div>
                                        <div style={{ fontWeight: 'bold' }}>Thứ 2 - Chủ nhật | 09:30 ~ 22:30</div>
                                    </div>
                                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                                        <img src="https://levents.asia/wp-content/uploads/2021/10/258788769_1340918416370289_3461913855111644296_n-320x210.jpeg" alt="" />
                                        <div style={{ marginLeft: '20px' }}>
                                            <div style={{ fontWeight: 'bold', fontSize: '30px', marginBottom: '30px' }}>THE NEW PLAY GROUND, QUẬN 1</div>
                                            <div style={{ marginBottom: '20px' }} >The New Playground, 04 Phạm Ngũ Lão, Quận 1, HCM</div>
                                            <div style={{ display: 'flex', marginBottom: '20px' }}>
                                                <div>Mở cửa:</div>
                                                <div style={{ fontWeight: 'bold', marginLeft: '10px' }}>Thứ 2 - Chủ nhật| 09:30 ~ 21:30</div>
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                <div>Số điện thoại:</div>
                                                <div style={{ fontWeight: 'bold', marginLeft: '10px' }}>1900 633 028</div>
                                            </div><br />
                                            <button style={{ border: 'none', backgroundColor: 'black', color: 'white', }}>Xem cửa hàng</button>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                                        <img src="https://levents.asia/wp-content/uploads/2021/10/258788769_1340918416370289_3461913855111644296_n-320x210.jpeg" alt="" />
                                        <div style={{ marginLeft: '20px' }}>
                                            <div style={{ fontWeight: 'bold', fontSize: '30px', marginBottom: '30px' }}>THE NEW PLAY GROUND, QUẬN 1</div>
                                            <div style={{ marginBottom: '20px' }} >The New Playground, 04 Phạm Ngũ Lão, Quận 1, HCM</div>
                                            <div style={{ display: 'flex', marginBottom: '20px' }}>
                                                <div>Mở cửa:</div>
                                                <div style={{ fontWeight: 'bold', marginLeft: '10px' }}>Thứ 2 - Chủ nhật| 09:30 ~ 21:30</div>
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                <div>Số điện thoại:</div>
                                                <div style={{ fontWeight: 'bold', marginLeft: '10px' }}>1900 633 028</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', marginBottom: '30px' }}>
                                        <img src="https://levents.asia/wp-content/uploads/2021/10/258788769_1340918416370289_3461913855111644296_n-320x210.jpeg" alt="" />
                                        <div style={{ marginLeft: '20px' }}>
                                            <div style={{ fontWeight: 'bold', fontSize: '30px', marginBottom: '30px' }}>THE NEW PLAY GROUND, QUẬN 1</div>
                                            <div style={{ marginBottom: '20px' }} >The New Playground, 04 Phạm Ngũ Lão, Quận 1, HCM</div>
                                            <div style={{ display: 'flex', marginBottom: '20px' }}>
                                                <div>Mở cửa:</div>
                                                <div style={{ fontWeight: 'bold', marginLeft: '10px' }}>Thứ 2 - Chủ nhật| 09:30 ~ 21:30</div>
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                <div>Số điện thoại:</div>
                                                <div style={{ fontWeight: 'bold', marginLeft: '10px' }}>1900 633 028</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ marginBottom: '60px' }}>
                                        <div style={{ fontWeight: 'bold' }}>GỬI TIN NHẮN NGAY CHO LEVENTS</div>
                                        <div style={{ fontWeight: 'bold' }}>KHI BẠN CẦN HỖ TRỢ HOẶC CÓ THẮC MẮC NHÉ!</div>
                                        <input className={clsx([about.textAbout])} style={{ marginBottom: '20px' }} type="text" placeholder='Họ và tên' />
                                        <div>
                                            <input className={clsx([about.textAbout])} type="text" placeholder='Email' />
                                            <input className={clsx([about.textAbout])} style={{ marginLeft: '50px', marginBottom: '20px' }} type="text" placeholder='Số điện thoại' />
                                        </div>
                                        <input style={{ width: '600px', height: '400px', border: '1px solid #e3e3e3', outline: 'none' }} type="text" placeholder='Lời nhắn' />
                                        <button style={{ border: 'none', backgroundColor: 'black', color: 'white', display: 'block', marginTop: '20px' }}>Gửi ngay</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

