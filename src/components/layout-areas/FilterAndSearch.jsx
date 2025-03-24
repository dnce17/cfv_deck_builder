import { useState } from 'react'
import { filterDropdownOptions, checkHandler } from '../../../helpers'

import TextInputBox from '../BoxTextInput'
import DropdownBox from '../BoxDropdown'
import CheckBox from '../CheckBox'
import SearchBtn from '../BtnSearch'

const FilterAndSearch = ({ setFilterVals, setResetPagination }) => {
  const filterClasses = 'bg-[#0D2C3A] border border-[#308492] p-2 ml-2 text-center flex justify-center items-center';
  const searchInputClasses = 'text-black font-bold w-[250px] h-[30px] p-4 rounded-4xl text-xl bg-[#D9D9D9] border-3 border-[#FFFFFF]';

  const [cardName, setCardName] = useState('');
  const [cardText, setCardText] = useState('');
  const [grade, setGrade] = useState('');
  const [cardType, setCardType] = useState(filterDropdownOptions.cardTypes[0]);
  const [nation, setNation] = useState(filterDropdownOptions.nations[0]);
  const [race, setRace] = useState('');
  const [triggerType, setTriggerType] = useState(filterDropdownOptions.triggers[0]);
  const [rideslinesOnly, setRideslinesOnly] = useState(false);

  // No point in comparing empty values ('') to card database
  const removeEmptyKeys = (obj) => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      value != '' && (acc[key] = value); // Keep only non-empty values
      return acc;
    }, {});
  };

  return (
    <section className='filtersAndSearch-area bg-[#1A263D] border border-[#26519A] flex justify-evenly'>
      {/* Col 1 */}
      <div className='flex flex-col justify-evenly'>
        <DropdownBox
          header='Trigger Type'
          className={`${filterClasses} w-[100px]`}
          dropdownOptions={filterDropdownOptions.triggers}
          currentValue={triggerType}
          onChange={setTriggerType}
        />
        <CheckBox
          header='Ridelines Only'
          inputClassName='w-[30px] h-[30px] ml-10'
          currentValue={rideslinesOnly}
          onChange={() => checkHandler(rideslinesOnly, setRideslinesOnly)}
        />
      </div>
      {/* Col 2 */}
      <div className='flex flex-col justify-evenly'>
        <DropdownBox
          header='Nation'
          className={`${filterClasses} w-[180px]`}
          dropdownOptions={filterDropdownOptions.nations}
          currentValue={nation}
          onChange={setNation}
        />
        <TextInputBox
          header='Race'
          className={`${filterClasses} w-[180px]`}
          currentValue={race}
          onChange={setRace}
        />
      </div>
      {/* Col 3 */}
      <div className='flex flex-col justify-evenly'>
        <TextInputBox
          header='Grade'
          className={`${filterClasses} w-[50px]`}
          currentValue={grade}
          onChange={setGrade}
        />
        <DropdownBox
          header='Card Type'
          className={`${filterClasses} w-[150px]`}
          dropdownOptions={filterDropdownOptions.cardTypes}
          currentValue={cardType}
          onChange={setCardType}
        />
      </div>
      {/* Col 4 */}
      <div className='flex flex-col items-center justify-evenly'>
        <TextInputBox
          className={searchInputClasses}
          placeholder='Card Name'
          currentValue={cardName}
          onChange={setCardName}
          headerVisible={false}
        />
        <TextInputBox
          className={searchInputClasses}
          placeholder='Card Text'
          currentValue={cardText}
          onChange={setCardText}
          headerVisible={false}
        />
        <SearchBtn
          clickFunc={() => {
            setFilterVals(removeEmptyKeys({
              'name': cardName,
              'text': cardText,
              'grade': `${grade != '' ? Number(grade) : grade}`, // Number() with no arg return 0, which we don't want
              'cardType': cardType,
              'nation': nation,
              'race': race,
              'triggerType': triggerType,
              'rideline': rideslinesOnly,
            }))

            setResetPagination(true)
          }}
        />
      </div>
    </section>
  )
}

export default FilterAndSearch