import axios from "axios";
import { ChangeEvent, useState } from "react";

const ContactForm = () =>{
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const showProblem = ({id} : {id : string}) =>{
        const getElement = document.getElementById(id);
        if (getElement){
            getElement.classList.remove('input-success')
            getElement?.classList.add('textarea-error')
            getElement.focus();
        }
    }

    const checkEmail = () =>{
        const charsToFind = ['.','@']
        const check = charsToFind.every((c) => email.includes(c));
        return ~(check) & 1 ? 0 : 1
    }
    const change = ({id} : {id : string}) =>{
        const getElement = document.getElementById(id);
        if (getElement){
            getElement?.classList.remove('textarea-error')
            getElement.classList.add('input-success')
        }

    }

    const handlName = (e : ChangeEvent<HTMLInputElement>) => {
        change({id : 'name'})
        setName(e.target.value)
    };
    const handlEmail = (e : ChangeEvent<HTMLInputElement>) => {
        change({id : 'email'})        
        setEmail(e.target.value)
    };
    const handlMessage = (e : ChangeEvent<HTMLTextAreaElement>) => {
        change({id : 'message'})
        setMessage(e.target.value);
    }
    

    const sendMessage = async () =>{
        try{
            const res = await axios.post(
                `${process.env.email}`,
                {
                  name,
                  email,
                  message
                }
              );
            if (res.status === 200){
                setName('');
                setEmail('');
                setMessage('');
            }

        }catch(error : any ){
            if (error.response.status === 422)
                showProblem({id : 'email'})
        }
    }

    const handleSubmit = () =>{
        const fieldToCheck = [
            {id : 'name', value : name},
            {id : 'email', value : checkEmail()},
            {id : 'message', value : message},
        ]
        const hasProblem = fieldToCheck.find (field => !field.value)
        if (hasProblem){
            showProblem({id : hasProblem.id})
            return ;
        }
        sendMessage();
    }
    return (
        <div className="w-full h-full lg:pl-16 space-y-4">
            <h1 className="text-lst font-extrabold text-2xl tracking-wider font-serif">Let's Talk</h1>
            <p className=" font-semibold leading-relaxed tracking-wide">Feel free to reach out to me for any inquiries, collaborations, or just to say hello. I'm always excited to connect with new people!</p>
            
           <form >
            <div className="flex flex-col gap-5 items-center lg:items-start">
           <input id="name" onChange={handlName} value={name} type="name" placeholder="Enter Your Name" className="input input-bordered input-success h-10 w-3/4 lg:w-full max-w-xs bg-slate-100 text-slate-950" />
           <input id="email" onChange={handlEmail} value={email} type="email" placeholder="Enter your Email" className="input input-bordered input-success h-10 w-3/4 lg:w-full max-w-xs bg-slate-100 text-slate-950" />
            <textarea id="message" onChange={handlMessage} value={message} className="textarea textarea-success bg-slate-100 max-w-xs text-slate-950 w-3/4 lg:w-full" placeholder="Enter Your Message "></textarea>

            </div>
           </form>
            <button onClick={handleSubmit} className="bg-lst w-3/4 lg:w-full max-w-xs py-2 rounded-md">Sent Message</button>
        </div>
    );
}
export default ContactForm;