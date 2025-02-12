const Checkbox = ({ header, className = '', currentValue, onChange }) => {
  return (
    <div className='flex justify-center items-center text-white font-bold w-fit'>
      <h2 className='w-[65px] text-center'>{header}</h2>
      <input
        type='checkbox'
        className={className}
        value={currentValue}
        onChange={onChange}  // Flips b/w boolean depending on previous state
      />
    </div>
  )
}

export default Checkbox