import { useState } from 'react'

const DropdownBox = ({ header, className = '', dropdownOptions, currentValue, onChange }) => {
  return (
    <>
      <div className='flex justify-center items-center text-white font-bold w-fit'>
        <h2 className='w-[65px] text-center'>{header}</h2>
        <select value={currentValue} onChange={(e) => onChange(e.target.value)} className={className}>
          {Array.from({ length: dropdownOptions.length }, (_, i) =>
            <option value={dropdownOptions[i]}>{dropdownOptions[i]}</option>
          )}
        </select>
      </div>
    </>
  )
}

export default DropdownBox