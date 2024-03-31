import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilState } from 'recoil'
import { atomSelectorFamily } from './atoms'

function App() {
  return (
    <>
      <RecoilRoot>
        <Todo id={1} /><br/>
        <Todo id={2} /><br/>
        <Todo id={2} />
      </RecoilRoot>
    </>
  )
}

function Todo({id}){
  const [todo, setTodo] = useRecoilState(atomSelectorFamily(id))
  return <div>
    {todo.title}<br/>
    {todo.description}
    <br/>
  </div>
}

export default App
