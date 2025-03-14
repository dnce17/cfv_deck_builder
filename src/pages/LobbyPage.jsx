import { useEffect } from 'react'
import MenuBtn from '../components/MenuBtn'
import Btn from '../components/Btn'

import MenuBg from '/src/assets/imgs/menu_bg.jpg'  // Path must be formatted like this for bg-[url()] to work
import DuelIcon from '../assets/imgs/duel_icon.png'
import DeckBuilderIcon from '../assets/imgs/deck_builder_icon.png'

const LobbyPage = () => {
  return (
    <div className={`h-screen flex flex-col justify-center items-center bg-[url(${MenuBg})] bg-cover bg-bottom`}>
      <Btn
        text='Logout'
        textColor='text-white'
        textSize='text-xl'
        customizeBtn={true} 
        customBtnClass='absolute right-2 top-2 py-1 px-2 rounded-md border-2 border-[#857D30] bg-linear-to-t from-[#AC951E] to-[#4B3A0B]'
      />
      <div className='flex justify-evenly w-full'>
        <MenuBtn
          redirectTo='#'
          ctnrClass='from-[#D57400] to-[#DFA200] border-[#D09601]'
          imgPath={DuelIcon}
          altText='Duel Icon'
          menuText='Duel'
        />
        <MenuBtn
          redirectTo='/deck-builder'
          ctnrClass='from-[#037383] to-[#083540] border-[#008494]'
          imgClass='w-[270px] m-20'
          imgPath={DeckBuilderIcon}
          altText='Deck Builder'
          menuText='Deck Builder'
        />
      </div>
    </div>
  )
}

export default LobbyPage