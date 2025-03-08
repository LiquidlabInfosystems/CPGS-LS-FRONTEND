import React, { useEffect, useState } from 'react'
import Labelwithdescription from '../../Components/labelwithdescription/Labelwithdescription'
import Inputtextbox from '../../Components/inputtextbox/Inputtextbox'
import HeadingwithDescription from '../../Components/HeadingwithDescription/HeadingwithDescription'
import Submitbutton from '../../Components/submitbutton/Submitbutton'
import { useNavigate } from 'react-router-dom'
import { LOGIN_API } from '../../API_Requests'

export default function Loginpage() {
  const [error, setError] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate()

  const HandleLogin = (e)=>{
    e.preventDefault()
    LOGIN_API(username, password).then((res)=>{
      navigate('/')
    })
  }

  useEffect(()=>{

  },[])
  return (
    <div className='flex justify-center h-screen items-center'>

      <form className='border border-gray-400 rounded-md p-20 ' onSubmit={HandleLogin}>
        <div>
          <HeadingwithDescription label="CPGS Console" description="Manage the Spaces and other Network relatted things from here." />
        </div>
        <p>{error}</p>
        <div>
          <Inputtextbox label="Username" description="Enter the CPGS Console username for this device  ( 1001 )" placeholder="Username" updatedata={setUsername} />
          <Inputtextbox label="Password" description="Enter the Password" placeholder="Password" updatedata={setPassword}/>
        </div>
        <div className='flex justify-end'>
          <Submitbutton text="Login" />
        </div>
      </form>



    </div>
  )
}
