import Link from "next/link";
import {FaUpRightFromSquare} from 'react-icons/fa6'


const CardProjects = () =>{
    return (
        <div className='grid w-full  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10  gap-10'>
            <div className=' max-w-max mx-auto h-[250px] lg:h-[270px] xl:h-[250px]  bg-lst  border-4 border-lst relative group  rounded-xl cursor-pointer overflow-hidden'>
                    <img className=' bg-cover  group-hover:scale-125  transition-all z-20 duration-500 group-hover:ease-in   w-full h-full ' src="/images/irc.jpeg" alt="" />

                    <div className='w-full -translate-y-96 opacity-0  h-full top-0 left-0 absolute z-30 group-hover:opacity-80 transition-all duration-1000 shadow-2xl shadow-lst  group-hover:translate-y-0'>
                        <div className='relative w-full h-full'>
                        <img className='w-full h-full ' src="/images/bg.svg" alt="" />
                        <div className='  absolute top-0 py-1 left-0 w-full h-auto'>
                            <div className='px-2 text-center h-full  '>
                            <h1 className='text-center text-white text- font-bold  underline font-serif decoration-lst underline-offset-4 decoration-4'>IRC</h1>
                            <p className='text-start text-white pl-2 italic      pt-3'>This project is about creating your own  IRC server, Developed in C++ it delivers real-time and customizable text-based interactions through multiple channels, private messaging, and many IRC command support.</p>
                               <div className='  flex justify-center  pt-3'>
                                <Link target='_black' href="https://github.com/mhaddaou/ft_irc-" className='w-10 h-10  bg-slate-100 rounded-full flex items-center group justify-center hover:text-white hover:bg-lst transition-all duration-200 ease-in text-slate-800 text-xl '>
                                    <FaUpRightFromSquare className="   "/>
                                    </Link> 
                               </div>
                            </div>
                        </div>

                        </div>
                    </div>
            </div>
           
        </div>
    );
}

export default CardProjects;