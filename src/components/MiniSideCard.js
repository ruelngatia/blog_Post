import { Button } from '@mui/material'
import React from 'react'

export default function MiniSideCard({img,category,title}) {
  return (
    <div className='flex flex-row gap-3 '>
      <img className='rounded-xl lg:h-max md:w-2/5 lg:w-3/5' src={img}/>
      <div>
        <button className='rounded-xl px-3 py-1 border border-sk-blue hover:bg-sk-blue'>
          {category}
        </button>
        <h3 className='hover:underline text-xl lg:text-2xl mt-3'>
          {title}
        </h3>
      </div>
    </div>
  )
}
