import axios from 'axios'
import React from 'react'
import ContactForm from './ContactForm'

function Contact() {
  
  return (
    <section id='contact' className='bg-bg '>
        <div className='container py-16'>
          <div className='text-center text-2xl  leading-relaxed tracking-wide font-extrabold text-lst pb-8 font-serif'>Contact Me</div>
        <div className=' flex flex-col-reverse lg:flex-row border px-8 rounded-md sm:px-5 mx-5 sm:mx-0  py-10 lg:py-16 gap-16 lg:gap-0 shadow-2xl shadow-lst border-bg'>
          <div className='w-full lg:w-1/2 text-center lg:text-start  '>
            <ContactForm/>
          </div>
          <div className='w-full lg:w-1/2 flex justify-center'>
            <img className=' w-[70%]' src="/images/contact.svg" alt="" />
          </div>
        </div>

        

        </div>
    </section>
)
}

export default Contact  