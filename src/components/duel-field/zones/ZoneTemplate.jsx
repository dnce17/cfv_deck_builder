const ZoneTemplate = ({ 
  zoneName = '', 
  size = 'w-[60px] h-[86.25px]', 
  classes = '', 
  placeholderText = '', 
  children = '',
}) => {

  return (
    <div className={`${zoneName} ${size} ${classes} bg-gray-400 relative flex justify-center`}>
      <p className='absolute'>{placeholderText}</p>
      {children}
    </div>
  )
}

export default ZoneTemplate