//imagens

export const Home = () => {
  return (
    <div className='max-w-full md:min-h-[700px] md:h-auto bg-black-main text-white font-bold'>
       <div className='max-w-[1300px] mx-auto pt-[60px]'>
         <div className='grid md:grid-cols-2 pt-[100px]'>
            <div className='order-2 text-center md:text-left md:order-1 md:grid-cols-1'>
                <div className='md:max-w-[600px]  md:pt-[100px]'>
                <p className="text-gray-400 leading-10">Ola, seja bem vindo (a)</p>
                <h2 className="text-5xl font-bold mb-[20px]">Eu sou <span className="text-main-color font-bold">Alphonse Mwaka Lukombo</span></h2>
                <p className="p-4 md:text-justify font-light font-sans md:text-md md:tracking-wider md:font-semibold text-gray-400 mb-[30px]">Eu crio Aplicações Webs, Sistemas de Gestão, Estrategias de Marketing usando tecnologias de ponta tais como Reactjs, Nodejs, MongoDB, Nextjs.
                  abaixo você pode se inscrever para receber emails sobre desenvolvimento web!</p>
                <form method="#" className="md:max-w-full px-5 flex flex-col md:flex-row gap-3 mb-10 md:mb-0">
                   <input type='text' placeholder='Email' className="md:w-[60%] p-3 outline-none rounded-xl text-black-main tracking-tighter" />
                   <input type='submit' name='Enviar' className="md:w-[30%] p-3 flex items-center justify-center bg-main-color rounded-xl cursor-pointer hover:bg-main-hover" />
                </form>
                </div>
            </div>

            <div className='order-1 mx-auto border-8 border-main-color rounded-full md:border-none md:order-2 md:grid-cols-1 md:pt-[100px]'>
                <img src='/img/banner_02.jpg' alt='banner_02' className="md:hidden w-[250px] h-[250px] rounded-full md:rounded-none o md:w-[500px] md:h-[500px]" />
                <img src='/img/banner_03.PNG' alt='banner_02' className="hidden md:block w-[300px] h-[300px] rounded-full md:rounded-none o md:w-[500px] md:h-[500px]" />
            </div>
         </div>
       </div>
    </div>
  )
}
