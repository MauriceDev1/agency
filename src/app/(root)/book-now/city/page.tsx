import React from 'react'
import Locations from '../locations'
import Link from 'next/link'
import { FaArrowCircleRight } from "react-icons/fa";

const City = () => {
  const maxlen = Locations.length
  return (
    <div>
        <div className='w-full flex flex-col'>
            {Locations.map(l => <Link href={`/book-now/area/${l.id}`} key={l.id} className={`py-5 border-t ${maxlen === l.id &&  'border-b'}`}>{l.name}</Link>)}
        </div>
    </div>
  )
}

export default City