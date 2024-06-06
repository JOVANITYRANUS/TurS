import React, { useEffect, useState } from "react";
import Config from "../Config";
import { useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser";

const Register = () => {
    const styles = {
        pageHome: {
            textAlign: "center",
            padding: "50px",
            height: "90vh" 
        },
    }

    const { getToken } = AuthUser();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        if(getToken()){
            navigate("/")
        }
    },[])

    const submitRegistro = async(e) =>{
        e.preventDefault();

        Config.getRegister({name,email,password})
        .then(({data})=>{
            if(data.sucess){
                navigate("/login")
            }
        })
    }


    return(
       <div className='container'>
            <div className="row justify-content-center">
                <div className="col-sm-4">
                    <div className="card mt-5 mb-5">
                        <div className="card-body">
                            <h1 className='text-center fw-bolder'>REGISTRO</h1>
                            <input type="text" className='form-control' placeholder='Nombre:' value={name} onChange={(e)=>setName(e.target.value)} required />
                            <input type="email" className='form-control mt-3' placeholder='Email:' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                            <input type="password" className='form-control mt-3' placeholder='Password:' value={password} onChange={(e)=>setPassword(e.target.value)} required />
                            <button onClick={submitRegistro} className='btn btn-primary w-100 mt-3'>ENVIAR</button>

                        </div>
                    </div>
                </div>
        </div>
       </div>
    )
}

export default Register