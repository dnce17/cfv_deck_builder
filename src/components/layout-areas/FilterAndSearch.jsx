import { filterDropdownOptions } from '../../../helpers'

import TextInputBox from '../TextInputBox'
import DropdownBox from '../DropdownBox'
import CheckBox from '../CheckBox'

import SearchBtn from '../SearchBtn'

const FilterAndSearch = () => {
  const filterClasses = 'bg-[#0D2C3A] border border-[#308492] p-2 ml-2 text-center flex justify-center items-center';
  const searchInputClasses = 'text-black font-bold w-[250px] h-[30px] p-4 rounded-4xl text-xl bg-[#D9D9D9] border-3 border-[#FFFFFF]'

  return (
    <section className='filtersAndSearch-area bg-[#1A263D] border border-[#26519A] flex justify-evenly'>
      <div className='flex flex-col justify-evenly'>
        <DropdownBox
          header='Trigger Type'
          className={`${filterClasses} w-[100px]`}
          dropdownOptions={filterDropdownOptions.triggers}
        />
        <CheckBox header='Ridelines' className='w-[30px] h-[30px] ml-10' />
      </div>

      <div className='flex flex-col justify-evenly'>
        <DropdownBox
          header='Nation'
          className={`${filterClasses} w-[180px]`}
          dropdownOptions={filterDropdownOptions.nations}
        />
        <TextInputBox header='Race' className={`${filterClasses} w-[180px]`} />
      </div>
      <div className='flex flex-col justify-evenly'>
        <TextInputBox header='Grade' className={`${filterClasses} w-[50px]`} />
        <DropdownBox
          header='Card Type'
          className={`${filterClasses} w-[150px]`}
          dropdownOptions={filterDropdownOptions.cardTypes}
        />
      </div>
      <div className='flex flex-col items-center justify-evenly'>
        <TextInputBox className={searchInputClasses} placeholder='Card Name' headerVisible={false} />
        <TextInputBox className={searchInputClasses} placeholder='Card Text' headerVisible={false} />
        <SearchBtn />
      </div>
    </section>
  )
}

export default FilterAndSearch