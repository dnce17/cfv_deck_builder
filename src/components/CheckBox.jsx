const Checkbox = ({ header, className = '' }) => {
  return (
    <div className='flex justify-center items-center text-white font-bold w-fit'>
      <h2 className='w-[65px] text-center'>{header}</h2>
      <input type='checkbox' className={className} />
    </div>
  )
}

export default Checkbox