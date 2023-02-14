import Image from 'next/image'
import React from 'react'

function LargeCard({img, title, description, butonText}) {
  return (
    <section className="relative py-16 cursor-pointer">
        <div className="relative h-96 min-w-[300px]">
        <Image  src={img} layout="fill" objective="cover" className="rounded-2xl" />
        </div>
        <div className="absolute top-32 left-12">
        <h3>{title}</h3>
            <p>{description}</p>

            <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">{butonText}
            </button>
        </div>
    </section>
  )
}

export default LargeCard