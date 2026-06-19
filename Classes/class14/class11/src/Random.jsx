import React from 'react'
import { useParams } from 'react-router-dom'

const Random = () => {
  const params = useParams();
  console.log(params.id)
  return (
    <div>
      <h1
        className="font-bold  text-4xl text-white underline absolute top-20 left-1/2 -translate-1/2 
      "
      >
        {params.id} Page
      </h1>
    </div>
  )
}

export default Random
