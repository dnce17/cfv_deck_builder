const InputBox = ({placeholder}) => {
  return (
    <input
      type='text'
      className='text-black font-bold w-[250px] h-[30px] p-4 rounded-4xl text-xl bg-[#D9D9D9] border-3 border-[#FFFFFF]' 
      placeholder={placeholder}
    />
  )
}

export default InputBox