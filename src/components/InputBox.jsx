const InputBox = ({placeholder}) => {
  return (
    <input
      type='text'
      className='text-black font-bold w-[300px] h-[30px] p-5 rounded-4xl text-2xl bg-[#D9D9D9] border-3 border-[#FFFFFF]' 
      placeholder={placeholder}
    />
  )
}

export default InputBox