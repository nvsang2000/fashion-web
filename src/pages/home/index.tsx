import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import menu from './menu.module.css';
import clsx from 'clsx';
import slider from './slider.module.css';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Header() {
    return (
        <div className="home">
            <div className='headerTop'>
                <div className={clsx(['container-fluid', menu.container])}>
                    <div className={clsx(['row', menu.headerTop])}>
                        <div className="col-lg-6">
                            <div className={clsx([menu.textLeftHeaderTop])}>
                                <p>Levent Love You!!!</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={clsx([menu.textRightHeaderTop])}>
                                <a href=""><span>Mua Ngay</span></a>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(['row', menu.menuTop])} style={{ borderBottom: '1px solid #e3e3e3' }} >
                        <div className='col-lg-4'></div>
                        <div className={clsx(['col-lg-4', 'col-sm-6'])}>
                            <div className={clsx([menu.menuLogo])} style={{ padding: '20px' }}>
                                <center>
                                    <a href=""><img src="https://levents.asia/wp-content/uploads/2021/10/logo.png" alt="" /></a>
                                </center>
                            </div>
                        </div>
                        <div className={clsx(['col-xl-4', 'col-sm-6'])}>
                            <div className={clsx([menu.headerMenuRight])}>
                                <div className={clsx([menu.noti])}>
                                    <a href=""><img className={clsx([menu.imgMenuRight])} style={{ width: '16px' }} src="https://levents.asia/template/assets/images/notification.png" alt="" /></a>
                                </div>
                                <div className={clsx([menu.wish])}>
                                    <a href=""><p className={clsx([menu.textMenuRight])}>Sản phẩm yêu thích</p></a>
                                </div>
                                <div className={clsx([menu.ser])}>
                                    <a href=""><img className={clsx([menu.imgMenuRight])} src="https://levents.asia/template/assets/images/svg/ic-ser.svg" alt="" /></a>
                                </div>
                                <div className={clsx([menu.cart])}>
                                    <a href=""><img className={clsx([menu.imgMenuRight])} src="https://levents.asia/template/assets/images/svg/ic-cart.svg" alt="" /></a>
                                </div>
                                <div className={clsx([menu.accout])}>
                                    <a href=""><img className={clsx([menu.imgMenuRight])} src="https://levents.asia/template/assets/images/svg/ic-user.svg" alt="" /></a>
                                </div>
                                <div className={clsx([menu.flag])}>
                                    <a href=""><img className={clsx([menu.imgMenuRight])} src="https://levents.asia/template/assets/images/svg/ic-vn.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(['row', menu.mainMenu])} style={{ borderBottom: '1px solid #e3e3e3' }} >
                        <div className="col-xl-12">
                            <div className="wrapper">
                                <div id="header">
                                    <div id={clsx([menu.toggle])}>
                                        <AiOutlineMenu />
                                    </div>
                                    <nav id={clsx([menu.navMenuBar])}>
                                        <div className={clsx([menu.menuBar])}>
                                            <ul id={clsx([menu.menuSmall])}>
                                                <li><a href="">Về chúng tôi</a></li>
                                                <li><a href="">Cửa hàng</a></li>
                                                <li><a href="">Giảm giá</a></li>
                                                <li><a href="">Bộ sưu tập</a></li>
                                                <li><a href="">Bộ phối</a></li>
                                                <li><a href="">Bài viết</a></li>
                                                <li><a href="">Liên hệ</a></li>
                                                <li><a href="">Chăm sóc khách hàng</a></li>
                                                <li><a href="">Tuyển dụng</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='homeSlides'>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-12">
                            <div className={clsx([slider.banner])}>
                                <a href=""><img style={{ width: '100%' }} src="https://levents.asia/wp-content/uploads/2023/03/1920x760-1920x988.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homeProduct" style={{ borderBottom: '1px solid #e3e3e3', paddingBottom: '30px' }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 col-sm-12">
                            <p style={{ textAlign: 'center', fontSize: '25px' }}>Sản Phẩm Yêu Thích</p>
                        </div>
                        <div className="col-xl-3 col-sm-12 col-md-6 col-lg 6">
                            <center>
                                <a href=""><img style={{ width: '300px' }} src="https://levents.asia/wp-content/uploads/2023/01/z4062902873074_11115d37d843e789bd678eb1e04039ce-400x500.jpg" alt="" /></a>
                                <p>LEVENTS® COLOR TEE/ BLACK</p>
                                <div>361,000 vnđ</div>
                                <div style={{ textDecoration: 'line-through' }}>380,000 vnđ</div>
                            </center>
                        </div>
                        <div className="col-xl-3 col-sm-12 col-md-6 col-lg 6">
                            <center>
                                <a href=""><img style={{ width: '300px' }} src="https://levents.asia/wp-content/uploads/2023/01/z4062902873074_11115d37d843e789bd678eb1e04039ce-400x500.jpg" alt="" /></a>
                                <p>LEVENTS® COLOR TEE/ BLACK</p>
                                <div>361,000 vnđ</div>
                                <div style={{ textDecoration: 'line-through' }}>380,000 vnđ</div>
                            </center>
                        </div>
                        <div className="col-xl-3 col-sm-12 col-md-6 col-lg 6">
                            <center>
                                <a href=""><img style={{ width: '300px' }} src="https://levents.asia/wp-content/uploads/2023/01/z4062902873074_11115d37d843e789bd678eb1e04039ce-400x500.jpg" alt="" /></a>
                                <p>LEVENTS® COLOR TEE/ BLACK</p>
                                <div>361,000 vnđ</div>
                                <div style={{ textDecoration: 'line-through' }}>380,000 vnđ</div>
                            </center>
                        </div>
                        <div className="col-xl-3 col-sm-12 col-md-6 col-lg 6">
                            <center>
                                <a href=""><img style={{ width: '300px' }} src="https://levents.asia/wp-content/uploads/2023/01/z4062902873074_11115d37d843e789bd678eb1e04039ce-400x500.jpg" alt="" /></a>
                                <p>LEVENTS® COLOR TEE/ BLACK</p>
                                <div>361,000 vnđ</div>
                                <div style={{ textDecoration: 'line-through' }}>380,000 vnđ</div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerEnd" style={{ marginTop: '50px', marginLeft: '20px' }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-sm-12">
                            <h3>Về chúng tôi</h3>
                            <p>Levents® – Popular Streetwear Brand</p>
                            <p>HỘ KINH DOANH Red Label</p>
                            <p>GPKD được cấp bởi Cục Cảnh sát QLHC & TTXH</p>
                            <p>Trụ sở hộ kinh doanh: 842 Sư Vạn Hạnh, Phường 13, Quận 10, Tp. Hồ Chí Minh</p>
                            <p>Mä só thuê: 41J8031547</p>
                            <p>Ngày cấp: 06/07/2021</p>
                            <p>Người đại diện: Nguyễn Trần Duy Khiết</p>
                            <p>Mã Số thuế cá nhân: 8748861448-001</p>
                            <img style={{ width: '200px' }} src="https://levents.asia/wp-content/uploads/2023/02/logoSaleNoti-1.png" alt="" />
                        </div>
                        <div className="col-xl-2 col-sm-6">
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
                        <div className="col-xl-2 col-sm-6">
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
                        <div className="col-xl-2 col-sm-6">
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
                        <div className="col-xl-2 col-sm-6">
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