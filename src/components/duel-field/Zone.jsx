const Zone = ({ zoneName='', size='w-[60px] h-[86.25px]', classes='', placeholderText='' }) => {
  return (
    <div className={`${zoneName} ${size} ${classes} bg-gray-400 rounded-xl`}>{placeholderText}</div>
  )
}

export default Zone