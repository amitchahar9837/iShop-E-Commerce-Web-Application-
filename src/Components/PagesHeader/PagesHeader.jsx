import React from 'react'
import mac from '../../assets/images/Products/mac.png'
import ipad from '../../assets/images/Products/ipad.png'
import { Link } from 'react-router-dom'
const PagesHeader = () => {
  return (
    <div className='container flex items-center justify-evenly gap-2 my-5'>
        <div className='flex flex-col items-center gap-1'>
            <img src={mac} alt="" style={{width:'100px', height:'80px', objectFit:"contain"}}/>
            <Link to={"/mac"}>{"Mac"}</Link>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <img src={mac} alt="" style={{width:'100px', height:'80px', objectFit:"contain"}}/>
            <Link to={"/mac"}>{"Mac"}</Link>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <img src={ipad} alt="" style={{width:'100px', height:'80px', objectFit:"contain"}}/>
            <Link to={"/mac"}>{"Mac"}</Link>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <img src={mac} alt="" style={{width:'100px', height:'80px', objectFit:"contain"}}/>
            <Link to={"/mac"}>{"Mac"}</Link>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <img src={mac} alt="" style={{width:'100px', height:'80px', objectFit:"contain"}}/>
            <Link to={"/mac"}>{"Mac"}</Link>
        </div>
        <div className='flex flex-col items-center gap-1'>
            <img src={mac} alt="" style={{width:'100px', height:'80px', objectFit:"contain"}}/>
            <Link to={"/mac"}>{"Mac"}</Link>
        </div>
    </div>
  )
}

export default PagesHeader