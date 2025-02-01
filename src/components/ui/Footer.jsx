import React from 'react'

const Footer = () => {
  return (
    <footer className="py-3" style={{backgroundColor: '#6050DC', color:'white'}}>
    <div className="container text-center">
        {/*Quick links section */}
        <div className="mb-2">
            <a href="#" className="text-white text-decoration-none mx-2">Home</a>
            <a href="#" className="text-white text-decoration-none mx-2">About</a>
            <a href="#" className="text-white text-decoration-none mx-2">Shop</a>
            <a href="#" className="text-white text-decoration-none mx-2">Contact</a>
        </div>
    </div>
    </footer>
  )
}

export default Footer