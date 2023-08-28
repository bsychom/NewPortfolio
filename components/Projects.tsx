import React from 'react'
import Image from 'next/image'
import med from '../assets/image/about.jpg'
import Link from 'next/link'
import CardProjects from './CardProject'
function Projects() {
  return (
    <section id='projects'  className="bg-bgg overflow-hidden pb-20">
        <div className='container   pt-20   text-green-400 items-center '>
            <div className='w-1/2 mx-auto text-center'>
                <h1 data-aos="flip-left" data-aos-duration="2000" className='text-3xl  leading-relaxed tracking-wide font-extrabold '>Latest Project</h1>
            </div >
              <CardProjects/>
            
            
               
                

              
               
                
             

        </div>
              

    </section>
  )
}

export default Projects
// -translate-y-96 opacity-0 