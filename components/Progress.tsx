const Progress = ({skill, per} : {skill : string, per : number}) =>{ 
    return (
        <div className=" mx-auto -space-y-3">
            <div className="w-full flex justify-between  bg-400-300  ">
                <div className="font-bold text-lg">{skill}</div>
                <div className="font-bold text-lg opacity-80">{per}%</div>
            </div>
            <div className="w-full h- ">
                <progress className="progress h-3 progress-success " value={per} max="100"></progress>

            </div>

        </div>
    );

}

export default Progress;