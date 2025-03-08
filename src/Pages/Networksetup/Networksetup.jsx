import React, { useEffect, useState } from 'react'
import Inputtextbox from '../../Components/inputtextbox/Inputtextbox'
import Labelwithdescription from '../../Components/labelwithdescription/Labelwithdescription'
import { GETNETWORKSETTINGS, SAVENETWORKACESSPOINT, SAVESERVERCONFIGURATION, SAVEIPSETTINGS, SAVENETWORKVISIBILITY } from '../../API_Requests'

export default function Networksetup({saveModal}) {

  const [networkSetupData, setNetworkSetupData] = useState({
    host_name: "",
    server_ip: "",
    server_port: "",
    is_static: false,
    ipv4_address: "",
    subnet_mask: "",
    gateway_address: "",
    ap_ssid: "",
    ap_password: "",
    ip_type: ""
  })

  // const [IPType, setIPType] = useState("static")

  const HandleIPTypechange = (type) => {
    if (type == 'static') {
      setNetworkSetupData({ ...networkSetupData, ip_type: 'static' })
    }
    else {
      setNetworkSetupData({ ...networkSetupData, ip_type: 'dynamic' })
    }
  }

  const showSaveModal =()=>{
    saveModal(true)

    setTimeout(() => {
      saveModal(false)
      }, 1000);
  }

  const HandleNetworkSave = async () => {
    showSaveModal()
    // send the new network configuratipon to the ls
    let res = await SAVEIPSETTINGS(networkSetupData)
    // if (res.data == 'reload') {
    //   window.location.reload()
    // }
  }

  const HandleNetworkVisiblitySave = async()=>{
    showSaveModal()
    let res = await SAVENETWORKVISIBILITY(networkSetupData)
    // console.log('visibility save')
  }
  const HandleServerConfigurationSave =async ()=>{
    showSaveModal()
    let res = await SAVESERVERCONFIGURATION(networkSetupData)
    // console.log('server configuration save')
  }
  const HandleAccessPointSave =async ()=>{
    showSaveModal()
    let res = await SAVENETWORKACESSPOINT(networkSetupData)
    // console.log('HandleAccessPointSave save')
  }
  
  const loadCurrentNetworkSettings = async () => {
    // showSaveModal()
    let currentNetworkSettings = await GETNETWORKSETTINGS()
    console.log(currentNetworkSettings, "network settings")
    setNetworkSetupData(currentNetworkSettings)
  }


  useEffect(() => {
    // setIPType('static')
    loadCurrentNetworkSettings()
  }, [])

  return (
    <div className='w-full'>
      <div className='w-full'>

        <div className='my-4'>
          <Labelwithdescription label="Network Visiblity" />
          <div>
            <label>Set Hostname</label>
            <input type="text" id='textinput' value={networkSetupData.host_name} className='border-gray-300 border rounded-lg py-3 px-5  w-full' placeholder="hostname" onChange={(e) => {
              setNetworkSetupData({ ...networkSetupData, host_name: e.target.value })
            }} />
          </div>


          <div className='flex justify-end'>
            <button className='bg-primary p-3 text-white w-20 rounded-lg' onClick={HandleNetworkVisiblitySave}>Save</button>
          </div>
        </div>


        <div className='my-4'>
          <Labelwithdescription label="Server Configuration" />
          <div className='flex my-2'>
            <div className='my-2 mr-10'>
              <label>Sever IP</label>
              <input type="text" value={networkSetupData.server_ip} className='border-gray-300 border rounded-lg py-3 px-5  w-full' placeholder="hostname" onChange={(e) => {
                setNetworkSetupData({ ...networkSetupData, server_ip: e.target.value })
              }} />
            </div>
            <div className='my-2'>
              <label>Server Port</label>
              <input type="Number" value={networkSetupData.server_port} className='border-gray-300 border rounded-lg py-3 px-5  w-full' placeholder="hostname" onChange={(e) => {
                setNetworkSetupData({ ...networkSetupData, server_port: e.target.value })
              }} />
            </div>
          </div>

          <div className='flex justify-end'>
            <button className='bg-primary p-3 text-white w-20 rounded-lg' onClick={HandleServerConfigurationSave}>Save</button>

          </div>
        </div>

        <div className='my-4'>
          <Labelwithdescription label="Access Point Configuration" />
          <div className='flex my-2'>
            <div className='my-2 mr-10'>
              <label>SSID</label>
              <input type="text" value={networkSetupData.ap_ssid} className='border-gray-300 border rounded-lg py-3 px-5  w-full' placeholder="ssid" onChange={(e) => {
                setNetworkSetupData({ ...networkSetupData, ap_ssid: e.target.value })
              }} />
            </div>
            <div className='my-2'>
              <label>PASSWORD</label>
              <input type="password" value={networkSetupData.ap_password} className='border-gray-300 border rounded-lg py-3 px-5  w-full' placeholder="password" onChange={(e) => {
                setNetworkSetupData({ ...networkSetupData, ap_password: e.target.value })
              }} />
            </div>
          </div>

          <div className='flex justify-end'>
            <button className='bg-primary p-3 text-white w-20 rounded-lg' onClick={HandleAccessPointSave}>Save</button>

          </div>
        </div>


        <div className='my-4'>
          <Labelwithdescription label="Configure IP" />
          <div className='flex justify-between my-2  w-1/4'>
            <div className='flex w-10 my-2'>
              <input type="radio" value="static" className=" mx-5 cursor-pointer" onChange={(e) => {
                HandleIPTypechange(e.target.value)
              }} name='type' checked={networkSetupData.ip_type == 'static'} /> <label>static</label>
            </div>

            <div className='flex my-2'>
              <input type="radio" value="dynamic" className='mx-5 cursor-pointer' onChange={(e) => {
                HandleIPTypechange(e.target.value)
              }} name='type' checked={networkSetupData.ip_type == 'dynamic'} /><label>dynamic</label>
            </div>

          </div>

          {networkSetupData.ip_type === "static" ? <div className='flex-auto border border-black p-10 rounded-lg my-2' >
            <div className='my-2'>
              <label>IPV4 Address</label>
              <input type="text" value={networkSetupData.ipv4_address} className='border-gray-300 border rounded-lg py-3 px-5  w-full' placeholder="hostname" onChange={(e) => {
                setNetworkSetupData({ ...networkSetupData, ipv4_address: e.target.value })
              }} />
            </div>

            {/* <div className='my-2'>
              <label>Subnet Mask</label>
              <input type="text" value={networkSetupData.subnet_mask} className='border-gray-300 border rounded-lg py-3 px-5  w-full' placeholder="hostname" onChange={(e) => {
                setNetworkSetupData({ ...networkSetupData, subnet_mask: e.target.value })
              }} />
            </div> */}

            <div className='my-2'>
              <label>Gateway Address</label>
              <input type="text" value={networkSetupData.gateway_address} className='border-gray-300 border rounded-lg py-3 px-5  w-full' placeholder="hostname" onChange={(e) => {
                setNetworkSetupData({ ...networkSetupData, gateway_address: e.target.value })
              }} />
            </div>
          </div> : ""
          }

        </div>
        <div className='flex justify-end'>
          <button className='bg-primary p-3 text-white w-20 rounded-lg' onClick={HandleNetworkSave}>Save</button>

        </div>









      </div>
    </div>
  )
}
