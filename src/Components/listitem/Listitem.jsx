import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Listitem({title, description, goto}) {
  const navigate = useNavigate()
  return (
    <div className='border rounded-lg p-5 border-gray-400 m-2 cursor-pointer hover:shadow-md w-full' onClick={()=>navigate(goto)}>
        <p className='text-gray-700 text-sm'>{title}</p>
        <p className='text-gray-500 text-xs'>{description}</p>
    </div>
  )
}
