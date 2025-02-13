import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBtn = ({setFilterVals, filterVals}) => {
  return (
    <div 
      className='flex items-center bg-[#003348] border-3 border-[#7AD7E6] w-fit h-fit p-1'
      onClick={() => setFilterVals(filterVals)}
    >
      <button className='text-2xl text-[#C9F0FF]'>
        Search
      </button>
      <FaMagnifyingGlass size={25} className={'ml-2'} />
    </div>
  )
}

export default SearchBtn