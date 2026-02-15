import './App.css'
import Card from './components/card'
import Button from './components/button'
import {data} from './source/data'
import { useState } from 'react'

export default function App() {
  const [count, setVisibleCount] = useState(1);
  function handlClick(type){
    if (type == 'добавить' && count < data.length) {
      setVisibleCount(count + 1);
    }
    if (type == 'удалить' && count > 1) {
      setVisibleCount(count - 1);
    }
  }
  return (
    <>
    <div className='cardlist'>
      {data.slice(0, count).map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
    <div className='batton'>
      <Button btnclick={() => handlClick('добавить')}>добавить</Button>
      <Button btnclick={() => handlClick('удалить')}>удалить</Button>
    </div>
    </>
  )
}