import type { NextPage } from 'next';
import { CustomHomeProduct, CustomSlider } from '~/components';
const Home: NextPage = () => {
  return (
    <div className='home'>
      <CustomSlider />
      <CustomHomeProduct />
    </div>
  )
};

export default Home;
