import React, { useState } from 'react'
import Labelwithdescription from '../../Components/labelwithdescription/Labelwithdescription'
import { useNavigate } from 'react-router-dom'

export default function SpaceList({setContent}) {
  const [spaces, setSpaces] = useState(['s1','s2'])
  const navigate = useNavigate()

  return (
    <>
    {spaces?.map((space, key)=>{
        return(
            <div key={key} className='border p-5 m-5 cursor-pointer' onClick={()=>navigate(`/space/${space}`)}>{space}</div>
        )
    })}
      {/* <Labelwithdescription label="Auto" description="space coordianate will be automaticaly selected" updatedata={setContent} data={6}/> */}
    </>
    
  )
}
