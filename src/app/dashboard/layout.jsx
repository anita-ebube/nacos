import React from 'react'
import Navbar from './Components/Navbar/navbar'
import Sidebar from './Components/Sidebar/sidebar'
import Auth from "../../auth"

const layout = ({children}) => {
  return (
    <>
    <Auth>
    <div>
      <Navbar />
      <Sidebar />
      <main>
        {children}
      </main>
    </div>
    </Auth>
    </>
  )
}

export default layout