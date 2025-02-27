import { AiOutlineExclamationCircle } from 'react-icons/ai';

const InvalidDeckText = ({errMsg}) => {
  return (
    <div className='flex items-center'>
      <AiOutlineExclamationCircle size={30} className='text-[#E1574C]' />
      <p className='ml-2 text-[#E1574C] text-2xl'>{errMsg}</p>
    </div>
  )
}

export default InvalidDeckText