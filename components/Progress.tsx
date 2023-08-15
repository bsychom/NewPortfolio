const Progress = ({skill, per} : {skill : string, per : number}) =>{ 
    return (
        <div className=" mx-auto -space-y-4">
            <div className="w-full flex justify-between  bg-400-300  ">
                <div className="font-bold text-2xl">{skill}</div>
                <div className="font-bold text-2xl">{per}%</div>
            </div>
            <div className="w-full h- ">
                <progress className="progress h-3 progress-success " value={per} max="100"></progress>

            </div>

        </div>
    );

}

export default Progress;