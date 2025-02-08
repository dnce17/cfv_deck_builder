const FilterCard = ({ header, info, infoBoxDimensions }) => {
  return (
    <div className='flex justify-center items-center text-white font-bold w-fit'>
      <h2 className='w-[65px] text-center'>{header}</h2>
      {/* text-center centers words that take up +1 lines; justify-center centers words that just 1 line */}
      {/* TODO: Change to dropdown list */}
      <p className={`bg-[#0D2C3A] border border-[#308492] p-2 ml-2 text-center flex justify-center items-center ${infoBoxDimensions}`}>
        {info}
      </p>

      {/* TESTING */}
      {/* <label for={header} className='w-[65px] text-center'>{header}</label>
      <select name={header} id={header} className='className={`bg-[#0D2C3A] border border-[#308492] p-2 ml-2 text-center flex justify-center items-center ${infoBoxDimensions}`}'>
        <option value='placeholder'>Test</option>
        <option value='placeholder-2'>Test-2</option>
      </select> */}
    </div>
  )
}

export default FilterCard