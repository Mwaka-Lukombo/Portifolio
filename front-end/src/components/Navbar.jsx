
import {Link, NavLink} from 'react-router-dom';
import { ClosedCaption, Facebook, Github, Instagram, Mail, Menu, MenuIcon, MenuSquare} from 'lucide-react';


export const Navbar = () => {
  return (
    <header className='flex items-center px-[4%] justify-between h-[80px] bg-gradient-to-r from-[#0B0203] to-[#1A0608] text-[#F9F9F9]'>
      <div className='text-2xl font-bold'>
         <h1>awTech</h1>
      </div>

      <div className='md:hidden'>
       <div className='flex items-center justify-center w-[50px] h-[50px]  bg-secundary-color text-xl cursor-pointer'>
         <Menu />
       </div>
      </div>

      <ul className='hidden md:flex gap-3 text-xl'>
        <li>
          <a href=''>Home</a>
        </li>

        <li>
          <a href=''>Serviços</a>
        </li>

        <li>
          <a href=''>Portifolio</a>
        </li>

        <li>
          <a href=''>Sobre</a>
        </li>
      </ul>
    </header>
  )
}
