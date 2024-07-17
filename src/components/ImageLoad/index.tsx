import Image from 'next/image'
import React from 'react'

export default function ImageLoad({src,alt}:{src:string,alt:string}) {
  return (
    <Image src={src} alt={alt} width={0} height={0} style={{ width: 'auto', height: '100%' }} />
  )
}
