const Checkbox = ({ header, inputClassName = '', headerClassName = 'w-[65px] text-center', currentValue, onChange }) => {
  return (
    <div className='flex justify-center items-center text-white font-bold w-fit'>
      {/* <h2 className='w-[65px] text-center'>{header}</h2> */}

      {/* The default for headerClassName is meant to fit in FilterAndSearch area */}
      <h2 className={headerClassName}>{header}</h2>
      <input
        type='checkbox'
        className={inputClassName}
        value={currentValue}
        onChange={onChange}  // Flips b/w boolean depending on previous state
      />
    </div>
  )
}

export default Checkbox