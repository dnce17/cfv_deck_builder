const Btn = ({
  text,
  width = 'w-[90px]',
  height = 'h-[40px]',
  textSize = 'text-sm',
  fontWeight = 'font-medium',
  presetColor = 'blue',
  className = '',
  allowFullCustomize = false,  // Allow full btn customization if desired btn is very different
  clickFunc = () => { console.log('No func added to this btn') }, // Default function to prevent errors
}) => {

  const colorStyles = {
    blue: 'text-[#00B8C7] border-[#008494] from-[#037383] to-[#083540] drop-shadow-[0px_0px_4px_#008592]',
    green: 'text-[#23AD5C] border-[#2A824B] from-[#0F8631] to-[#10361A] drop-shadow-[0px_0px_4px_#10361A]',
    yellow: 'text-[#BFB456] border-[#857D30] from-[#AC951E] to-[#4B3A0B] drop-shadow-[0px_0px_4px_#4B3A0B]',
    red: 'text-[#CE5D5D] border-[#A32B00] from-[#662113] to-[#3C1812] drop-shadow-[0px_0px_4px_#A32B00]',
  };

  return (
    <button
      onClick={clickFunc}
      className={
        allowFullCustomize
          ? className
          : `mx-2 border-2 bg-gradient-to-t rounded-md 
              ${colorStyles[presetColor] || ''} ${className}
              ${width} ${height} ${textSize} ${fontWeight}
            `}
    >
      <p className='max-w-[90%] mx-auto'>{text}</p>
    </button>
  )
}

export default Btn