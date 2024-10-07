import React from 'react'
import Card from './utils/card'

const Main = () => {
  return (
    <div className='gap-20 flex flex-col'>
      <Card params="Populer" a={0} b={6}/>
      <Card params="TOP UP" a={0} b={20}/>
    </div>
  )
}

export default Main
