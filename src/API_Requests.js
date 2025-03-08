import axios from "axios";

// let cpgsServerIp = ""
let cpgsServerIp = "http://192.168.1.24:8000"

function getCSRFToken() {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("csrftoken="))
    ?.split("=")[1];
}

// WORKS ON USER LOGIN API
export const LOGIN_API = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Operation was successful!");
      } else {
        reject("Operation failed!");
      }
    }, 2000);
  });
}

// SEND NEW SPACE COORDINATES TO THE SERVER THROUGHT SOCKET
export const UPDATE_SPACE_COORDINATES = async(x, y) => {
  let data = {
    'task':'UPDATE_SPACE_COORDINATES',
    'data':{
      'x':x,
      'y':y
    }
  }
  let res = await axios.post(`${cpgsServerIp}/calibrate_handler`, data,{
    headers: {
      "X-CSRFToken": getCSRFToken(), // Send CSRF token
      "Content-Type": "application/json",
    },
    withCredentials: true, // Ensures cookies are sent
  })
  GET_MANUAL_CALIBRATE_FRAME_REQUEST()
}

// SEND NEW SPACE COORDINATES TO THE SERVER THROUGHT SOCKET
export const RESET_SPACE_COORDINATES = async(x, y) => {
  let data = {
    'task':'CLEAR_SPACE_COORDINATES',
    'data':""
  }
  let res = await axios.post(`${cpgsServerIp}/calibrate_handler`, data,{
    headers: {
      "X-CSRFToken": getCSRFToken(), // Send CSRF token
      "Content-Type": "application/json",
    },
    withCredentials: true, // Ensures cookies are sent
  })
  GET_MANUAL_CALIBRATE_FRAME_REQUEST()
  
}

// SEND NEW SPACE COORDINATES TO THE SERVER THROUGHT SOCKET
// export const AUTO_SPACE_CALIBRATE = (x, y) => {
//   socket.send(`{"task": "auto_calibrate"}`)
// }

// export const SAVENETWORKSETTINGS = (networkSettings) => {
//   let networkSettings_json = JSON.stringify(networkSettings)
//   socket.send(`{"task":"save_network_settings","data":${networkSettings_json}}`)
// }

export const UPDATE_MODE =async (isLive) => {
  console.log(isLive,"live")
  let data = {
    'islive':isLive
  }
  let res = await axios.post(`${cpgsServerIp}/mode_handler`, data,{
    headers: {
      "X-CSRFToken": getCSRFToken(), // Send CSRF token
      "Content-Type": "application/json",
    },
    withCredentials: true, // Ensures cookies are sent
  })
  return res.data.data
  
}

export const GET_MODE =async () => {
  let res = await axios.get(`${cpgsServerIp}/mode_handler`)
  return res.data.data
}



// SEND NEW SPACE COORDINATES TO THE SERVER THROUGHT SOCKET
export const GET_MONITOR_COUNT = async() => {

  let spaceViewContainer = document.getElementById('spaceViewContainer')

  let data = {
    'task':'GET_MONITOR_COUNT',
    'data':''
  }
  let res = await axios.post(`${cpgsServerIp}/monitor_handler`, data, {
    headers: {
      "X-CSRFToken": getCSRFToken(), // Send CSRF token
      "Content-Type": "application/json",
    },
    withCredentials: true, // Ensures cookies are sent
  })
  let NoOfMonitors = res.data.data

  // console.log(No)

  for (let space = 0; space < NoOfMonitors; space++) {

    const monitor = document.getElementById(`liveMonitor${space}`)

    // Create Monitors
    if (!monitor) {
      const div = document.createElement('div');
      div.className = 'flex-col';
      div.innerHTML = `
          <img id="liveMonitor${space}" alt="live Stream" class="border border-black rounded-lg m-2" />
          <img id="liveLicensePlate${space}" alt="licensePlate" class="border border-black rounded-lg m-2" />
      `;
      spaceViewContainer.appendChild(div);
    }


  }
  }

  export const GET_MONITOR_VIEWS = async() => {

    let data = {
      'task':'GET_MONITOR_VIEWS',
      'data':''
    }
    let res = await axios.post(`${cpgsServerIp}/monitor_handler`, data, {
      headers: {
        "X-CSRFToken": getCSRFToken(), // Send CSRF token
        "Content-Type": "application/json",
      },
      withCredentials: true, // Ensures cookies are sent
    })
    let views = res.data.data


    for (let space = 0; space < views.length; space++) {

    const monitorData = document.getElementById(`liveLicensePlate${space}`)
    const monitorLicensePlate = document.getElementById(`liveMonitor${space}`)

    monitorData.src = views[space]['spaceFrame']
    if(views[space]['licensePlate'] != ""){
      monitorLicensePlate.src = views[space]['licensePlate']

    }
    }
  }

