import React from 'react'
import LOGO from "../../assets/images/SVGIcons/iSHOP Logo.svg";
import facebookLogo from '../../assets/images/SVGIcons/facebook.svg';
import twitterLogo from '../../assets/images/SVGIcons/twitter.svg';
import {Link} from 'react-router-dom';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='dark:bg-gray-900 dark:text-white duration-200 border-t-2'>
      <div className='container flex flex-col gap-2'>
        {/* Footer Top Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-8'>
          <div className='flex flex-col gap-4'>
              <div >
                <img src={LOGO} alt="" />
              </div>
              <div>
                <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
              </div>
          </div>
          <div className='flex flex-col gap-4'>
              <div >
                <h2 className='font-bold text-2xl'>Follow Us</h2>
              </div>
              <div>
                <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
              </div>
              <div className='flex gap-2'>
                <img src={facebookLogo} alt="" className='w-[30px] h-[30px] object-contain' />
                <img src={twitterLogo} alt=""  className='w-[30px] h-[30px] object-contain'/>
              </div>
          </div>
          {/* Contact Us */}
          <div className='flex flex-col gap-4'>
              <div >
                <h2 className='font-bold text-2xl'>Contact Us</h2>
              </div>
              <div className='flex flex-col '>
                <p>iShop:address @building 124</p>
                <p>Call us now:0123-456-789</p>
                <p>Email:support@whatever.com</p>
              </div>
          </div>
          
        </div>
        {/* Footer Bottom Section */}
        <div className='py-12 border-t-2 border-gray-100'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {/* Links */}
            <div className='flex flex-col gap-3'>
                <div>
                  <h2 className='font-bold text-2xl'>Links</h2>
                </div>
                <div className='flex flex-col '>
                  <Link to={'/'} className='hover:text-secondary hover:underline inline-block w-fit'>Home</Link>
                  <Link to={'/iphone'} className='hover:text-secondary hover:underline inline-block w-fit'>iPhone</Link>
                  <Link to={'/store'} className='hover:text-secondary hover:underline inline-block w-fit'>Store</Link>
                  <Link to={'/ipad'} className='hover:text-secondary hover:underline inline-block w-fit'>iPad</Link>
                  <Link to={'/accessories'} className='hover:text-secondary hover:underline inline-block w-fit'>Accessories</Link>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div>
                  <h2 className='font-bold text-2xl'>Services</h2>
                </div>
                <div className='flex flex-col '>
                  <Link to={'/'} className='hover:text-secondary hover:underline inline-block w-fit'>About Us</Link>
                  <Link to={'/'} className='hover:text-secondary hover:underline inline-block w-fit'>Information</Link>
                  <Link to={'/'} className='hover:text-secondary hover:underline inline-block w-fit'>Privacy Policy</Link>
                  <Link to={'/'} className='hover:text-secondary hover:underline inline-block w-fit'>Terms & Condition</Link>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div>
                  <h2 className='font-bold text-2xl'>Social</h2>
                </div>
                <div className='flex flex-col '>
                  <Link to={'/'} className='hover:text-secondary hover:underline inline-block w-fit'>Facebook</Link>
                  <Link to={'/'} className='hover:text-secondary hover:underline inline-block w-fit'>Twitter</Link>
                  <Link to={'/'} className='hover:text-secondary hover:underline inline-block w-fit'>Instagram</Link>
                  <Link to={'/'} className='hover:text-secondary hover:underline inline-block w-fit'>LinkedIn</Link>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div>
                  <h2 className='font-bold text-2xl'>Help</h2>
                </div>
                <div className='flex flex-col '>
                  <Link to={'/'} className='hover:text-secondary hover:underline inline-block w-fit'>Payments</Link>
                  <Link to={'/'} className='hover:text-secondary hover:underline inline-block w-fit'>Shipping</Link>
                  <Link to={'/'} className='hover:text-secondary hover:underline inline-block w-fit'>Cancellation & Returns</Link>
                  <Link to={'/'} className='hover:text-secondary hover:underline inline-block w-fit'>Contact Us</Link>
                </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className='py-1 grid place-items-center'>
          <p className='text-lg font-semibold text-gray-600'>&copy; {year} All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer