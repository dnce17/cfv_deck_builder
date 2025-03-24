const BoxTextInput = ({
  header = '',
  className = '',
  placeholder = '',
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
            <input
              type='text'
              className={className}
              placeholder={placeholder}
              value={currentValue}
              onChange={(e) => onChange(e.target.value)}
            />
          </div>
          : <input
            type='text'
            className={className}
            placeholder={placeholder}
            value={currentValue}
            onChange={(e) => onChange(e.target.value)}
          />
      }
    </>
  )
}

export default BoxTextInput