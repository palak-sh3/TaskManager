import React from 'react';
import UI_IMG from "../../assets/images/auth-img.jpg"

const AuthLayout = ({ children }) => {
  return <div className='flex'>
    <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'>
      <h2 className='text-2xl font-medium text-black'>Task Manager</h2>
      {children}
    </div>

    <div className="hidden md:flex w-[45vw] h-screen items-center justify-center bg-blue-50 bg-[url('/bg-img.jpg')] bg-cover bg-no-repeat bg-center overflow-hidden p-8">
      <img src={UI_IMG} className="w-64 lg:w-[130%]" />
    </div>

  </div>
};

export default AuthLayout
