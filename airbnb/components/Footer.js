import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 text-xs text-gray-600 bg-gray-100 py-14'>
        <div className='text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>
        <div className='text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This not a real site</p>
            <p>It&apos;s a awesome clone</p>
            <p>Referrals accepted</p>
            <p>Papafam</p>
        </div>
        <div className='text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p>Avishkar kotkar</p>
            <p>Presents</p>
            <p>Interactive Website</p>
            <p>Hundreds of Skills</p>
            <p>Contact Now</p>
        </div>
        <div className='text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Centre</p>
            <p>Trust & Safety</p>
            <p>Say Hi</p>
            <p>Lets Meet</p>
            <p>For the win</p>
        </div>
    </div>
  )
}

export default Footer