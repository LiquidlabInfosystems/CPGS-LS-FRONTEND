import React, { useEffect, useState } from 'react'
import Labelwithdescription from '../../Components/labelwithdescription/Labelwithdescription'
import Toggle from 'react-toggle'
import { GET_MANUAL_CALIBRATE_FRAME_REQUEST, RESET_SPACE_COORDINATES, STOP_STREAM, UPDATE_SPACE_COORDINATES } from '../../API_Requests'

export default function Calibration() {

  const [calibrationData, setCalibrationData] = useState({
    dectection_value: 0,
    threshold_value: 0,
    external_light_status: false,
  })

  useEffect(() => {
    GET_MANUAL_CALIBRATE_FRAME_REQUEST()
  })

  const handleImageClick = (event) => {
    const img = event.target;
    const rect = img.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // console.log(`Clicked coordinates: (${x}, ${y})`);
    UPDATE_SPACE_COORDINATES(x, y)
  }

  return (
    <div>

      <div className='my-5'>
        <Labelwithdescription label="Dectection Value" />
        <input type="text" value={calibrationData.dectection_value} className='border-gray-300 border rounded-lg py-3 px-5  w-full' placeholder="" onChange={(e) => {
          setCalibrationData({ ...calibrationData, dectection_value: e.target.value })
        }} />
      </div>
{/* 
      <div className='my-5'>
        <Labelwithdescription label="Threshold Value" />
        <input type="text" value={calibrationData.threshold_value} className='border-gray-300 border rounded-lg py-3 px-5  w-full' placeholder="" onChange={(e) => {
          setCalibrationData({ ...calibrationData, threshold_value: e.target.value })
        }} />
      </div> */}

      <div className='my-5'>
        <Labelwithdescription label="External Light" />
        <div>
          <label>Check to Turn it On</label>
          <input type='checkbox' onChange={() => setCalibrationData({ ...calibrationData, })} className='mx-5' />

        </div>
        {/* <input type="toggle" id='textinput' className='border-gray-300 border rounded-lg py-3 px-5  w-full' placeholder="" onChange={(e) => {
          setCalibrationData({ ...calibrationData, dectection_value: e.target.value })
        }} /> */}
      </div>
      <div>
        <Labelwithdescription label="Calibration Stream" description={"Click the corners of each space for Space Marking"}/>
        <button className='text-white bg-blue-500 rounded-md px-3 py-1' onClick={GET_MANUAL_CALIBRATE_FRAME_REQUEST}>Get Next Shot</button>
        
      </div>
      <div className='flex justify-center'>
        <img id="manualCalibrate_stream" className='rounded-xl' alt="Video Stream" onClick={(event) => handleImageClick(event)} />
        <button id='calibrationStreamLoader' className='p-3 bg-primary text-white'>Loading</button>
      </div>
      <button onClick={RESET_SPACE_COORDINATES}>Reset</button>

      <div className='flex justify-end'>
        <button className='bg-primary p-3 text-white w-20 rounded-lg'>Save</button>

      </div>

    </div>
  )
}
