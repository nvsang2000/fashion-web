import CustomFooter from './CustomFooter';
import CustomHeader from './CustomHeader';

export default function LayoutDefault({ children }: any) {
  return (
    <>
      <CustomHeader />
      <main>{children}</main>
      <CustomFooter />
    </>
  );
}
