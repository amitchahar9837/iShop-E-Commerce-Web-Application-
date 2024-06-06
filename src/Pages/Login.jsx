import React, { useEffect } from 'react'
import Helmet from '../shared/Helmet'
import logo from '../assets/images/SVGIcons/iSHOP Logo.svg'
import { Link } from 'react-router-dom'
const Login = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
      },[])
  return (
    <Helmet title={'Login'}>
        <div className='dark:bg-gray-900 dark:text-white duration-200 py-8'>
            <div className='container flex flex-col items-center gap-5  md:gap-8'>
                <div className='flex items-center gap-1 sm:gap-2'>
                    <h1 className='text-2xl sm:text-4xl font-bold opacity-90'>Sign in to </h1>
                    <img src={logo} alt="" className='w-[80px] sm:w-[auto]' />
                </div>
                <form action='#' className='flex flex-col gap-3 md:gap-5 w-[90%] lg:w-[50%] items-center'>
                    <input type='text' placeholder='Email or Phone Number'className='border-2 border-gray-300 px-4 py-2 rounded-sm w-full dark:text-black focus:border-primary focus:outline-none text-md md:text-lg font-semibold '/>
                    <input type="password" placeholder='Password' className='border-2 border-gray-300 px-4 py-2 rounded-sm  w-full dark:text-black focus:border-primary focus:outline-none text-md md:text-lg font-semibold'/>
                    <button type='submit' className='px-10 py-2 bg-primary inline-block w-fit text-xl font-semibold text-white rounded-sm'>Sign in</button>
                </form>
                <div className='flex flex-col items-center gap-2'>
                    <Link className='text-primary text-[1rem] md:text-[1.2rem] hover:underline duration-300' to={'/'}>Forgotten your password?</Link>
                    <p className='text-center text-[1rem] md:text-[1.2rem]'>Do not have an iShop ID? <Link to={'/signup'} className='text-primary text-[1rem] md:text-[1.2rem] hover:underline duration-300'>Create<br/> yours new account</Link></p>
                </div>
            </div>
        </div>
    </Helmet>
  )
}

export default Login