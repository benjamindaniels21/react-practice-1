import React from 'react'
import features from './features'



export default function List() {
  return (
    <div>
        {features.map((element) => (
            <button className='button'>{element}</button>
        ))}

    </div>
  )
}
