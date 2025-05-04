import React, { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from "framer-motion"

const AboutUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3 }) // Top of component hits 70% => amount: 0.3

  const [satisfaction, setSatisfaction] = useState(0)
  const [destinations, setDestinations] = useState(0)
  const [guides, setGuides] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      animate(0, 95, {
        duration: 3,
        ease: "easeOut",
        onUpdate: latest => setSatisfaction(Math.round(latest))
      })
      animate(0, 72, {
        duration: 3,
        ease: "easeOut",
        onUpdate: latest => setDestinations(Math.round(latest))
      })
      animate(0, 250, {
        duration: 3,
        ease: "easeOut",
        onUpdate: latest => setGuides(Math.round(latest))
      })
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <div id='About' ref={ref} className='p-8 pt-15 flex flex-col md:flex-row'>
      <div className='md:pr-30'>
        <p className='text-sm font-medium text-zinc-400'>[AboutUs]</p>
      </div>
      <div>
        <p className='text-2xl md:text-5xl py-5 tracking-tighter font-medium'>
          It all began with a single journey — a trip to the land of fire and ice that sparked a profound love for Iceland. Enchanted by its rugged beauty and rich culture, we knew we had found something truly special.
        </p>

        <div className='mx-5 my-20 flex flex-col md:flex-row gap-5 w-full justify-center md:justify-between'>
          <div className='w-full md:w-1/3'>
            <motion.p className='text-4xl md:text-6xl'>{satisfaction}%</motion.p>
            <span className='text-sm md:text-xl text-center text-zinc-500'>Customer Satisfaction</span>
          </div>
          <div className='w-full md:w-1/3'>
            <motion.p className='text-4xl md:text-6xl'>{destinations}+</motion.p>
            <span className='text-sm md:text-xl text-center text-zinc-500'>Popular Destination</span>
          </div>
          <div className='w-full md:w-1/3'>
            <motion.p className='text-4xl md:text-6xl'>{guides}+</motion.p>
            <span className='text-sm md:text-xl text-center text-zinc-500'>Experience Guide</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
