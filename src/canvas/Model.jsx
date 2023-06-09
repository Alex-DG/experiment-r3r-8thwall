import React, { Suspense, useRef } from 'react'
import { RayCastSurface } from '../helpers/RaycastOnSurface.jsx'
import Box from './Box.jsx'
import { Sphere } from '@react-three/drei'
import Refraction from './Refraction.jsx'
import ShoeConfigurator from './Shoe.jsx'
import { Portal } from './Portal.jsx'

export default function Model(props) {
  const group = useRef()
  return (
    <>
      {/* <Sphere position={[0, 1, 0]}>
        <meshToonMaterial color={'hotpink'} />
      </Sphere> */}
      {/* <RayCastSurface elRef={group} /> */}
      <group
        ref={group}
        {...props}
        dispose={null}
        onClick={(event) => {
          event.stopPropagation()
        }}>
        <Suspense fallback="null">
          {/* <Box /> */}
          {/* <Refraction /> */}
          {/* <ShoeConfigurator /> */}
          <Portal />
        </Suspense>
      </group>
    </>
  )
}
