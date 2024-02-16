import React from 'react'
import { useState } from 'react'

const DrSignup = () => {
    const [form, setForm] = useState({ Name: "", email: "", specs: "", cnfpass:"",pass:""});
    const [seepass,setSeepass] = useState(false)
    const [seeCpass,setSeeCpass] = useState(false)
    function changeHandler(e) {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
        console.log(form)
    }

    return (
        <div>
            <div className='bg-blue-500 rounded-3xl w-[12rem] text-white py-2'>
                <button className="hover:text-black p-2 m-0.5 hover:rounded-2xl py-2 hover:bg-white">Patient</button>
                <button className="hover:text-black p-2 m-0.5 hover:rounded-2xl py-2 hover:bg-white">Doctor</button>
             </div>

            <div className='flex-col justify-center items-center'> 
            <div className=' flex-col  w-[420px]'>
                <h1 className=' font-bold text-xl'>Doctor Signup</h1>
                <form onSubmit={(e)=>(
                    e.preventDefault()
                )} className=" flex item-center flex-col justify-center gap-4 mt-4">
                    <label htmlFor='Name' className='flex justify-start'>Name</label>
                    <input  className=' w-[15rem] rounded-md py-2 px-1 text-start' value={form.Name} type='text' name='Name' required id='Name' onChange={changeHandler} placeholder='Enter Your Name' />

                    <label htmlFor='specialization' className='flex justify-start'>specialization</label>
                    <input className=' w-[15rem] rounded-md py-2 px-1 text-start' value={form.specs} type='text' name='specs' required id='specialization' onChange={changeHandler} placeholder='Enter Your spcialities' />
                   
                    <label htmlFor='Email' className='flex justify-start'>Email</label>
                    <input className=' w-[15rem] rounded-md py-2 px-1 text-start' value={form.email} type='email' name='email' required id='Email' onChange={changeHandler} placeholder='Enter Your Email' />
                    

                    <label htmlFor='Password' className=' text-start'>Password</label>
                    <div className='flex gap-2'><input className=' w-[15rem] rounded-md py-2 px-1 text-start' value={form.pass} type={seepass?'text':'password'} name='pass' required id='Password' onChange={changeHandler}  placeholder='Set Your Password'/>
                    <span><button className=' bg-blue-200 hover:bg-blue-500 rounded-md px-1 py-2' onClick={()=>(
                        setSeepass((prev)=>(!prev))
                    )}>See</button></span></div>
                   

                    <label htmlFor='cnfPass' className='flex justify-start'>Confirm Password</label>
                    <div className='flex items-center gap-2'><input className=' w-[15rem] rounded-md py-2 px-1 text-start' value={form.cnfpass} type={seeCpass?'text':'password'} name='cnfpass' required id='cnfPass' onChange={changeHandler}  placeholder='confirm Password'/>
                    <span><button className=' bg-blue-200 hover:bg-blue-500  rounded-md px-1 py-2' onClick={()=>(
                        setSeeCpass((prev)=>(!prev))
                    )}>See</button></span></div>
                    
                    <button className=' bg-blue-600 text-white font-bold px-2 py-2 rounded-lg text-center text-sm'>SignUp</button>
                </form>
            </div>
            <img />
        </div>
        </div>
        
    )
}

export default DrSignup;
