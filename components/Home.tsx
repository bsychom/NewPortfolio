import Image from "next/image"
import Link from "next/link"
import MessageWriter from "./MessageWriter"
import {TfiLinkedin} from 'react-icons/tfi'
import {FaGithub} from'react-icons/fa'
import {LiaHackerrank} from'react-icons/lia'
import {FaFacebookF} from'react-icons/fa'
import {GrTwitter} from'react-icons/gr'
import mhaddaou from '../assets/image/P7050744-removebg-preview.png'

const Home = () =>{
    return (
        <section  className="bg-bg">
        <div className='container  pt-20 pb-20 flex flex-col md:flex-row text-green-400 items-center '>
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
                            <a href="pdfs/Mohammed_Haddaoui_CV_Software_Engineer.pdf" download="resume.pdf" className="relative z-10">Download CV</a>
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
    )
}

export default Home;