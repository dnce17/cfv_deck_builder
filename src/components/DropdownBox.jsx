const DropdownBox = ({ header, className = '', dropdownOptions }) => {
  return (
    <>
      <div className='flex justify-center items-center text-white font-bold w-fit'>
        <h2 className='w-[65px] text-center'>{header}</h2>
        <select name={header} id={header} className={className}>
          {Array.from({ length: dropdownOptions.length }, (_, i) =>
            <option value={dropdownOptions[i]}>{dropdownOptions[i]}</option>
          )}
        </select>
      </div>
    </>
  )
}

export default DropdownBox