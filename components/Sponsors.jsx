import Image from 'next/image'
import React from 'react'

// Sponsors Data
const sponsors = ["/sponsor1.jpg", "/sponsor2.jpg", "/sponsor3.jpeg","/fdizer.png","/cardio.jpg"];

const Sponsors = () => {
  return (
    <div className='bg-gray-100 backdrop-blur-lg bg-opacity-50'>
        {/* Sponsors */}
      <section className="w-full text-center py-16">
        <h2 className="text-3xl font-bold text-blue-600">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-6 px-6">
          {sponsors.map((src, index) => (
            <Image key={index} src={src} alt={`Sponsor ${index + 1}`} width={144} height={96} className="mx-auto rounded-xl object-cover" />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Sponsors