export const GET_MANUAL_CALIBRATE_FRAME_REQUEST = async() => {
  const imgElement = document.getElementById('manualCalibrate_stream');
  const calibrationStreamLoader = document.getElementById('calibrationStreamLoader');
  let data = {
    'task':'GET_CAMERA_VIEW_WITH_COORDINATES',
    'data':''
  }
  let res = await axios.post(`${cpgsServerIp}/calibrate_handler`, data, {
    headers: {
      "X-CSRFToken": getCSRFToken(), // Send CSRF token
      "Content-Type": "application/json",
    },
    withCredentials: true, // Ensures cookies are sent
  })
  console.log(res.data)
  imgElement.style.display = 'block'
  calibrationStreamLoader.style.display = 'none'
  imgElement.src = res.data.data;
}
  

export const GET_THRESHOLD = async () => {
  let threshold = await axios.get(`${cpgsServerIp}/get_threshold`)
  return threshold

}
export const GET_SLOT_DETAILS = async () => {
  let slot_details = await axios.get(`${cpgsServerIp}/get_slot_details`)
  return slot_details

}
export const GETNETWORKSETTINGS = async () => {
  let network_settings = await axios.get(`${cpgsServerIp}/network_handler`)
  return network_settings.data.data

}


export const SAVEIPSETTINGS = async (settings) => {
  
  let data = {
    "task":"iptype",
    "data":settings
  }
  let res = await axios.post(`${cpgsServerIp}/network_handler`,data, {
    headers: {
      "X-CSRFToken": getCSRFToken(), // Send CSRF token
      "Content-Type": "application/json",
    },
    withCredentials: true, // Ensures cookies are sent
  })
  return res.data
}

export const SAVENETWORKVISIBILITY = async(settings)=>{
  let data = {
    "task":"visibility",
    "data":settings
  }
  let res = await axios.post(`${cpgsServerIp}/network_handler`,data, {
    headers: {
      "X-CSRFToken": getCSRFToken(), // Send CSRF token
      "Content-Type": "application/json",
    },
    withCredentials: true, // Ensures cookies are sent
  })
  return res.data
}

export const SAVESERVERCONFIGURATION = async(settings)=>{
  let data = {
    "task":"server",
    "data":settings
  }
  let res = await axios.post(`${cpgsServerIp}/network_handler`,data, {
    headers: {
      "X-CSRFToken": getCSRFToken(), // Send CSRF token
      "Content-Type": "application/json",
    },
    withCredentials: true, // Ensures cookies are sent
  })
  return res.data
}

export const SAVENETWORKACESSPOINT = async(settings)=>{

  let data = {
    "task":"accesspoint",
    "data":settings
  }
  let res = await axios.post(`${cpgsServerIp}/network_handler`,data, {
    headers: {
      "X-CSRFToken": getCSRFToken(), // Send CSRF token
      "Content-Type": "application/json",
    },
    withCredentials: true, // Ensures cookies are sent
  })
  return res.data

}

  
