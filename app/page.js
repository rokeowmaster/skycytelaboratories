import React from 'react'
import { Banner,Nav,Hero,About,Sponsors,Testimonials,Footer, ProductShowcase } from '@/components'

const Home = () => {
  return (
    <div>
      <Banner />
      <Nav />
      <Hero />
      <About />
      <ProductShowcase />
      <Testimonials />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default Home