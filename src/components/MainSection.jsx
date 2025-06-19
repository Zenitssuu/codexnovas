import React from 'react'
import Header from './Header'
import Hero from './Hero'

const MainSection = ({index, setIndex, handleChange}) => {
  return (
    <div className='flex flex-col mt-[30px] space-y-[50px]'>
      <Header />
      <Hero index={index} setIndex={setIndex} handleChange={handleChange} />
    </div>
  )
}

export default MainSection
