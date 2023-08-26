'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import Typewriter from 'typewriter-effect';
import Card from '@/components/home/Card';

const Page = () => {
  const ref = React.useRef(null);

  const isInView = useInView(ref, { once: true });

  return (
    <main>
      <section className='flex justify-center items-center'>
        <motion.h1
          initial={{
            y: 200,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          className='w-fit text-xl md:text-5xl lg:text-7xl font-bold'>
          {/* Unlease the power of <span className='text-orange-900'>GNX</span> Linux. */}
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Unlease the power of GNX Linux.')
                .start();
            }}
          />
        </motion.h1>
      </section>

      <section>
        <motion.h2>
          GNX aims to foster Linux growth and promote open source contributions.
        </motion.h2>

        <div className='m-auto w-5/12 grid grid-cols-2 gap-2'>
          <Card
            heading={'Join the open source movement and make a difference!'}
            body={'Contribute to a variety of projects with GNX, and experience the thrill of collaborating in a passionate community.'}
          />
          <Card
            heading={'Discover the power of Debian and Arch Linux distributions.'}
            body={'Expand your knowledge of Linux systems by diving into these popular choices, tailored for smooth user experience.'}
          />

        </div>

        {/* <motion.h3>
          Join the open source movement and make a difference!
        </motion.h3>
        <motion.span>
          Contribute to a variety of projects with GNX, and experience the thrill of collaborating in a passionate community.
        </motion.span>

        <motion.h3>
          Discover the power of Debian and Arch Linux distributions.
        </motion.h3>
        <motion.span>
          Expand your knowledge of Linux systems by diving into these popular choices, tailored for smooth user experience.
        </motion.span> */}
      </section>

      <section>
        <motion.h3 ref={ref} style={{
          transform: isInView ? "none" : "translateX(-200px)"}}>
          UPCOMING EVENTS
        </motion.h3>
        <motion.span>
          Stay infromed with our exiting lineup of gatherings, workshops, and conferances.
        </motion.span>
      </section>

      <section>
        <motion.h3>
          OUR MEMBERS
        </motion.h3>
      </section>

    </main>
  )
}

export default Page