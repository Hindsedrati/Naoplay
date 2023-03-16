import React from 'react';
import './partenrs.scss';
import { GiPadlockOpen } from 'react-icons/gi';
import { BiExclude } from 'react-icons/bi';
import { BiShareAlt } from 'react-icons/bi';
import { BiGhost } from 'react-icons/bi';



function Partenrs () {
  return (
    <section className='partenrs'>
      <div className='partenrs__icons'>
      <GiPadlockOpen />
      <BiExclude />
      <BiShareAlt />
      <BiGhost />
      <GiPadlockOpen />
      <BiExclude />
      <BiShareAlt />
      <BiGhost />
      
      
      </div>
    </section>
  )
}

export default Partenrs