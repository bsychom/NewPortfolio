// eslint-disable-next-line
import { useState } from "react";
import {BsCodeSlash} from 'react-icons/bs'
import {MdDeveloperMode} from 'react-icons/md'
import {CgTranscript} from 'react-icons/cg'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

const Services = () =>{
    const [check, setcheck] = useState(false);
    const [service1, setService1] = useState(false);
    const [service2, setService2] = useState(false);
    const [service3, setService3] = useState(false);
    return (
        <section id="services" className=" bg-bgg overflow-hidden">
            <div className="container py-20">
                <div className="text-center m-auto mb-10 md:w-1/2 ">
                    <p className={`capitalize text-sm  text-white  ${inter.className}`} data-aos="zoom-in-right" data-aos-duration="2000">what i will do for you</p>
                 <h1 className='font-extrabold  text-3xl capitalize text-lst' data-aos="zoom-in-left" data-aos-duration="2000">our services</h1>
                        
                 

                </div>
                <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div data-aos="flip-right" data-aos-duration="2000" className={`card relative h-auto w-auto ${service2 === true || service3 === true ? 'h-fit' : ''}`}> 
                    <div className="front hover:scale-105 duration-500 px-7 py-11 rounded-2xl   border-4 border-solid bg-black  border-lst h-full w-full shadow-2xl shadow-lst">
                        <div className="space-y-6 h-[90%]">

                      <div className="w-full  flex justify-center  ">
                        <div className=" rounded-full border-4 border-bg">
                        <div className='border-4 rounded-full   outline-offset-4 bg-bg border-lst w-24 h-24 flex border-spacing-6 items-center justify-center'>
                            <BsCodeSlash className=" text-6xl   text-lst"   />
                     </div>
                        </div>
                     
                        </div>
                         <h1 className='text-xl text-center font-extrabold leading-relaxed capitalize'>software Engineer</h1>
                         <div className='space-y-4'>
                         <p className='text- text-lg leading-relaxed font-bold text-cyan-300  '>I can create powerful solutions for you using C and C++. With expertise in software engineering and a strong background in these languages, I&apos;m capable of delivering efficient and effective results. Here&apos;s what I can offer:</p>                
                         <div className={`text-lg leading-relaxed font-bold   text-cyan-300 space-y-2 ${service1 === false ? 'hidden' : 'block'}`}>
                             <p>- Proficient in C and C++ programming languages.</p>
                             <p>- Strong command of object-oriented programming (OOP) principles.</p>
                             <p>- Experienced in multithreading, concurrency, and parallel programming</p>
                             <p>- In-depth understanding of data structures and algorithms.</p>
                             <p>- Skilled in socket programming and network communication.</p>
                             <p>- Familiar with graphics rendering for game development.</p>
                             <p>- Proficient with Git version control.</p>
                             <p>- Effective debugging, troubleshooting, and problem-solving abilities.</p>
                         </div>
                         </div>
                        </div>
                        
                    

                        <div className="flex justify-center  h-[10%] items-end mt-5 ">
                            <button onClick={() => setService1(true)} className={`font-bold border-2 border-thr capitalize px-5 py-2 rounded-lg text- group relative overflow-hidden shadow-2xl shadow-thr ${service1 == true ? 'hidden' : 'block'}  `}>
                                <span className="bg-thr absolute inset-0 w-full transition-all duration-1000 group-hover:w-0"></span>
                                <span className="relative z-10 text-sm">Read More !</span>
                            </button>
                            <button onClick={() => setService1(false)} className={`font-bold border-2 border-thr capitalize px-5 py-2 rounded-lg text- group relative overflow-hidden shadow-2xl shadow-thr ${service1 == false ? 'hidden' : 'block'}  `}>
                                <span className='absolute inset-0 bg-thr w-0 transition-all duration-1000 group-hover:w-full group-hover:text-black'></span>
                                <span className='relative z-10 text-sm'>Read Less !</span>
                            </button>
                        </div>
                    </div>
                    
                    </div>
                        
                    <div data-aos="flip-down" data-aos-duration="2000" className={`card relative h-auto w-auto ${service1 === true || service3 === true ? 'h-fit' : ''}`}>

                        <div className="front hover:scale-105 duration-500 px-7  py-11 rounded-2xl bg-black  border-4 border-solid border-lst h-full w-full shadow-2xl shadow-lst">
                        
                      <div className="space-y-6 h-[90%]"> 
                      <div className="w-full  flex justify-center  ">
                        <div className=" rounded-full border-4 border-bg">
                        <div className='border-4 rounded-full   outline-offset-4 bg-bg border-lst w-24 h-24 flex border-spacing-6 items-center justify-center'>
                            <MdDeveloperMode className=" text-6xl   text-lst"   />
                     </div>
                        </div>
                     
                        </div>
                     <h1 className='text-xl text-center font-extrabold leading-relaxed capitalize'>Front-end</h1>
                     <div className='space-y-4'>
                         <div >
                         <p className=' text-lg leading-relaxed  font-bold text-cyan-300 '>My expertise lies in crafting dynamic and responsive web experiences using the power of Next.js and React.js. As a front-end developer, I&apos;m committed to producing captivating user interfaces and frictionless interactions .  
                                 <span className={`${service2 === true ? '' : 'hidden'}`}>Moreover, I&apos;m well-versed in harnessing REST APIs to infuse web applications with data-driven capabilities. Here&apos;s my value proposition : </span>
                                
                                 </p>
                         </div>
                         <div className={`text-lg leading-relaxed font-bold   text-cyan-300 space-y-2 ${service2 === true ? 'block' : 'hidden'}`}>
                         <p>- Proficient in leveraging Next.js and React.js to build sophisticated web applications.</p>
                                 <p>- Adept at wielding front-end technologies including HTML, CSS, and JavaScript.</p>
                                 <p>- Familiarity with advanced state management techniques using React hooks and Redux Toolkit.</p>
                                 <p>- Accomplished in seamlessly integrating REST APIs to fuel dynamic content.</p>
                                 <p>- Expertise in responsive design and prioritizing mobile-first development.</p>
                                 <p>- Well-versed in version control using Git, ensuring collaborative success.</p>
                                 <p>- Equipped with effective debugging and troubleshooting prowess.</p>
                         </div>
                     </div>
                      </div>
                     
                         
                        <div className="flex justify-center items-end h-[10%] mt-5">
                        <button onClick={() => setService2(true)} className={`font-bold  border-2 border-thr capitalize px-5 py-2 rounded-lg text- group relative overflow-hidden shadow-2xl shadow-thr ${service2 == true ? 'hidden' : 'block'}  `}>
                             <span className="bg-thr absolute inset-0 w-full transition-all duration-1000 group-hover:w-0"></span>
                             <span className="relative z-10 text-sm">Read More !</span>
                         </button>
                         <button onClick={() => setService2(false)} className={`font-bold border-2 border-thr capitalize px-5 py-2 rounded-lg text- group relative overflow-hidden shadow-2xl shadow-thr ${service2 == false ? 'hidden' : 'block'}  `}>
                             <span className='absolute inset-0 bg-thr w-0 transition-all duration-1000 group-hover:w-full group-hover:text-black'></span>
                             <span className='text-sm relative z-10'>Read Less !</span>
                         </button>
                        </div>            
                         

                        </div>
                       
                        
                        
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className={`card relative h-auto w-auto ${service1 === true || service2 === true ? 'h-fit' : ''}`}>

                        <div className="front hover:scale-105 duration-500 px-7  py-11 rounded-2xl bg-black  border-4 border-solid border-lst h-full w-full shadow-2xl shadow-lst">
                        
                      <div className="space-y-6 h-[90%]"> 
                      <div className="w-full  flex justify-center  ">
                        <div className=" rounded-full border-4 border-bg">
                        <div className='border-4 rounded-full   outline-offset-4 bg-bg border-lst w-24 h-24 flex border-spacing-6 items-center justify-center'>
                            <CgTranscript className=" text-6xl   text-lst"   />
                     </div>
                        </div>
                     
                        </div>
                     <h1 className='text-xl text-center font-extrabold leading-relaxed capitalize'>Bonus</h1>
                     <div className='space-y-4'>
                         <div >
                             <p className=' text-lg leading-relaxed font-bold text-cyan-300  '>
                             I have a proven ability to adapt and learn quickly, allowing me to tackle diverse challenges and projects across various domains. With my background in software engineering and proficiency in programming, I can confidently 
                             <span className={`${service3 === true ? '' : 'hidden'}`}> approach any project , regardless of its complexity. Here&apos;s what sets me apart:</span>
                             </p> 
                         </div>
                         <div className={`text-lg leading-relaxed font-bold   text-cyan-300 space-y-2 ${service3 === true ? 'block' : 'hidden'}`}>
                             <p>- Rapid learner with a passion for exploring new technologies and tools.</p>
                             <p>- Proven track record of quickly mastering new programming languages and concepts.</p>
                             <p>- Enthusiastic about applying acquired knowledge to practical projects.</p>
                             <p>- Open to taking on challenges outside of my comfort zone.</p>
                             <p>- Committed to continuous improvement and staying up-to-date with industry trends.</p>
                         </div>
                     </div>
                      </div>
                     
                         
                        <div className="flex justify-center items-end h-[10%] mt-5">
                            <button onClick={() => setService3(true)} className={`font-bold border-2 border-thr capitalize px-5 py-2 rounded-lg text- group relative overflow-hidden shadow-2xl shadow-thr ${service3 == true ? 'hidden' : 'block'}  `}>
                                <span className="bg-thr absolute inset-0 w-full transition-all duration-1000 group-hover:w-0"></span>
                                <span className="relative z-10 text-sm">Read More !</span>
                            </button>
                            <button onClick={() => setService3(false)} className={`font-bold border-2 border-thr capitalize px-5 py-2 rounded-lg text- group relative overflow-hidden shadow-2xl shadow-thr ${service3 == false ? 'hidden' : 'block'}  `}>
                                <span className='absolute inset-0 bg-thr w-0 transition-all duration-1000 group-hover:w-full group-hover:text-black'></span>
                                <span className='relative z-10 text-sm'>Read Less !</span>
                            </button>
                        </div>            
                         

                        </div>
                       
                        
                        
                    </div>
                </div>

            </div>
        </section>
    );
}
export default Services;