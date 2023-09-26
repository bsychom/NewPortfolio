import React, { ChangeEvent, useEffect, useState } from 'react'
import { KeyboardEvent } from 'react';

function consol() {
  const [value, setValue] = useState('');

  useEffect(() =>{
    const inp = document.getElementById('inp');
    if (inp){
      inp.focus();
    }
  })


  const clearTerminal = (out : HTMLElement | null) =>{


    if (out){
      out.innerHTML = '';
      setValue('');
    }

  }

  const add_item = (out : HTMLElement | null) =>{
    if (out){
      const box = document.createElement("div");
      
      out.innerHTML += `
             <div className="text-red-300"> ${value}</div>

      `
    }
    setValue('');
  }

const checkoutput = () =>{
  const out = document.getElementById('output');
  switch(value){
    case 'clear':
      clearTerminal(out);
      break;
    default:
      add_item(out);
  }
}

  const clickc = (e : KeyboardEvent<HTMLDivElement>) =>{
    const out = document.getElementById('output');

    if (e.key === 'Enter' && out){
      e.preventDefault();
     
      checkoutput()
     
    }

   

  }

  const handl = (e : ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  return (
    <div className='bg-black text-white' onClick={() =>{
      const inp = document.getElementById('inp');
      inp?.focus();
    }}>
        <div onKeyDown={clickc} className='w-screen h-screen container'>
          <div className='w-full relative ' id='output'></div>

            <div className='pt-4'>
              <div className='relative w-full h-full bg-red-400'>
                <div className=' absolute w-full  rounded h-8 md:h-10 border border-cyan-500'>
                  <div className='absolute -top-[11px] right-6 bg-black text-slate-400 font-serif font-semibold text-sm '>( <span className='text-slate-200'>@</span> <span className=' text-cyan-400 '>mhaddaou </span> )</div>
                </div>
                <div className='absolute w-[80%] -bottom-[41px] md:-bottom-[50px] left-4 px-2  z-20 bg-black'>
                  <input id='inp' onChange={handl} value={value} className='w-full outline-none text-sm md:text-base   bg-transparent text-white' type="text" />
                </div>
              </div>

            </div>

        </div>
    </div>
  )
}

export default consol