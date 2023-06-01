import React, { useState } from 'react'
import img2 from './images/petals 1.png'
import img from './images/Frame 45 2.png'
import img3 from './images/Group 8998.png'
import img4 from './images/Frame 55.png'
import img5 from './images/Frame 61.png'


const Login = () => {
    const [toogle, settoogle] = useState(true)

    return (
        <div className='flex flex-col items-center md:flex-row md:justify-around  md:my-5'>
            <div className="img">
                <img src={img} className='m-4' alt="" />
                <div className='md:w-3/6 md:mx-5 md:mt-52 mt-8 w-full  '>
                    <p className='text-white text-2xl font-bold md:text-start text-center '>
                        100% Uptime😎<br />
                        <span className='text-zinc-500'> Zero Infrastructure Management</span>
                    </p>
                    <img src={img3} alt="" className='mt-2 m-auto md:m-0' />
                </div>
                <div className='flex flex-row  justify-between md:mt-28 mt-24'>
                    <img src={img4} alt="" className='m-2.5' />
                    <img src={img5} alt="" className='m-2.5' />

                </div>
                <div>

                </div>

            </div>
            <div className="login my-auto md:w-2/6 w-4/6">
                <div>
                    <img src={img2} className='w-14 h-12 m-auto' alt="petals" />
                    <h1 className='text-center font-black text-3xl font-mono'>
                        Welcome <span className='text-green-600'>Back!</span>
                    </h1>
                    <p className='text-zinc-500 text-xs font-mono'>
                        Glad to see you, Again!
                    </p>
                </div>
                <form action="">

                    <div className="username">
                        <input type="email" placeholder="Enter your email" className='outline-0 w-full p-3 border border-slate-400 rounded-md my-4' required />
                    </div>
                    <div className="password flex items-center bg-white  border border-slate-400 rounded-md" >
                        <input type="password" placeholder="Password" className='outline-0 w-full p-3 rounded-md  ' required />
                        {
                            toogle ? <i className="fa-solid fa-eye-slash p-2 cursor-pointer" onClick={() => {
                                settoogle(!toogle);

                            }}></i> : <i className="fa-solid fa-eye p-2 cursor-pointer" onClick={() => {
                                settoogle(!toogle);

                            }}></i>
                        }
                    </div>
                    <div className="forgot w-full  m-auto text-end">
                        <a href="#" className='text-zinc-500'>Forgot Password?</a>
                    </div>
                    <div className="button  w-full  m-auto border mt-4 border-slate-400 rounded-md bg-black text-white p-2" style={{
                        boxShadow: '0 10px 30px rgba(0,0,0,0.72)'
                    }}>
                        <button type="submit" className='text-lg'>Log In</button>
                    </div>
                    <div className="create text-sm text-black mt-20">
                        <a href="#">Don’t an account yet?<span className='text-green-600'>Sign Up</span></a>

                    </div>
                </form>

            </div>


        </div >
    )
}

export default Login