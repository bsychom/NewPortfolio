const BgPer = () =>{
    const elements = [];
    for (let i = 0; i < 36; i++) {
      elements.push(
        <div className='w-7 z-0  h-2 right bg-slate-500 rounded-full absolute    translate-x-[80px]'  style={{rotate:`${i * 10}deg`}}></div>

      );
    }
    return elements;
  }
 
  const Percentage = ({color, per} : {color : string, per : number}) =>{
    const pere = (per / 100) * 36 ;
    const elements = [];
              for (let i = 0; i < pere; i++) {
                elements.push(
                  <div className='w-7 z-20  h-2 right bg-lst rounded-full absolute    translate-x-[80px]'  style={{rotate:`${i * 10}deg`}}></div>

                );
              }
    return elements;

  }

const PerSkills = ({per, text} : {per : number, text : string}) =>{
    return (
        <div className="flex flex-col justify-center space-y-3 items-center  ">
        <div className='w-52 h-52    relative flex justify-center  items-center  ' >
          <div className="text-2xl font-bold font-mono">{per}%</div>
            <BgPer/>
            <Percentage color='color' per={per}/>
        </div>
        <div className="text-xl font-extrabold tracking-widest capitalize">{text}</div>
        </div>
    )
}

export default PerSkills;