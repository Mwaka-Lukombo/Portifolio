import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react'
import React from 'react'

export const Contact = () => {
  return (
    <>
     <footer className='p-5 max-w-full h-auto bg-black-main text-white'>
        <h2 className='text-3xl font-bold mb-[40px] uppercase'>Contacto</h2>

        <div className='grid md:grid-cols-2'>
          <div className='grid-flow-row grid-rows-4 md:grid-cols-1'>
             <div className='grid-rows-1 mb-5'>
                <h1 className='text-2xl font-semibold'>AwTech</h1>
             </div>

             <div className='grid-rows-1'>
                <p className='text-justify text-base'>Eu crio Aplicações Webs, Sistemas de Gestão, Estrategias de Marketing usando tecnologias de ponta tais como Reactjs, Nodejs, MongoDB, Nextjs.
                  abaixo você pode se inscrever para receber emails sobre desenvolvimento web!</p>
             </div>

             <div className='grid-rows-1'>
                <h3 className='mt-4 mb-4'>Localização</h3>
                <p>Inhambane, Liberdade 02</p>
             </div>

             <div className='grid-rows-1'>
                <h3 className='mt-4 mb-4'>Redes Sociais</h3>
                <div className='flex gap-3'>
                  <Facebook className=" text-3xl" />
                  <Instagram  className=" text-3xl"/>
                  <Linkedin className=" text-3xl" />
                  <Mail className="  text-3xl" /> 
                  </div>
             </div>
          </div> 

          <div className='md:grid-cols-1 mt-5 md:mt-0 ml-5'>
            <h1 className='text-2xl font-semibold pb-4'>Contacto</h1>
             <form method="" className='w-full flex flex-col'>
                <div className="mb-4">
                    <label htmlFor='Name' className='block mb-3 text-md text-gray-400'>Nome:</label>
                    <input type='text' placeholder='Nome'  className='w-full p-3 rounded-2xl outline-none text-gray-500'/>
                </div>

                <div className="mb-4">
                    <label htmlFor='Email' className='block mb-3 text-md text-gray-400'>E-mail:</label>
                    <input type='email' placeholder='E-mail' className='w-full p-3 rounded-2xl outline-none text-gray-500'/>
                </div>

                <div className="mb-4">
                    <label htmlFor='Telefone' className='block mb-3 text-md text-gray-400'>Telefone:</label>
                    <input type='tel' placeholder='(+258 878892051)' className='w-full p-3 rounded-2xl outline-none text-gray-500'/>
                </div>

                <input type='submit' value='Enviar' className='md:w-[120px] h-[40px] bg-main-color rounded-2xl cursor-pointer hover:bg-main-hover' />
             </form>
          </div>
        </div>
     </footer>
     <div className='p-2 flex items-center justify-center text-white h-[40px] bg-main-color'>
        <p>&copy; Todos os direitos reservados - awTech 2025</p>
    </div>
    </>
  )
}
