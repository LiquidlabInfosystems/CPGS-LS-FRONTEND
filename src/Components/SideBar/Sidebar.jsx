import React, { useEffect, useState } from 'react'
import HeadingwithDescription from '../HeadingwithDescription/HeadingwithDescription'
import SelectableButton from '../SelectableButton/SelectableButton'
import { STOP_STREAM } from '../../API_Requests'
import LiveDashboard from '../../Pages/LiveDashboard/LiveDashboard'

export default function Sidebar({ setContent, mode }) {

    const [selectedIndex, setSelectedIndex] = useState(0)
    // useEffect(() => {
    // console.log('mode', mode)

    //     if (mode == 'cofig') {
    //         setSelectedIndex(0)
    //     }
    // },[])

    return (
        <div className='flex-col bg-primary h-screen w-1/6 p-5'>
            <HeadingwithDescription label="CPGS Console" description="Manage the Spaces and other Network relatted things from here." />
            <div className='flex-col my-10 mx-5'>
                {mode ? <>
                    <SelectableButton text="Live Mode" selected={true} onselect={setContent(4)} />

                </>
                    : !mode ? <>
                        {/* <SelectableButton text="Accounts" selected={true} onselect={setContent(5)} /> */}
                        <SelectableButton text="Accounts" selected={selectedIndex == 0 ? true : false} onselect={() => { setSelectedIndex(0); setContent(0) }} />
                        <SelectableButton text="Monitor Station" selected={selectedIndex == 1 ? true : false} onselect={() => { setSelectedIndex(1); setContent(1) }} />
                        <SelectableButton text="Network Settings" selected={selectedIndex == 2 ? true : false} onselect={() => { setSelectedIndex(2); setContent(2) }} />
                        <SelectableButton text="Calibrations" selected={selectedIndex == 3 ? true : false} onselect={() => { setSelectedIndex(3); setContent(3) }} />

                    </>
                        :
                        <>
                            {/* <LiveDashboard text="Accounts" /> */}

                        </>
                }
                {/* <SelectableButton text="Live Stream" selected={selectedIndex == 4 ? true : false} onselect={()=>{setSelectedIndex(4);setContent(4)}}/> */}
                {/* <SelectableButton text="Logout" selected={selectedIndex == 5 ? true : false} onselect={()=>{setSelectedIndex(5);setContent(5)}}/> */}
            </div>
        </div>
    )
}
