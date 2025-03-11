const Btn = ({
  text,
  textColor = 'text-[#00B8C7]',
  textSize = 'text-sm',
  textWeight = 'font-medium',
  borderColor = 'border-[#008494]',
  borderRadius = 'rounded-md',
  dropShadow = 'drop-shadow-[0px_0px_4px_#008592]',
  fromGradient = 'from-[#037383]',
  toGradient = 'to-[#083540]',
  customizeBtn = false,  // Allow full btn customization if desired btn is very different
  customBtnClass = '',
  clickFunc = () => { console.log('No func added to this btn') } // Default function to prevent errors
}) => {

  return (
    <button
      onClick={clickFunc}
      className={
        customizeBtn 
        ? customBtnClass
        : `w-[5.5rem] h-[2.5rem] mx-2 border-2 bg-linear-to-t
           ${borderRadius} ${borderColor} ${dropShadow} ${fromGradient} ${toGradient}`
      }
    >
      <p className={`max-w-[90%] mx-auto ${textColor} ${textSize} ${textWeight}`}>{text}</p>
    </button>
  )
}

export default Btn