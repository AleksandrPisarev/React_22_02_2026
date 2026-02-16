import './App.css'
import Card from './components/card'
import Button from './components/button'
import {data} from './source/data'
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(1)
  const [isClicked, setIsClicked] = useState(null)

  function handlClick(type){
    if (type == 'добавить' && count < data.length) {
      setCount(count + 1)
      setIsClicked(type)
    }
    if (type == 'удалить' && count > 1) {
      setCount(count - 1)
      setIsClicked(type)
    }
  }

  return (
    <>
    <div className='cardlist'>
      {data.slice(0, count).map((item, index) => (
        <Card key={index} {...item} />))}
    </div>
    <div className='batton'>
      <Button active={isClicked == 'добавить'} btnclick={() => handlClick('добавить')}>добавить</Button>
      <Button active={isClicked == 'удалить'} btnclick={() => handlClick('удалить')}>удалить</Button>
    </div>
    </>
  )
}