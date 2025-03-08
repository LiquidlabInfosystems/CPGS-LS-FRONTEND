import React, { useState } from 'react'
import Labelwithdescription from '../../Components/labelwithdescription/Labelwithdescription'
import { useNavigate, useParams } from 'react-router-dom';

export default function Spacesetup() {

  const { space_id } = useParams(); 
  const navigate = useNavigate()

  return (
    <div className='flex-col'>
     <button onClick={()=>navigate(`/manual_calibrate/${space_id}`)} className='m-5 p-5 bg-black text-white'>Manual calibrate</button>
     <button onClick={()=>navigate(`/automatic_calibrate/${space_id}`)} className='m-5 p-5 bg-black text-white'>Automatic Calibrate</button>
     
    </div>
  )
}
