import { useState } from 'react';
import about from '../assets/animation/about.json'
import Lottie from 'lottie-react'

const About = () =>{

    const [read, setRead] = useState(false);
    return (
        <section id='about' className='bg-bg'>
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
    )
}

export default About;