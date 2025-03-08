import React, { useEffect } from 'react'
import Submitbutton from '../../Components/submitbutton/Submitbutton'
import Labelwithdescription from '../../Components/labelwithdescription/Labelwithdescription'
import { RESET_SPACE_COORDINATES, UPDATE_SPACE_COORDINATES } from '../../API_Requests'

export default function ManualCoordinateFinder() {


  const handleImageClick = (event) => {
    const img = event.target;
    const rect = img.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // console.log(`Clicked coordinates: (${x}, ${y})`);
    UPDATE_SPACE_COORDINATES(x, y)
  }


  return (
    <div className='p-5'>
      <Labelwithdescription label="Manual Coordinate Finder" description="Here our Auto finder feature will help you to find the space coordinates in fast." />
      <div >
        <img id="manualCalibrate_stream" alt="Video Stream" onClick={(event) => handleImageClick(event)} />
      </div>
      <div className='flex justify-end py-10'>
        {/* <button onClick={STOP_STREAM}>Stop</button> */}

        <div className='w-5'>

        </div>

        <button onClick={RESET_SPACE_COORDINATES}>Reset</button>


      </div>
    </div>
  )
}
