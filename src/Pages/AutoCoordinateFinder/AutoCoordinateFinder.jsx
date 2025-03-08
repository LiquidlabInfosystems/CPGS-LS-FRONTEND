import React, { useEffect } from 'react'
import Labelwithdescription from '../../Components/labelwithdescription/Labelwithdescription'
import Submitbutton from '../../Components/submitbutton/Submitbutton'
// import { AUTO_SPACE_CALIBRATE } from '../../API_Requests'

export default function AutoCoordinateFinder() {
    
    useEffect(()=>{
        // AUTO_SPACE_CALIBRATE()
        // console.log('here')
    },[])

    
    return (
        <div>
            <Labelwithdescription label="Auto Coordinate Finder" description="Here our Auto finder feature will help you to find the space coordinates in fast." />
            <div >
            <img id="video" alt="Video Stream" />
            </div>
            <div className='flex justify-end py-10'>
                {/* <button onClick={AUTO_SPACE_CALIBRATE}>Retry</button> */}
                <div className='w-5'>

                </div>
                <Submitbutton text="Save" />

            </div>
        </div>
    )
}
