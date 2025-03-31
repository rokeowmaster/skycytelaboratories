import React from 'react'

const About = () => {
  return (
    <div>
        {/* About Section - Centered */}
      <section className="w-full max-w-5xl py-16 text-center px-6 mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-blue-600">About Us</h2>
        <p className="text-gray-600 mt-4 max-w-2xl">
          SkyCyte provides premium medical supplies trusted by healthcare professionals and individuals worldwide.
        </p>
      </section>
    </div>
  )
}

export default About