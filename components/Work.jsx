import { workData } from '@/assets/assets'
import React from 'react'
import { motion } from "motion/react"

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        My portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        Here are some key responsibilities and achievements from my recent finance roles,
        including accounts receivable management, returns and claims analysis, and daily cash operations.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='grid grid-cols-auto my-10 gap-5'
      >
        {workData.map(({ title, tag, description }, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            key={index}
            className='border border-gray-300 rounded-xl p-6 bg-white/80 dark:bg-darkHover/70 dark:border-white/30 hover:shadow-lg hover:-translate-y-1 duration-500'
          >
            <div className='mb-3'>
              <h3 className='font-semibold text-gray-800 dark:text-white mb-1'>
                {title}
              </h3>
              <p className='text-xs uppercase tracking-wide text-gray-500 dark:text-white/60'>
                {tag}
              </p>
            </div>
            <p className='text-sm text-gray-700 dark:text-white/80 leading-5'>
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Work
