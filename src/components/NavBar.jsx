import { MenuIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para scroll suave
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header 
        className={`
          fixed top-0 left-0 w-full z-50 
          px-[3%] flex items-center justify-between 
          transition-all duration-500 ease-in-out
          ${isScrolled 
            ? 'h-[60px] bg-black/95 backdrop-blur-md border-b border-purple-500/30 shadow-lg shadow-purple-500/10' 
            : 'h-[100px] bg-black'
          }
        `}
      >
        <Link to='/' onClick={(e) => handleSmoothScroll(e, 'home')}>
          <img 
            src='/images/logo.png' 
            className={`
              bg-center bg-contain transition-all duration-500
              ${isScrolled ? 'w-[150px] h-[60px]' : 'w-[200px] h-[60px]'}
            `}
          /> 
        </Link>

        <ul className='hidden md:flex items-center gap-5 text-gray-400'>
          <li className='relative flex flex-col items-center group text-sm uppercase font-semibold'>
            <a 
              href='#sobre' 
              onClick={(e) => handleSmoothScroll(e, 'sobre')}
              className='hover:text-purple-400 transition-colors duration-300 cursor-pointer'
            >
              Sobre
            </a>
            <div className='w-[50px] h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 absolute bottom-[-5px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </li>

          <li className='relative flex flex-col items-center group text-sm uppercase font-semibold'>
            <a 
              href='#skills' 
              onClick={(e) => handleSmoothScroll(e, 'skills')}
              className='hover:text-purple-400 transition-colors duration-300 cursor-pointer'
            >
              Skills
            </a>
            <div className='w-[50px] h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 absolute bottom-[-5px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </li>

          <li className='relative flex flex-col items-center group text-sm uppercase font-semibold'>
            <a 
              href='#experiencia' 
              onClick={(e) => handleSmoothScroll(e, 'experiencia')}
              className='hover:text-purple-400 transition-colors duration-300 cursor-pointer'
            >
              Experiência
            </a>
            <div className='w-[50px] h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 absolute bottom-[-5px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </li>

          <li className='relative flex flex-col items-center group text-sm uppercase font-semibold'>
            <a 
              href='#contacto' 
              onClick={(e) => handleSmoothScroll(e, 'contacto')}
              className='hover:text-purple-400 transition-colors duration-300 cursor-pointer'
            >
              Contacto
            </a>
            <div className='w-[50px] h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 absolute bottom-[-5px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </li>

          <a 
            href='#contacto'
            onClick={(e) => handleSmoothScroll(e, 'contacto')}
            className={`
              border transition-all duration-300 px-4 py-2 rounded-lg text-sm bg-primary-purple text-white cursor-pointer
              ${isScrolled 
                ? 'border-purple-500 text-purple-400 hover:bg-purple-600 ' 
                : 'border-secundary-purple text-secundary-purple hover:bg-secundary-purple hover:text-white'
              }
            `}
          >
            Vamos Conversar
          </a>
        </ul>

        <div 
          className='cursor-pointer block md:hidden z-50'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <MenuIcon className={`size-8 text-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} />
        </div>
      </header>

      {/* Espaçador */}
      <div className={`transition-all duration-500 ${isScrolled ? 'h-[70px]' : 'h-[100px]'}`} />

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-full bg-background-black/98 backdrop-blur-lg z-40 md:hidden flex flex-col items-center justify-center gap-8">
          <button 
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ✕
          </button>
          
          <a 
            href='#sobre'
            onClick={(e) => handleSmoothScroll(e, 'sobre')}
            className='text-xl text-gray-400 hover:text-purple-400 transition-colors cursor-pointer'
          >
            Sobre
          </a>
          
          <a 
            href='#skills'
            onClick={(e) => handleSmoothScroll(e, 'skills')}
            className='text-xl text-gray-400 hover:text-purple-400 transition-colors cursor-pointer'
          >
            Skills
          </a>
          
          <a 
            href='#experiencia'
            onClick={(e) => handleSmoothScroll(e, 'experiencia')}
            className='text-xl text-gray-400 hover:text-purple-400 transition-colors cursor-pointer'
          >
            Experiência
          </a>
          
          <a 
            href='#contacto'
            onClick={(e) => handleSmoothScroll(e, 'contacto')}
            className='text-xl text-gray-400 hover:text-purple-400 transition-colors cursor-pointer'
          >
            Contacto
          </a>
          
          <a 
            href='#contacto'
            onClick={(e) => handleSmoothScroll(e, 'contacto')}
            className='border hover:bg-primary-purple text-white text-sm bg-secundary-purple text-secundary-purple border-secundary-purple px-6 py-3 rounded-lg text-lg cursor-pointer'
          >
            Vamos Conversar
          </a>
        </div>
      )}

      {isMobileMenuOpen && (
        <style>{`
          body {
            overflow: hidden;
          }
        `}</style>
      )}
    </>
  );
};