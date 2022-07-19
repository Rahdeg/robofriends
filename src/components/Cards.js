import React from 'react'
import { AnimatePresence, motion } from "framer-motion"

const Cards = ({Robots}) => {
    
  return (
    <AnimatePresence  initial={false}>
    <div className='flex flex-wrap items-center justify-evenly my-24 gap-3'>

    {Robots ? Robots.map((data,idx)=>(
        <motion.div 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="max-w-sm rounded overflow-hidden bg-navBar shadow-lg duration-100 ease-in-out cursor-pointer mt-3" key={idx}>
        <img className="w-full" src= {`https://robohash.org/${data.id}?200*200`} alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center text-white">{data.name}</div>
          <p className=" text-textBase text-base text-center">
            {data.username} 
          </p>
          <p className="text-textBase text-base text-center">
           {data.email}
          </p>
        </div>
      </motion.div>
    )):<h1 className="">LOADING</h1>}

    </div>
    </AnimatePresence>
  )
}

export default Cards