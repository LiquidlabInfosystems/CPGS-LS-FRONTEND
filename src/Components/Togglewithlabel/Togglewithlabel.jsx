import React, { useState } from 'react'

export default function Togglewithlabel({ icon, label, description, updatedata, isactive }) {
    const [isactive_local, setIsactive] = useState(false)
    return (
        <div className='flex justify-between'>
            <div className='py-3'>
                <div className='flex '>
                    {icon ? <img src={icon} className=" w-5 h-5 p-0.5" /> : <div></div>}
                    <p className='text-gray-600 '>{label}</p>
                </div>

                <p className='text-xs text-gray-400 mt-0 mb-2'>{description}</p>


            </div>
            <div onClick={()=>setIsactive(!isactive_local)} className='cursor-pointer'>
                {isactive_local ? <div className=' w-16 h-8 rounded-2xl border border-black flex justify-end'>
                    <div className=' w-8 h-8 rounded-full  bg-black '>
                    </div>
                </div>
                    :
                    <div className=' w-16 h-8 rounded-2xl border border-black flex justify-start'>
                        <div className=' w-8 h-8 rounded-full   bg-gray-500 '>
                        </div>
                    </div>}
            </div>


        </div>
    )
}
