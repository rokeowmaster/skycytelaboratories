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
      <Sponsors />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home