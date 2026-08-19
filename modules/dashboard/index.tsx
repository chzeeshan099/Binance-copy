import React from 'react'
import Sidebar  from "@/components/layout/site-sidebar";
import UserProfile from './UserProfile';


const index = () => {
  return (
    <div className='bg-[#181A20] flex'>
      <Sidebar/>
       {/* Hero section  */}
      <div className='w-full'>
        <UserProfile/>
      </div>
    </div>
  )
}

export default index
