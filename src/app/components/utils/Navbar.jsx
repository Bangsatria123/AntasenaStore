import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="flex py-10 backdrop-blur-30  *:text-white justify-around top-0 fixed-top">
        <Link href="" className='hover:text-Nav duration-300 ease-in-out'>Home</Link>
        <Link href="" className='hover:text-Nav duration-300 ease-in-out'>RPG</Link>
        <Link href="" className='hover:text-Nav duration-300 ease-in-out'>MMORPG</Link>
        <Link href="" className='hover:text-Nav duration-300 ease-in-out'>MOBA</Link>
      </div>
    </div>
  )
}

export default Navbar
