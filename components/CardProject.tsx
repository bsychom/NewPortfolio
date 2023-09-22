import Link from "next/link";
import {FaUpRightFromSquare} from 'react-icons/fa6'


const CardProjects = () =>{
    return (
        <div  className='grid w-full   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10  gap-10'>
            <div data-aos="zoom-in-left" data-aos-duration="2000" className=' max-w-max mx-auto h-[250px] sm:h-[270px] lg:h-[270px] xl:h-[250px]  bg-lst  border-4 border-lst relative group  rounded-xl cursor-pointer overflow-hidden'>
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
            <div data-aos="zoom-in" data-aos-duration="2000"  className=' max-w-max mx-auto h-[250px] sm:h-[270px] lg:h-[270px] xl:h-[250px]  bg-lst  border-4 border-lst relative group  rounded-xl cursor-pointer overflow-hidden'>
                    <img className=' bg-cover  group-hover:scale-125  transition-all z-20 duration-500 group-hover:ease-in   w-full h-full ' src="/images/financial.jpeg" alt="" />

                    <div className='w-full -translate-y-96 opacity-0  h-full top-0 left-0 absolute z-30 group-hover:opacity-80 transition-all duration-1000 shadow-2xl shadow-lst  group-hover:translate-y-0'>
                        <div className='relative w-full h-full'>
                        <img className='w-full h-full ' src="/images/bg.svg" alt="" />
                        <div className='  absolute top-0 py-1 left-0 w-full h-auto'>
                            <div className='px-2 text-center h-full  '>
                            <h1 className='text-center text-white text- font-bold  underline font-serif decoration-lst underline-offset-4 decoration-4'>Financial App</h1>
                            <p className='text-start text-white pl-2 italic      pt-3'>
                            This project is a sleek and user-friendly financial app built entirely on the front end. Leveraging the power of Next.js 13, Tailwind CSS, TypeScript, and DeasyUI, this app delivers a seamless financial management experience                                </p>
                               <div className='  flex justify-center  pt-3'>
                                <Link target='_black' href="https://financial-gray.vercel.app/" className='w-10 h-10  bg-slate-100 rounded-full flex items-center group justify-center hover:text-white hover:bg-lst transition-all duration-200 ease-in text-slate-800 text-xl '>
                                    <FaUpRightFromSquare className="   "/>
                                    </Link> 
                               </div>
                            </div>
                        </div>

                        </div>
                    </div>
            </div>
            <div data-aos="zoom-in-right" data-aos-duration="2000"  className=' max-w-max mx-auto h-[250px] sm:h-[270px] lg:h-[270px] xl:h-[250px]  bg-lst  border-4 border-lst relative group  rounded-xl cursor-pointer overflow-hidden'>
                    <img className=' bg-cover  group-hover:scale-125  transition-all z-20 duration-500 group-hover:ease-in   w-full h-full ' src="/images/crud.png" alt="" />

                    <div className='w-full -translate-y-96 opacity-0  h-full top-0 left-0 absolute z-30 group-hover:opacity-80 transition-all duration-1000 shadow-2xl shadow-lst  group-hover:translate-y-0'>
                        <div className='relative w-full h-full'>
                        <img className='w-full h-full ' src="/images/bg.svg" alt="" />
                        <div className='  absolute top-0 py-1 left-0 w-full h-auto'>
                            <div className='px-2 text-center h-full  '>
                            <h1 className='text-center text-white text- font-bold  underline font-serif decoration-lst underline-offset-4 decoration-4'>Product Management System</h1>
                            <p className='text-start text-white pl-2 italic      pt-3'>
                            Developed a dynamic CRUD and static search application using HTML, CSS, and JavaScript. Efficiently managed product data using client-side storage., User-friendly interface for seamless product management and quick searches, enhancing user experience.                              </p>
                               <div className='  flex justify-center  pt-3'>
                                <Link target='_black' href="https://cruds0.netlify.app/" className='w-10 h-10  bg-slate-100 rounded-full flex items-center group justify-center hover:text-white hover:bg-lst transition-all duration-200 ease-in text-slate-800 text-xl '>
                                    <FaUpRightFromSquare className="   "/>
                                    </Link> 
                               </div>
                            </div>
                        </div>

                        </div>
                    </div>
            </div>
            <div data-aos="zoom-in-left" data-aos-duration="2000"  className=' max-w-max mx-auto h-[250px] sm:h-[270px] lg:h-[270px] xl:h-[250px]  bg-lst  border-4 border-lst relative group  rounded-xl cursor-pointer overflow-hidden'>
                    <img className=' bg-cover  group-hover:scale-125  transition-all z-20 duration-500 group-hover:ease-in   w-full h-full ' src="/images/inception.png" alt="" />

                    <div className='w-full -translate-y-96 opacity-0  h-full top-0 left-0 absolute z-30 group-hover:opacity-80 transition-all duration-1000 shadow-2xl shadow-lst  group-hover:translate-y-0'>
                        <div className='relative w-full h-full'>
                        <img className='w-full h-full ' src="/images/bg.svg" alt="" />
                        <div className='  absolute top-0 py-1 left-0 w-full h-auto'>
                            <div className='px-2 text-center h-full  '>
                            <h1 className='text-center text-white text- font-bold  underline font-serif decoration-lst underline-offset-4 decoration-4'>Inception</h1>
                            <p className='text-start text-white pl-2 italic      pt-3'>This project from 42 school focuses on expanding your system administration knowledge through Docker. You&apos;ll create and manage Docker images in a personal virtual machine,</p>   
                             <div className='  flex justify-center  pt-3'>
                                <Link target='_black' href="https://github.com/mhaddaou/inception-42" className='w-10 h-10  bg-slate-100 rounded-full flex items-center group justify-center hover:text-white hover:bg-lst transition-all duration-200 ease-in text-slate-800 text-xl '>
                                    <FaUpRightFromSquare className="   "/>
                                    </Link> 
                               </div>
                            </div>
                        </div>

                        </div>
                    </div>
            </div>
             <div data-aos="zoom-in" data-aos-duration="2000"  className=' max-w-max mx-auto h-[250px] sm:h-[270px] lg:h-[270px] xl:h-[250px]  bg-lst  border-4 border-lst relative group  rounded-xl cursor-pointer overflow-hidden'>
                    <img className=' bg-cover  group-hover:scale-125  transition-all z-20 duration-500 group-hover:ease-in   w-full h-full ' src="/images/transcendence.png" alt="" />

                    <div className='w-full -translate-y-96 opacity-0  h-full top-0 left-0 absolute z-30 group-hover:opacity-80 transition-all duration-1000 shadow-2xl shadow-lst  group-hover:translate-y-0'>
                        <div className='relative w-full h-full'>
                        <img className='w-full h-full ' src="/images/bg.svg" alt="" />
                        <div className='  absolute top-0 py-1 left-0 w-full h-auto'>
                            <div className='px-2 text-center h-full  '>
                            <h1 className='text-center text-white text- font-bold  underline font-serif decoration-lst underline-offset-4 decoration-4'>Ft_transcendence</h1>
                            <p className='text-start text-white pl-2 italic      pt-3'>This project consists of creating a website for the mighty Pong contest including the user accounts, chatting in channels and playing the game pong features.</p>   
                             <div className='  flex justify-center  pt-3'>
                                <Link target='_black' href="https://github.com/mhaddaou/ft_transcendence" className='w-10 h-10  bg-slate-100 rounded-full flex items-center group justify-center hover:text-white hover:bg-lst transition-all duration-200 ease-in text-slate-800 text-xl '>
                                    <FaUpRightFromSquare className="   "/>
                                    </Link> 
                               </div>
                            </div>
                        </div>

                        </div>
                    </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="2000"  className=' max-w-max mx-auto h-[250px] sm:h-[270px] lg:h-[270px] xl:h-[250px]  bg-lst  border-4 border-lst relative group  rounded-xl cursor-pointer overflow-hidden'>
                    <img className=' bg-cover  group-hover:scale-125  transition-all z-20 duration-500 group-hover:ease-in   w-full h-full ' src="/images/mern.png" alt="" />

                    <div className='w-full -translate-y-96 opacity-0  h-full top-0 left-0 absolute z-30 group-hover:opacity-80 transition-all duration-1000 shadow-2xl shadow-lst  group-hover:translate-y-0'>
                        <div className='relative w-full h-full'>
                        <img className='w-full h-full ' src="/images/bg.svg" alt="" />
                        <div className='  absolute top-0 py-1 left-0 w-full h-auto'>
                            <div className='px-2 text-center h-full  '>
                            <h1 className='text-center text-white text- font-bold  underline font-serif decoration-lst underline-offset-4 decoration-4'>Mern App</h1>
                            <p className='text-start text-white pl-2 italic      pt-3'>A React-Vite app with TS for account management. Express, MongoDB, and TypeScript power backend, enabling account creation, login, and user display.</p>   
                             <div className='  flex justify-center  pt-3'>
                                <Link target='_black' href="https://mern-app-x2sp.vercel.app/" className='w-10 h-10  bg-slate-100 rounded-full flex items-center group justify-center hover:text-white hover:bg-lst transition-all duration-200 ease-in text-slate-800 text-xl '>
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