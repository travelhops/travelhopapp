import react from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import axios from 'axios';

const Login = ()=>{

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [errors, setErrors] = useState([]);

    const API_URL = process.env.API_URL;

    const navigate = useNavigate();

    const handleEmailChange = (event)=>{
        setEmail(event.target.value);
    }

    const handlePassChange = (event)=>{
        setPassword(event.target.value);
    }

    const handleLogin = (event)=>{
        event.preventDefault();

        console.log("hi");
        const data = {email: email, password: password};
        axios.post(API_URL+"/api/login", data).then(res=>{
            if(res.data.errors){
                setErrors(res.data.errors);
            }

            if(res.data.login){
               navigate('/admin/tours');
            }
        });
    }


    return (
        <main className="w-screen h-screen flex justify-center items-center">
            <div className="p-8 rounded-xl shadow-xl">
                <form className="flex flex-col [&>input]:border-[1px] [&>input]:border-gray-500 [&>input]:my-2 [&>input]:p-2 [&>input]:focus:ring-0 [&>input]:outline-none" onSubmit={handleLogin} method="POST">
                    <h2 className="text-gray-600 text-3xl py-2">Login</h2>
                    <input type="email" placeholder="Email" onChange={handleEmailChange} />
                    <input type="password" placeholder="Password" onChange={handlePassChange} />
                    <ul className="text-red-500 py-2">
                        {errors.length > 0?errors.map((error, index)=>{
                            return (<li key={index}>{error.path+" "+error.msg}</li>)
                        }):""}
                    </ul>

                    <button type="submit" className="cyan-button">Login</button>
                </form>
            </div>
        </main>
    );
}


export default Login;
