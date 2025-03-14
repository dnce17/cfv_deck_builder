import React from 'react'
import { Link } from 'react-router-dom'

const MenuBtn = ({ redirectTo = '/', ctnrClass, imgClass='', imgPath, altText, menuText }) => {
  return (
    <Link
      to={redirectTo}
      className={`relative block w-[300px] h-[350px] border-2 bg-linear-to-t rounded-md ${ctnrClass}`}
    >
      <img src={imgPath} alt={altText} className={`mx-auto ${imgClass}`} />
      <p className='absolute bottom-3 left-[50%] transform -translate-x-1/2 text-white font-bold text-2xl'>
        {menuText}
      </p>
    </Link>
  )
}

export default MenuBtn