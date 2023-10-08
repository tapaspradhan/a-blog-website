import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appWrite/auth'
import {login,logout} from "./store/authSlice"

import './App.css'
import { Footer, Header } from './components'
import {Outlet} from 'react-router-dom'

function App() {
  const [loading,setLoding]=useState(true)
  const dispatch=useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>{
      setLoding(false)
    })
  }, [])
  

  return !loading ? (
    <div className='min-h-screen flex-wrap flex content-between'>
      <div className='w-full block'>
        <Header/>
        <main>
          TODO: <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
