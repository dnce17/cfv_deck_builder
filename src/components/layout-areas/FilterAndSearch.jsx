import React from 'react'

import FilterCard from '../FilterCard'
import InputBox from '../InputBox'
import SearchBtn from '../SearchBtn'


const FilterAndSearch = () => {
  return (
    <section className='filtersAndSearch-area bg-[#1A263D] border border-[#26519A] flex justify-evenly'>
    <div className='flex flex-col justify-evenly'>
      {/* w-[130px] h-[65px] for the boxes that may have long words if you wanna revert back to that */}
      <FilterCard header='Trigger Type' info='Critical' infoBoxDimensions='w-[100px]' />
      
      <div className='flex justify-center items-center text-white font-bold w-fit'>
        <h2 className='w-[65px] text-center'>View Ridelines</h2>
        <input type='checkbox' className='w-[30px] h-[30px] ml-11' />
      </div>
    </div>
    <div className='flex flex-col justify-evenly'>
      <FilterCard header='Nation' info='Lyrical Monasterio' infoBoxDimensions='w-[180px]' />
      <FilterCard header='Race' info='Zodiac Time Beast' infoBoxDimensions='w-[180px]' />
    </div>
    <div className='flex flex-col justify-evenly'>
      <FilterCard header='Grade' info='10' infoBoxDimensions='w-[50px]' />
      <FilterCard header='Card Type' info='Normal Order' infoBoxDimensions='w-[140px]' />
    </div>
    <div className='flex flex-col items-center justify-evenly'>
      <InputBox placeholder='Card Name' />
      <InputBox placeholder='Card Text' />
      <SearchBtn />
    </div>
  </section>
  )
}

export default FilterAndSearch