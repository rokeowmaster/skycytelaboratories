import React from 'react'
import { Card, CardContent } from './ui/Card';

// Testimonials Data
const testimonials = [
    { name: "Dr. Johnson", text: "SkyCyte delivers exceptional quality and reliability." },
    { name: "Nurse Emily", text: "Fast shipping and excellent customer service!" },
    { name: "Dr. Carter", text: "High-quality products at great prices. Will order again!" },
  ];

const Testimonials = () => {
  return (
    <div>
        {/* Testimonials */}
      <section className="w-full text-center py-16 bg-gray-200 backdrop-blur-lg bg-opacity-50">
        <h2 className="text-3xl font-bold text-blue-600">What Our Clients Say</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6 px-6">
          {testimonials.map(({ name, text }, index) => (
            <Card key={index} className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
              <CardContent>
                <p className="text-gray-800">"{text}"</p>
                <h3 className="text-blue-600 font-bold mt-2">- {name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Testimonials