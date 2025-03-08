import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SelectableButton({text, goto, selected, onselect}) {
    let navigate = useNavigate()
  return (
    <div>
    {selected?<button onClick={onselect} className='bg-white rounded-md text-black px-5 py-3 w-full text-start'>
        {text}
    </button>:
    <button onClick={onselect} className='rounded-md text-white px-5 py-3 w-full text-start'>
        {text}
    </button>}
    </div>
    
  )
}
