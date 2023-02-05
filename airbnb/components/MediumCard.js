import Image from 'next/image'
import React from 'react'

function MediumCard({img,title}) {
  return (
    <div>
        {/*TOP */}
        <div className="relative h-80 w-80">
            <Image src={img} layout='fill' className='rounded-xl' />

        </div>
        <h3 className="text-2xl mt-3 ">{title}</h3>

        {/*Bottom */}
        <div>

        </div>
    </div>
  )
}

export default MediumCard