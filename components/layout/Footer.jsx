import React from 'react'

const Footer = ({ roboto }) => {
  return (
    <footer className={`${roboto.variable} font-roboto bg-gray-900`}>
      <div className="max-w-6xl mx-auto px-2">
        <p className="py-4 text-white text-center">&copy; {new Date().getFullYear()} Github Information | NextJS App</p>
      </div>
    </footer>
  )
}

export default Footer