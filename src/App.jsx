import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

function App() {
  return (
    <div className='w-screen h-screen background flex flex-col p-10 overflow-x-hidden'>
      <h1 className='uppercase text-xl lg:text-3xl mb-10 bg-slate-50 p-4 border rounded-2xl text-center font-bold'>RANDOM GIFS</h1>
      <div className="flex flex-col gap-10 justify-between items-center">
        <Random />
        <Tag />
      </div>
    </div>
  )
}

export default App