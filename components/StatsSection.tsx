'use client'

import React from 'react'

const StatsSection = () => {
  const stats = [
    { value: '5K+', label: 'HAPPY CUSTOMERS' },
    { value: '24H', label: 'FAST DELIVERY' },
    { value: '100%', label: 'AUTHENTIC' }
  ]

  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-5xl font-black text-gold">
                {stat.value}
              </div>
              <div className="text-sm font-semibold tracking-wider text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
