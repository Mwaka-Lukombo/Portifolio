

export const Projectos = () => {
  return (
    <div className='w-full h-auto bg-gray-black p-[20px] text-white'>
      <h2 className='text-3xl font-bold mb-[40px] uppercase'>Projectos</h2>
      
        <div className='grid grid-flow-row grid-rows-4 md:grid-cols-4 md:flex md:flex-wrap gap-3'>
           <div className="grid-rows-1 md:grid-cols-1 bg-white shadow-2xl md:w-[32%] h-[390px] rounded-2xl hover:relative hover:top-[-5px] cursor-pointer text-gray-400">
             <div className='w-full h-[50%] bg-red-500 rounded-t-2xl'>
              <img src='/img/nexus.png' alt='Imagem do nexus' className='w-[100%] h-[100%] bg-cover bg-no-repeat rounded-t-2xl' />
             </div>

             <div className='w-full h-[50%] p-3 relative'>
               <p>Nexus Piaget, Uma solução para melhorar a interação e comunicação entre estudantes e docentes, no campus de inhamzua da universidade </p>
               <div className='mx-auto'>
                 <h2 className='font-semibold'>Tecnologias usadas:</h2>
                 <div className="flex gap-3 mt-2">
                  <p>Php</p>
                  <p>Html</p>
                  <p>Css</p>
                 </div>
               </div>
               
               <div className="mx-auto w-full p-2 bg-main-color mt-2 rounded-md text-center cursor-pointer hover:bg-main-hover text-white">
                <a href="#">Visualizar Demo</a>
               </div>

             </div>
           </div>

           <div className="grid-rows-1 md:grid-cols-1 bg-white shadow-2xl md:w-[32%] h-[390px] rounded-2xl hover:relative hover:top-[-5px] cursor-pointer text-gray-400">
             <div className='w-full h-[50%] bg-red-500 rounded-t-2xl'>
              <img src='/img/emprego.png' alt='Imagem do nexus' className='w-[100%] h-[100%] bg-cover bg-no-repeat rounded-t-2xl' />
             </div>

             <div className='w-full h-[50%] p-3 relative'>
               <p>Emprego, Aqui são publicadas as melgores vagas de emprego, se você tem o interesse entre em contacto connosco  </p>
               <div className='mx-auto'>
                 <h2 className='font-semibold'>Tecnologias usadas:</h2>
                 <div className="flex gap-3 mt-2">
                  <p>Html</p>
                  <p>Css</p>
                  <p>Tailwindcss</p>
                 </div>
               </div>
               
               <div className="mx-auto w-full p-2 bg-main-color mt-2 rounded-md text-center cursor-pointer hover:bg-main-hover text-white">
                <a href="#">Visualizar Demo</a>
               </div>

             </div>
           </div>

           <div className="grid-rows-1 md:grid-cols-1 bg-white shadow-2xl md:w-[32%] h-[390px] rounded-2xl hover:relative hover:top-[-5px] cursor-pointer text-gray-400">
             <div className='w-full h-[50%] bg-red-500 rounded-t-2xl'>
              <img src='/img/awTech.png' alt='Imagem do nexus' className='w-[100%] h-[100%] bg-cover bg-no-repeat rounded-t-2xl' />
             </div>

             <div className='w-full h-[50%] p-3 relative'>
               <p>awTech Commerce, com este ecommerce voce pode fazer as suas compras online sem se quer sair de casa, apenas com o clique voce pode ter os seus produtos em casa </p>
               <div className='mx-auto'>
                 <h2 className='font-semibold'>Tecnologias usadas:</h2>
                 <div className="flex gap-3 mt-2">
                  <p>React</p>
                  <p>Node js</p>
                  <p>Express js</p>
                  <p>MongoDB</p>
                 </div>
               </div>
               
               <div className="mx-auto w-full p-2 bg-main-color mt-2 rounded-md text-center cursor-pointer hover:bg-main-hover text-white">
                <a href="#">Visualizar Demo</a>
               </div>

             </div>
           </div>

           <div className="grid-rows-1 md:grid-cols-1 bg-white shadow-2xl md:w-[32%] h-[390px] rounded-2xl hover:relative hover:top-[-5px] cursor-pointer text-gray-400">
             <div className='w-full h-[50%] bg-red-500 rounded-t-2xl'>
              <img src='/img/mae.png' alt='Imagem do nexus' className='w-[100%] h-[100%] bg-cover bg-no-repeat rounded-t-2xl' />
             </div>

             <div className='w-full h-[50%] p-3 relative'>
               <p>Mãe protegida, é uma plataforma de saúde em moçambique onde as mães podem agendar as suas consultas pré-natais </p>
               <div className='mx-auto'>
                 <h2 className='font-semibold'>Tecnologias usadas:</h2>
                 <div className="flex gap-3 mt-2">
                  <p>React</p>
                  <p>Node js</p>
                  <p>Express js</p>
                  <p>MongoDB</p>
                 </div>
               </div>
               
               <div className="mx-auto w-full p-2 bg-main-color mt-2 rounded-md text-center cursor-pointer hover:bg-main-hover text-white">
                <a href="#">Visualizar Demo</a>
               </div>

             </div>
           </div>

           
           
        </div>
    </div>
  )
}
