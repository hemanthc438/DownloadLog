import React, { useState } from 'react'
import img from "../assets/build_android.png"
import "./Body.css"
import Swal from "sweetalert2"
function Body() {
  const [isOpen, setIsOpen] = useState(false);
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [app,setApp] =useState("")
  const [message,setMessage] = useState("")
  const [result, setResult] = React.useState("");
  const handleSubmit=async(event)=>{
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("platform", app);
    formData.append("access_key", "4c988390-6f04-4e28-aaf0-6cf2d5f8977c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setIsOpen(false)
      Swal.fire({
        title:"success!!",
        text:"Email sent succesfully",
        icon:"success"
      })
      event.target.reset();
    } else {
      Swal.fire({
        title:"OOPSS!!",
        text:data.message,
        icon:"error"
      })
      setResult(data.message);
    }
  }
  return (
    <div className='bg-black h-fit sm:h-screen rounded-t-2xl rounded-b-xl'>
      <div className='flex items-center justify-center mx-10 p-5 rounded-2xl bg-neutral-900 grid grid-rows-2'>
                <h1 className='m-2 text-white text-center'>The build will be available only for 30 days. If you are not able to download the build, please mail me for Android and IOS!!😄</h1>
                <button className='m-2 bg-red-700 rounded-2xl w-[250px] justify-self-center' onClick={() => setIsOpen(true)}>Mail me for build</button>
                {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-96 relative animate-fade-in">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ×
            </button>
            
            <h2 className="text-2xl mb-4 text-gray-800">Request App</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onChange={(e)=>setName(e.target.value)}
                  required
                  className="w-full p-2 border rounded-lg text-gray-800"
                />
              </div>
              
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                  className="w-full p-2 border rounded-lg text-gray-800"
                />
              </div>
              <div className="flex space-x-4 py-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="platform"
                    value="android"
                    checked={app === 'android'}
                    onChange={(e)=>setApp(e.target.value)}
                    className="text-red-700 focus:ring-red-700"
                  />
                  <span className="text-gray-800">Android</span>
                </label>
                
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="platform"
                    value="ios"
                    checked={app === 'ios'}
                    onChange={(e)=>setApp(e.target.value)}
                    className="text-red-700 focus:ring-red-700"
                  />
                  <span className="text-gray-800">iOS</span>
                </label>
              </div>
              
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Message (Optional)"
                  onChange={(e)=>setMessage(e.target.value)}
                  className="w-full p-2 border rounded-lg h-32 text-gray-800"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-red-700 text-white p-2 rounded-lg hover:bg-red-800 transition-colors"
              >
                Submit Request
              </button>
            </form>
            </div>
        </div>
      )}
            </div>
      <div className='flex sm:h-full grid sm:grid-cols-2'>
            <div className='flex-row sm:max-h-[400px] items-center justify-center m-10 p-5 rounded-2xl bg-neutral-900 sm:col-span-1'>
                <h1 className='m-2 text-white text-3xl text-center'>Andriod</h1>
                <p className='m-2 text-white text-center'>please scan this QR Code to install the App or click the QR to install it on a device.</p>
                <div className='flex items-center justify-center grid grip-rows-2'>      
                  <a className="m-2 text-red-900" href="https://expo.dev/accounts/hemanthbolla007/projects/ChatBase/builds/0410423b-49d7-48df-aed1-3449ce5b1c48" target="_blank" rel="noopener noreferrer"><img style={{width:200 , height:200}}  src={img}/></a>
                </div>
                
            </div>
            <div className='flex-row sm:max-h-[400px] items-center justify-center m-10 p-5 rounded-2xl bg-neutral-900 col-span-1'>
                <h1 className='m-2 text-white text-3xl text-center'>IOS</h1>
                <p className='m-2 text-white'>please scan this QR Code to install the App or click the QR to install it on a device.</p>
                <div className='flex items-center justify-center grid grip-rows-2'>      
                  <a className="m-2 text-red-900" href="https://expo.dev/accounts/hemanthbolla007/projects/ChatBase/builds/0410423b-49d7-48df-aed1-3449ce5b1c48" target="_blank" rel="noopener noreferrer"><img style={{width:200 , height:200}}  src={img}/></a>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Body