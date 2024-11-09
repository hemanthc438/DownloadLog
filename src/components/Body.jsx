import React from 'react'
import img from "../assets/build_android.png"

function Body() {
  return (
    <div className='flex h-screen bg-black rounded-t-2xl'>
            <div className='flex-row items-center justify-center mx-10 pt-5'>
                <h1 className='text-white text-3xl text-center'>Andriod</h1>
                <p className='text-white'>please scan this QR Code to install the App or click the QR to install it on a device.</p>
                <div className='flex items-center justify-center'>      
                  <a className="text-red-900" href="https://expo.dev/accounts/hemanthbolla007/projects/ChatBase/builds/0410423b-49d7-48df-aed1-3449ce5b1c48" target="_blank" rel="noopener noreferrer"><img style={{width:200 , height:200}}  src={img}/></a>
                </div>
            </div>
            {/* <div className='flex mx-10 pt-5'>
                <h1 className='text-white text-3xl'>IOS</h1>
            </div> */}
    </div>
  )
}

export default Body