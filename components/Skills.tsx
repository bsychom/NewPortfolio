const Skills = () =>{
    return (
        <section id="skills" className="bg-bg">
            <div className="py-20 container">
                <div className="text-center space-y-4">
                    <div>
                        <p className=" uppercase">technical and professional</p>
                    </div>
                    <div className="capitalize">my skills</div>
                </div>
                <div className="flex flex-col md:flex-row pt-16">
                    <div className="w-full md:w-1/2 text-center capitalize font-extrabold text-3xl">
                        <p>technical skills</p>
                    </div>
                    <div className="w-full md:w-1/2 text-center capitalize font-extrabold text-3xl">professional skillls</div>

                </div>
                <div className="flex justify-center items-center gap-11">
                        <div className="radial-progress text-lst p-6 mt-10 "  style={{"--value":70}}>70%</div>
                <p className="text-center text-4xl font-extrabold capitalize "><span className="border-b-4 rounded-3xl border-lst px-2">this Porfolio is not yet</span></p>

                </div>
            </div>
        </section>
    )
}

export default Skills;