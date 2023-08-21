
import PerSkills from "./PerSkills";
import Progress from "./Progress";


const Skills = () =>{
    return (
        <section id="skills" className="bg-bg">
            <div className="py-20  container overflow-x-hidden">
                <div className="text-center space-y-2">
                    <div data-aos="fade-left" data-aos-duration="2000">
                        <p className=" uppercase opacity-80 text-sm">technical and professional</p>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2000" className="capitalize text-xl font-extrabold tracking-widest text-lst scale-110">my skills</div>
                </div>
                <div className="flex flex-col lg:flex-row pt-16 space-y-20 lg:space-y-0">
                    <div data-aos="zoom-out" data-aos-duration="3000" className="w-full lg:w-1/2 text-center capitalize font-extrabold text-2xl space-y-20 ">
                        <div>
                        <p className="">technical skills</p>
                        </div>
                        <div className="    w-full bg--400 mx-auto">
                            <div className="bg- w-[70%] mx-auto space-y-3">
                                <Progress skill="Next" per={72} />
                                <Progress skill="React" per={68} />
                                <Progress skill="Socket" per={80} />
                                <Progress skill="JavaScript" per={80} />
                                <Progress skill="TypeScript" per={80} />
                                <Progress skill="C" per={80} />
                                <Progress skill="C++" per={80} />
                                <Progress skill="Docker" per={50} />
                                <Progress skill="Redux Toolkit" per={72} />
                                <Progress skill="TailwindCSS" per={60} />
                                <Progress skill="Rest Apis" per={80} />
                            </div>
                        </div>
                        
                        
                    </div>
                    <div  data-aos="zoom-in" data-aos-duration="3000" className="w-full lg:w-1/2 text-center  flex flex-col items-center  capitalize font-extrabold text-2xl space-y-20 ">
                        <div>
                        <p className="">professional skillls</p>
                        </div>
                        <div className=" w-full  lg:pt-10  space-y-10 ">
                            <div className=" md:space-y-12">
                                
                            <div className="flex w-full    md:gap-10">
                                <div className="w-1/2">
                                <PerSkills text="Team Work"  per={80}/>

                                </div>
                                <div className="w-1/2">

                                 <PerSkills text="Creativity"  per={80}/>
                                </div>


                                </div> 
                                <div className="flex w-full    md:gap-10">
                                <div className="w-1/2">

                                 <PerSkills text="communication"  per={60}/>
                                </div>
                                <div className="w-1/2">

                                <PerSkills text="Project Management"  per={90}/>
                                </div>


                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                    

                </div>

                
            </div>
        </section>
    )
}

export default Skills;
