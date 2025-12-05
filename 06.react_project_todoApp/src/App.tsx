
import React, { useState } from 'react'
import './App.css'
import type { TodoFormEvent } from './types/todo'

function App() {

  const [newTodo,setNewTodo]=useState<string>('')
  console.log(newTodo)
  const handleSubmit = (e: TodoFormEvent)=>{
    e.preventDefault()
  }
  return (
    <>
     <div>
      <h1 className='text-2xl font-black text-center mt-10'>TODO Apps</h1>
       <form onSubmit={handleSubmit}>
      <div className='w-md mx-auto flex gap-3 mt-2 '>
       
                        <input value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} className='border flex-1 rounded-sm' type="text" name="" id=""  placeholder='Enter todo...'/>
                        <button className='px-2 py-1 bg-amber-300 rounded-md font-semibold ' type='submit'>ADD</button>

       


      </div>
       </form>
     </div>
    </>
  )
}

export default App
