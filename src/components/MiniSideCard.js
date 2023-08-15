import React from 'react'
import TypeButton from './TypeButton'

export default function MiniSideCard({img,category,title}) {
  return (
    <div className='flex flex-row gap-3 '>
      <img className='rounded-xl w-60 h-36' src={img}/>
      <div>
        <TypeButton category={category} />
        <h3 className='hover:underline text-xl lg:text-2xl mt-2'>
          {title}
        </h3>
      </div>
    </div>
  )
}
