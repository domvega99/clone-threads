import React from 'react'
import Image from 'next/image'
import POS1 from '../../../images/pos1.jpg'
import POS2 from '../../../images/pos2.jpg'

const Picture = () => {
  return (
    <div>
        <Image src={POS1} alt={POS1} ></Image>
        <Image src={POS2} alt={POS2} ></Image>
    </div>
  )
}

export default Picture