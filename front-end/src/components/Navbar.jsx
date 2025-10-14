
import {Link} from 'react-router-dom';
import { Facebook, Github, Instagram, Mail, MenuIcon} from 'lucide-react';


export const Navbar = () => {
  return (
    <header className='fixed z-10 w-full bg-main-color p-10 h-[90px] text-white flex items-center justify-between'>
        <div className='text-3xl font-bold'>
            <h2>awTech</h2>
        </div>
        
        <div className='absolute cursor-pointer  right-[12px] md:hidden'>
          <MenuIcon />
        </div>

        <div className='hidden md:flex md:p-20 divide-x-4'>
            <ul className='flex gap-2 text-xl font-semibold tracking-wider'>
                <li>
                    <a href="/" className='md:hover:text-main-color'>Home</a>
                </li>

                <li>
                    <a href="/sobre" className='md:hover:text-black-main'>Sobre</a>
                </li>

                <li>
                    <a href="/contacto" className='md:hover:text-black-main'>Serviços</a>
                </li>
            </ul>
            <div className='list-none ml-2'>
                <li className='ml-2 text-xl font-bold'>
                    <a href="/blog" className='md:hover:text-black-main'>Contacto</a>
                </li>
            </div>
        </div>

        <div className='hidden md:flex md:gap-3'>
           <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center text-main-color font-bold cursor-pointer hover:bg-black-main hover:text-white'>
             <Facebook />
           </div>

           <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center text-main-color font-bold cursor-pointer hover:bg-black-main hover:text-white'>
            <Instagram />
           </div>

           <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold cursor-pointer hover:bg-black-main hover:text-white'>
            <Github />
          </div>
          <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center text-main-color font-bold cursor-pointer hover:bg-black-main hover:text-white'>
            <Mail />
          </div>
        </div>
        
    </header>
  )
}
