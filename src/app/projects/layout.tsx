import Head from 'next/head'
import { Footer } from "../../components/Footer";

const Layout = ({ children }) => (
  <div className='bg-main-top min-h-screen'>
    {children}
    <Footer />
  </div>
)
export default Layout