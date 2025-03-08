import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function HeadingwithDescription({ label, description, updatedata, icon, goto }) {
    const navigate = useNavigate()
    return (
        <div >
            <div className='p-2 flex-col text-center ' onClick={() => goto ? navigate(goto) : ''}>


                <p className='text-white font-bold text-3xl  text-center'>{label}</p>

                <p className='text-sm text-gray-200 mt-0 mb-2   text-center'>{description}</p>


            </div>
        </div>
    )
}
