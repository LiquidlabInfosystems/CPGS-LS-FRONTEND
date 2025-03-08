import React, { useEffect, useState } from 'react';
import Labelwithdescription from '../../Components/labelwithdescription/Labelwithdescription';
import { GET_MONITOR_COUNT, GET_MONITOR_VIEWS } from '../../API_Requests';

export default function MonitoringStation() {
    const [monitorCount, setMonitorCount] = useState(0);  // Track monitor count, update once

    // Fetch monitor count once on component mount
    useEffect(() => {
        GET_MONITOR_COUNT()
            .then(count => {
                setMonitorCount(count);  // Set the monitor count from the API
            })
            .catch(err => {
                console.error("Error fetching monitor count:", err);
            });

        // Start the interval for fetching monitor views
        const intervalId = setInterval(() => {
            GET_MONITOR_VIEWS()  // Fetch live video or frame data
                .catch(err => {
                    console.error("Error fetching monitor views:", err);
                });
        }, 500); // Calls every 1 second

        // Cleanup interval when the component unmounts
        return () => {
            clearInterval(intervalId); // Cleanup on unmount
            console.log("Component unmounted, interval cleared!");
        };
    }, []);

    return (
        <>
            <div className='py-5'>
                <Labelwithdescription
                    label="Monitoring Station"
                    description="Currently watching spaces by this CPGS system (Maximum Capacity is 3 spaces)"
                />
                <p className='text-4xl font-bold'>{monitorCount}</p>
            </div>
            <hr className='my-5' />
            <div>
                <Labelwithdescription
                    label="Live Monitor"
                    description="Here you can monitor your spaces that are currently being monitored."
                />
            </div>
            <div className='flex' id='spaceViewContainer'>
                {/* Space for live monitoring UI */}
            </div>
            <hr className='my-5' />
            <Labelwithdescription
                label="Detection Value"
                description="Once the Object Sensing Value crosses this line, the space is marked as occupied."
            />
            <p className='text-4xl font-bold'>50</p>
        </>
    );
}
