import React, { useState } from 'react'

function Kategori() {
  const [count, setCount] = useState(1);

  const addCount = () => {
    setCount(count + 1)
  }

  return (
    <div>Kategori
      <div className='h-32'></div>
      <button onClick={addCount}>dd</button>
      <p>{count}</p>
    </div>

  )
}

export default Kategori