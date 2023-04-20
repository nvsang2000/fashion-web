import clsx from 'clsx';
import slider from './slider.module.css';
export default function CustomSlider() {
    return (
        <>
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
                        <div className='col-xl-12 col-sm-12' style={{ borderBottom: '1px solid #e3e3e3', paddingBottom: '30px' }}>
                            <p style={{ textAlign: 'center', fontSize: '25px' }}>Sản Phẩm Yêu Thích</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}