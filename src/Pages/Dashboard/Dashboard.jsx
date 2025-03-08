import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/SideBar/Sidebar'
import Calibration from '../Calibration/Calibration'
import Networksetup from '../Networksetup/Networksetup'
import Spacesetup from '../Spacesetup/Spacesetup'
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom'
import AutoCoordinateFinder from '../AutoCoordinateFinder/AutoCoordinateFinder'
import ManualCoordinateFinder from '../ManualCoordinateFinder/ManualCoordinateFinder'
import LiveStream from '../LiveStream/Livestream'
import Accounts from '../Accounts/Accounts'
import MonitoringStation from '../MonitoringStation/MonitoringStation'
import DynamicToggle from '../../Components/DynamicToggle/DynamicToggle'
import { GET_MODE, UPDATE_MODE } from '../../API_Requests'
import LiveDashboard from '../LiveDashboard/LiveDashboard'
import SaveModal from '../../Components/listitem/SaveModal'

export default function Dashboard() {
  const [content, setContent] = useState(0)
  const navigate = useNavigate()
  const [islive, setisLive] = useState()
  const [saveModal, setSaveModal] = useState(false)

  const Logout = () => {
    navigate('/login')
  }

  const changeMode = async (name, isLive) => {
    console.log("name,islive", name, islive);

    const mode = await UPDATE_MODE(isLive)
    if (mode === 'live') {
      setisLive(true)
    } else if (mode === 'config') {
      setisLive(false)

      setContent(0)
    }

  }


  useEffect( () => {
    let mode = GET_MODE()
    if (mode === 'live') {
      setisLive(true)
    } else if (mode === 'config') {
      setisLive(false)
    }
  }, [])

  // console.log(islive, "islivelllllll");

  return (
    <div className='flex '>
      {/* <Loginpage/> */}
      <Sidebar setContent={setContent} mode={islive} />

      <div className='p-10 w-full'>
        <div className='flex justify-end '>
          {/* <p>here : {islive ? " live" : " config"}</p> */}
          <DynamicToggle label="Change Mode" name="mode" onChange={changeMode} activeLabel='live' inactiveLabel='config' checked={islive} />
        </div>

        {content == 0 ? <Accounts /> :
          content == 1 ? <MonitoringStation setContent={setContent} /> :
            content == 2 ? <Networksetup saveModal={setSaveModal} /> :
              content == 3 ? <Calibration /> :
                content == 4 ? <LiveDashboard /> :
                  content == 5 ? <Accounts /> :
                    content == 6 ? <AutoCoordinateFinder setContent={setContent} /> :
                      content == 7 ? <ManualCoordinateFinder setContent={setContent} /> :
                        ""}

      </div>

      <div >
        <SaveModal isOpen={saveModal} />
      </div>


    </div>

  )
}
