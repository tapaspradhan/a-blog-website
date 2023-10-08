import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({children,authentation=true}) {
    const navigate=useNavigate()
    const [loder,setLoader]=useState(true)
    const authStatus=useSelector(state=>state.auth.status)

    useEffect(()=>{
    //    Todo: make it more easy to understand

        // if(authStatus==true){
        //     navigate("/")
        // }else if(authStatus === false){
        //     navigate("/login")
        // }

        // let authValue=authStatus === true ? true : false

        if(authentation && authStatus !== authentation){
            navigate("/login")
        }else if(!authentation && authStatus !== authentation){
            navigate("/")
        }
        setLoader(false)
    },[authStatus,navigate,authentation])

  return loder ? <h1>Loading...</h1> : <>{children}</>
}

