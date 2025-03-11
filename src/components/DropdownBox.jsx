const DropdownBox = ({
  header = '',
  className = '',
  dropdownOptions,
  currentValue,
  onChange,
  headerVisible = true
}) => {
  return (
    <>
      {
        headerVisible
          ? <div className='flex justify-center items-center text-white font-bold w-fit'>
            <h2 className='w-[65px] text-center'>{header}</h2>
            <select value={currentValue} onChange={(e) => onChange(e.target.value)} className={className}>
              {Array.from({ length: dropdownOptions.length }, (_, i) =>
                <option key={i} value={dropdownOptions[i]}>{dropdownOptions[i]}</option>
              )}
            </select>
          </div>
          : <select value={currentValue} onChange={(e) => onChange(e.target.value)} className={className}>
            {Array.from({ length: dropdownOptions.length }, (_, i) =>
              <option key={i} value={dropdownOptions[i]}>{dropdownOptions[i]}</option>
            )}
          </select>
      }
    </>
  )
}

export default DropdownBox