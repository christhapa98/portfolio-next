import React from 'react'
import PDFViewer from './PDFViewer'

export default function Portfolio() {
  return (
    <div style={{ backgroundImage: "url(https://www.imaginefactory.com/wp-content/uploads/2017/04/SPACES_BG-2.jpg)", }} className='flex items-center justify-center min-h-screen bg-gradient-to-r from-red-500 to-pink-500' id="portfolio">
      <PDFViewer />
    </div>
  )
}
