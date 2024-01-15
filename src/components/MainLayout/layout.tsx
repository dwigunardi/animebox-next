import React from 'react'
import Navbar from '../Navbar/page'
import Footer from '../Footer/page'

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default MainLayout