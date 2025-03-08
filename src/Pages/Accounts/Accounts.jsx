import React, { useEffect, useState } from 'react'
import Inputtextbox from '../../Components/inputtextbox/Inputtextbox'
import Labelwithdescription from '../../Components/labelwithdescription/Labelwithdescription'

export default function Accounts() {

    const [data, setData] = useState({
        new_username: "",
        old_password: "",
        new_password: ""
    })

    const [alert, setAlert] = useState("")

    const HandleSubmit = (event) => {
        event.preventDefault()

        if (data.new_username === "") {
            setAlert("New Username cannot be Empty")
            return
        }


        if (data.old_password === "") {
            setAlert("Old password cannot be Empty")
            return
        }

        if (data.new_password === "") {
            setAlert("New password cannot be Empty")
            return
        }

        setAlert("")
    }

    useEffect(() => {
        // Fetch current user account details
        setData({
            new_username: "admin",
            old_password: "admin",
        })

    }, [])

    return (
        <div className='w-full'>
            <Labelwithdescription label="Accounts" />
            <div className=''>
                <form onSubmit={(event) => HandleSubmit(event)}>
                    <div className='my-5 w-1/4'>

                 

                    <p className='text-red-700 font-bold'>{alert}</p>

                    <div className='my-2'>
                        <p className='text-gray-600 '>New UserName</p>
                        <input type="text" id='textinput' className='border-gray-300 border rounded-lg py-3 px-5  w-full' placeholder="New username" onChange={(e) => {
                            setData({ ...data, new_username: e.target.value })
                        }} name='new_username' value={data.new_username} />
                    </div>

                    <div className='my-2'>
                        <p className='text-gray-600 '>Old Password</p>
                        <input type="password" id='textinput' className='border-gray-300 border rounded-lg py-3 px-5  w-full' placeholder="Old Password" onChange={(e) => {
                            setData({ ...data, old_password: e.target.value })
                        }} name='old_password' value={data.old_password

                        } />
                    </div>

                    <div className='my-2'>
                        <p className='text-gray-600 '>New Password</p>
                        <input type="password" id='textinput' className='border-gray-300 border rounded-lg py-3 px-5  w-full' placeholder="New Password" onChange={(e) => {
                            setData({ ...data, new_password: e.target.value })
                        }} name='new_password'  />
                    </div>
                    </div>
                    <div className='flex justify-end'>
                        <button className='bg-primary p-3 px-10 rounded-lg text-white my-5 cursor-pointer '>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
