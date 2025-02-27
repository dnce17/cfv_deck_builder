const Btn = ({
  text,
  textColor = 'text-[#00B8C7]',
  borderColor = 'border-[#008494]',
  dropShadow = 'drop-shadow-[0px_0px_4px_#008592]',
  fromGradient = 'from-[#037383]',
  toGradient = 'to-[#083540]',
}) => {

  return (
    <button className={
      `
        w-[5.5rem] h-[2.5rem] mx-2 rounded-tl-[20px] rounded-br-[20px] border bg-linear-to-t
        ${textColor} ${borderColor} ${dropShadow} ${fromGradient} ${toGradient}
      `
    }>
      <p className='max-w-[90%] mx-auto text-sm font-medium'>{text}</p>
    </button>
  )
}

export default Btn