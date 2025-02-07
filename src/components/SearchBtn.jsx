import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBtn = () => {
  return (
    <div className='flex bg-[#003348] border-3 border-[#7AD7E6] w-fit h-fit p-2'>
      <button className='text-3xl text-[#C9F0FF]'>
        Search
      </button>
      <FaMagnifyingGlass size={35} className={'ml-2'} />
    </div>
  )
}

export default SearchBtn