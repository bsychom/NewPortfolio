import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import {RxHamburgerMenu} from 'react-icons/rx'
import { useState } from 'react'
import MessageWriter from '@/componennts/MessageWriter'
import mhaddaou from '../assets/img/P7050744-removebg-preview.png'
import Lottie from 'lottie-react'
import hello from '../assets/anim/hello.json'
import {FaFacebookF } from 'react-icons/fa'
import {TfiLinkedin} from 'react-icons/tfi'
import {FaGithub} from'react-icons/fa'
import {LiaHackerrank} from 'react-icons/lia'
import about from '../assets/anim/about.json' 
import {MdDeveloperMode} from 'react-icons/md'
import {BsCodeSlash} from 'react-icons/bs'
import {CgTranscript} from 'react-icons/cg'
import Skills from '@/componennts/Skills'

import {GrTwitter} from 'react-icons/gr'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [read, setRead] = useState(false);
    const [service1, setService1] = useState(false)
    const [service2, setService2] = useState(false)
    const [service3, setService3] = useState(false)
   


  return (
  <main className='bg-bg mx-w-screen overflow-x-hidden'>
    <header className=''>
    <nav className=" container mx-auto flex justify-between items-center " >
            <div data-aos="fade-right" data-aos-duration="1000" className="w-20 py-5 text-color-secondary font-extrabold  text-3xl z-20  ">
                <Link href="/"><span className="text-lst">M</span>haddaou.</Link>
            </div>
            <div >
                <ul className="hidden lg:flex items-center space-x-6 font-bold ">
                    <li data-aos="fade-up" data-aos-duration="500"> <Link href="home" className="links shadow-2xl">  Home </Link></li>
                    <li data-aos="fade-up" data-aos-duration="1000"> <Link href="#" className="links shadow-2xl">  About </Link></li>
                    <li data-aos="fade-up" data-aos-duration="1500"> <Link href="#" className="links shadow-2xl">  Services </Link></li>
                    <li data-aos="fade-up" data-aos-duration="2000"> <Link href="#" className="links shadow-2xl transition-transform">  Skills </Link></li>
                    <li data-aos="fade-up" data-aos-duration="2500"> <Link href="#" className="links shadow-2xl">  Contact </Link></li>
                    <li data-aos="fade-up" data-aos-duration="3000"> <Link href="#" className="links shadow-2xl">  Dark </Link></li>
                </ul>
            </div>
            <div className="dropdown lg:hidden pr-2  dropdown-left cursor-pointer">    
                <RxHamburgerMenu className="text-lst text-xl " tabIndex={0}/>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 font-bold  mr-4 rounded-box w-52 bg-thr text-white shadow-md shadow-lst ">
                 <li> <Link href="home"    className="links hover:text-black">  Home </Link></li>
                    <li> <Link href="#" className="links hover:text-black">  About </Link></li>
                    <li> <Link href="#" className="links hover:text-black">  Services </Link></li>
                    <li> <Link href="#" className="links hover:text-black">  Skills </Link></li>
                    <li> <Link href="#" className="links hover:text-black">  Contact </Link></li>
                    <li> <Link href="#" className="links hover:text-black">  Dark </Link></li>
                
                </ul>
            </div>
           

        </nav>
    </header>
    <section id='home'>
        <div className='container pt-5 pb-20 flex flex-col md:flex-row text-green-400 items-center '>
            <div className='md:w-1/2 w-full h-full border-l-4 border-b-4 rounded-s-xl pl-10 tracking-widest pt-10 pb-5 mt-0 md:mt-16 relative' >
                <div className=' w-60 h-60 bg-thr absolute -top-28 -left-28 rounded-full blur-2xl z-0'></div>
                <div className='space-y-8  z-20' data-aos="fade-right" data-aos-duration="2000">
                    <div className=''>
                        <h1 className='text-3xl font-extrabold capitalize font-mono leading-relaxed text-white '>Hi there, </h1>
                        <p className='text-2xl font-extrabold capitalize leading-relaxed text-white  '>I'm mohamed haddaoui </p>
                        <p className='text-2xl font-extrabold capitalize leading-relaxed text-white'>And I'm</p>
                        <MessageWriter />
                    </div>
                    <div className='flex flex-col xl:flex-row  gap-6 text-white'>
                        <div className='w-1/2 flex flex-col gap-2'>
                            <div>
                            <p className='text-lg font-bold '>Email:</p>
                            </div>
                            <div>
                                <p className=' text-lg '>mhaddaou@student.1337.ma</p>
                            </div>

                        </div>
                        <div className='w-1/2 flex flex-col gap-2'>
                            <div>
                            <p className='text-lg font-bold '>Github:</p>
                            </div>
                            <div className=''>
                                <Link className='text-lg border-b-2  hover:border-none pb-1 hover:text-lst transition  scale-100 duration-300 ease-in' target='_blank' href="https://github.com/mhaddaou">github.com/mhaddaou</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex gap-6 pb-14'>
                        <div className='relative text-white font-bold text-lg'>
                        <button className='border-4 border-lst py-2 px-5 rounded-md group relative overflow-hidden shadow-2xl shadow-thr'>
                            <span className="bg-lst absolute inset-0 w-full transition-all duration-1000 group-hover:w-0"></span>
                            <span className="relative z-10">Download CV</span>
                        </button>
                        </div>
                        <div className='relative text-lg font-bold text-white'>
                        <button className='py-2 px-5 rounded-md group relative border-4 border-lst inline-block overflow-hidden shadow-2xl shadow-thr'>
                            <span className='absolute inset-0 bg-lst w-0 transition-all duration-1000 group-hover:w-full group-hover:text-black'></span>
                            <span className='relative z-10'>Hire Me Now!</span>
                        </button>
                        </div>
                    </div>
                    <div className='text-white flex gap-6'>
                        
                        <Link target='_blank' href="https://www.linkedin.com/in/mohamed-haddaoui-26b28423a/" className="group relative inline-block rounded-md">
                            <div className="absolute inset-0 bg-lst w-0 transition-all rounded-md duration-700 group-hover:w-full h-"></div>
                            <TfiLinkedin className="border-2 w-10 h-10 p-1 rounded-md border-lst  hover:border-white transition-all duration-1000 ease-in-out shadow-xl shadow-lst relative z-10" />
                        </Link>
                        <Link target='_blank' href="https://github.com/mhaddaou" className="group relative inline-block">
                            <div className="absolute inset-0 bg-lst w-0 transition-all rounded-md duration-700 group-hover:w-full h-10"></div>
                            <FaGithub className="border-2 w-10 h-10 p-1 rounded-md border-lst hover:border-white transition-all duration-1000 ease-in-out shadow-xl shadow-lst relative z-10" />
                        </Link>
                        
                        <Link target='_blank' href="https://www.hackerrank.com/medo19981602" className="group relative inline-block">
                            <div className="absolute inset-0 bg-lst w-0 transition-all rounded-md duration-700 group-hover:w-full h-10"></div>
                            <LiaHackerrank className="border-2 w-10 h-10 p-1 rounded-md border-lst hover:border-white transition-all duration-1000 ease-in-out shadow-xl shadow-lst relative z-10" />
                        </Link>
                        <Link target='_blank' href="https://www.facebook.com/mohamed.haddaoui.528/" className="group relative inline-block">
                            <div className="absolute inset-0 bg-lst w-0 transition-all rounded-md duration-700 group-hover:w-full h-10"></div>
                            <FaFacebookF className="border-2 w-10 h-10 p-1 rounded-md border-lst hover:border-white transition-all duration-1000 ease-in-out shadow-xl shadow-lst relative z-10" />
                        </Link>
                        <Link target='_blank' href="https://twitter.com/mhaddaou" className="group relative inline-block">
                            <div className="absolute inset-0 bg-lst w-0 transition-all rounded-md duration-700 group-hover:w-full h-10"></div>
                            <GrTwitter className="border-2 w-10 h-10 p-1 rounded-md border-lst hover:border-white transition-all duration-1000 ease-in-out shadow-xl shadow-lst relative z-10" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='md:w-1/2 h-full flex justify-center' data-aos="fade-left" data-aos-duration="2000" >
                <Image className=' ' src={mhaddaou} alt='img' />

            </div>
        </div>
        
       
    

    </section>
    <section id='about ' className=''>
        <div className='container py-20 pb-44 flex flex-col-reverse md:flex-row gap-2 items-center'>
            <div className='md:w-1/2 ' data-aos="fade-up" data-aos-duration="2000" >
            <Lottie className='p-20' animationData={about} />
            </div>
            <div className=' md:w-1/2 relative' data-aos="fade-down" data-aos-duration="2000">
            <div className=' w-24 h-24 bg-thr absolute bottom-0 -right-12 rounded-full blur-2xl z-0'></div>

                {/* <div className='w-20 h-20 bg-white absolute bottom-0 -right-12 z-10  blur-2xl rounded-full  '></div> */}
                <div className='space-y-4 leading-relaxed z-30'>
                <p className='capitalize font-light text-xl '>let me introduce myself</p>
                <h1 className='capitalize text-2xl font-extrabold text-lst'>about me</h1>
                <h2 className='text-xl font-bold text-thr'> A story of good</h2>
                <p className='text-lg leading-relaxed'>I am a dedicated Software Engineer and Frontend Developer, currently pursuing my education at 1337 School. With a foundation in C, C++, JavaScript, Rest APIs, and TypeScript, I possess a diverse skill set. My expertise ranges from crafting engaging web experiences using React, Next.js, and JavaScript to constructing robust applications. Employing TypeScript for front-end development and complementing it with the aesthetics of Tailwind CSS <span className={` tracking-widest ${read == true ? 'hidden' : 'inline-block'}`}> . . .</span></p>
                <p className={` text-lg z-50 leading-relaxed ${read === false ? 'hidden': 'block'}`}>I strive to create stylish and functional designs. In addition, I proficiently manage state using Redux Toolkit, ensuring efficient data flow within my applications.

Being equipped with strong problem-solving abilities and a solid understanding of software development methodologies, I thrive in collaborative environments. As a student at 1337 School, I am continuously enhancing my skills and knowledge. This journey fuels my determination to embark on a rewarding career in the software engineering field. With my proficiency in programming languages, tools, and technologies, I am well-positioned to make meaningful contributions to innovation and projects within the realm of software development.</p>
                <button onClick={() => setRead(false)} className={`font-bold border-2 border-thr capitalize px-5 py-2 rounded-lg text- group relative overflow-hidden shadow-2xl shadow-thr ${read == false ? 'hidden' : 'block'}  `}>
                            <span className='absolute inset-0 bg-thr w-0 transition-all duration-1000 group-hover:w-full group-hover:text-black'></span>
                            <span className='relative z-10'>Read Less !</span>
                        </button>
                <button onClick={() => setRead(true)} className={`font-bold border-2 border-thr capitalize px-5 py-2 rounded-lg text- group relative overflow-hidden shadow-2xl shadow-thr ${read == true ? 'hidden' : 'block'}  `}>
                            <span className="bg-thr absolute inset-0 w-full transition-all duration-1000 group-hover:w-0"></span>
                            <span className="relative z-10">Read More !</span>
                        </button>
                </div>
                
            </div>
        </div>
    </section>

    

  </main>
  )
}


  