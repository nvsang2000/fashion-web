import post from './posts.module.css';
import React from 'react';
import clsx from 'clsx';

export default function posts() {
    return (
        <>
            {/* <div className='headerTop'>
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
            </div> */}
            <div className={clsx([post.posts])}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className={clsx([post.slider])}>
                                <div className={clsx([post.slides])}>
                                    <input type="radio" name="radio-btn" className={clsx([post.radio1])} />
                                    <input type="radio" name="radio-btn" className={clsx([post.radio2])} />
                                    <input type="radio" name="radio-btn" className={clsx([post.radio3])} />
                                    <input type="radio" name="radio-btn" className={clsx([post.radio4])} />

                                    <div className={clsx([post.slideFirst])}>
                                        <img src="https://levents.asia/wp-content/uploads/2022/07/homepage-ngang-scaled.jpg" alt="" />
                                    </div>
                                    <div className={clsx([post.slideFirst])}>
                                        <img src="https://levents.asia/wp-content/uploads/2023/03/1920x760-1920x988.png" alt="" />
                                    </div>
                                    <div className={clsx([post.slideFirst])}>
                                        <img src="https://levents.asia/wp-content/uploads/2022/07/homepage-ngang-scaled.jpg" alt="" />
                                    </div>
                                    <div className={clsx([post.slideFirst])}>
                                        <img src="https://levents.asia/wp-content/uploads/2023/03/1920x760-1920x988.png" alt="" />
                                    </div>

                                    <div className={clsx([post.navigationAuto])}>
                                        <div className={clsx([post.autoBtn1])}></div>
                                        <div className={clsx([post.autoBtn2])}></div>
                                        <div className={clsx([post.autoBtn3])}></div>
                                        <div className={clsx([post.autoBtn4])}></div>
                                    </div>

                                </div>

                                <div className={clsx([post.navigationManual])}>
                                    <label htmlFor="radio1" className={clsx([post.manualBtn])}></label>
                                    <label htmlFor="radio2" className={clsx([post.manualBtn])}></label>
                                    <label htmlFor="radio3" className={clsx([post.manualBtn])}></label>
                                    <label htmlFor="radio4" className={clsx([post.manualBtn])}></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}