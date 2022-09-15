import React from 'react'

const features = [
   "like",
   "comment",
   "delete",
   "reaction"
]


export default function List() {
  return (
    <div>
        {features.map((element) => (
            <button>{element}</button>
        ))}

    </div>
  )
}
