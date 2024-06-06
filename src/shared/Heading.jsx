import React from 'react'

const Heading = ({title, subtitle}) => {
  return (
    <div className='text-center my-10 max-w-[600px] mx-auto space-y-2  '>
        <h1 className='text-3xl font-bold lg:text-4xl '>{title} </h1>
        <p className='text-lg text-gray-400 '>{subtitle} </p>
    </div>
  )
}

export default Heading