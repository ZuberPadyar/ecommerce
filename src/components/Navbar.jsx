import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { AiFillHome } from "react-icons/Ai";
import { FaHospitalUser } from "react-icons/Fa";
import { MdPermContactCalendar } from "react-icons/Md";
import { FaProductHunt } from "react-icons/Fa";
import { BsCartFill } from "react-icons/Bs";
import { VscAccount } from "react-icons/vsc";
import { FaUserAlt } from "react-icons/Fa";
import { AiFillSetting } from "react-icons/Ai";
import { AiOutlineMenu } from "react-icons/Ai";
import { AiOutlineClose } from "react-icons/Ai";

export default function Navbar() {
  const [logo,setlogo] =useState(false)
  const [menu,setmenu] = useState(false)

  const handleclick = () =>{
    setlogo(!logo)
  }

  const toggle = () =>{
    setmenu(!menu)
  }

  return (
  
      <nav className='fixed  h-screen w-[3rem] overflow-hidden hover:w-[10rem] ease-in-out duration-500 md:flex flex-col capitalize bg-slate-300 text-black' style={{width: menu ? "10rem" : "3rem"}} >
        <div className='py-14 px-5 text-[rem]' onClick={handleclick}>{logo ?"":""}</div>
        <span className='absolute top-0 left-2 text-[2rem]' onClick={toggle}>{menu ? <AiOutlineClose />:<AiOutlineMenu/>}</span>
        
        <ul className='flex flex-col gap-5 pl-2 w-[12rem]'>
            <Link to="/home" className='flex items-center gap-3 h-10 w-full hover:bg-white rounded-xl ease-in duration-[300ms]'><span className='text-[2rem]'><AiFillHome /></span>home</Link>
            <li className='flex items-center gap-3 h-10 w-[10rem] after:absolute after:text-sm hover:bg-white rounded-xl ease-in duration-[300ms] transition'><span className='text-[2rem]'><FaHospitalUser /></span>about</li>
            <li className='flex items-center gap-3 h-10 w-full hover:bg-white rounded-xl ease-in duration-[300ms]'><span className='text-[2rem]'><MdPermContactCalendar /></span>contact us</li>
            <li className='flex items-center gap-3 h-10 w-full hover:bg-white rounded-xl ease-in duration-[300ms]'><span className='text-[2rem]'><FaProductHunt /></span>other product</li>
            <li className='flex items-center gap-3 h-10 w-full hover:bg-white rounded-xl ease-in duration-[300ms]'><span className='text-[2rem]'><BsCartFill /></span>cart</li>
            
        </ul>
        <div className='absolute bottom-5 left-2 flex items-center gap-2'><span className='text-[2rem]'><AiFillSetting/></span> setting</div>
      </nav>
    
  )
}
