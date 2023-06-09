import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { AttachRaycastOnSurface } from '../helpers/RaycastOnSurface'
import { ContactShadows, RoundedBox, Shadow } from '@react-three/drei'

const Box = () => {
  const refBox = useRef(null)

  useFrame((_, delta) => {
    refBox.current.rotation.x = refBox.current.rotation.y += delta
  })

  // return (
  //   <group position={[0, 0, -3]}>
  //     <ambientLight intensity={0.4} />
  //     <directionalLight intensity={2} position={[4, 10, 4]} />
  //     <RoundedBox
  //       position={[0, 1, 0]}
  //       ref={refBox}
  //       args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
  //       radius={0.05} // Radius of the rounded corners. Default is 0.05
  //       smoothness={4} // The number of curve segments. Default is 4
  //       creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
  //     >
  //       <meshStandardMaterial color="hotpink" />
  //     </RoundedBox>
  //     <Shadow
  //       color="red"
  //       colorStop={0}
  //       opacity={0.5}
  //       fog={false} // Reacts to fog (default=false)
  //     />
  //     {/* <ContactShadows opacity={1} scale={10} blur={1} far={10} resolution={256} color="red" /> */}
  //   </group>
  // )

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight intensity={2} position={[4, 10, 4]} />
      {/* <AttachRaycastOnSurface position={[0, 1, -3]}> */}
      <group position={[0, 1, 0]} ref={refBox} onClick={() => {}}>
        {/* <mesh position={[1, 0, 0]}>
            <boxBufferGeometry />
            <meshPhysicalMaterial transparent color={'red'} side={THREE.FrontSide} />
          </mesh> */}

        <mesh castShadow>
          <boxBufferGeometry />
          <meshPhysicalMaterial transparent depthWrite={false} side={THREE.FrontSide} />
        </mesh>

        {/* <mesh position={[-1, 0, 0]}>
            <boxBufferGeometry />
            <meshPhysicalMaterial transparent color={'blue'} side={THREE.FrontSide} />
          </mesh> */}
      </group>
      {/* </AttachRaycastOnSurface> */}

      {/* <Shadow
        color="red"
        colorStop={0}
        opacity={0.8}
        fog={false} // Reacts to fog (default=false)
      /> */}

      <ContactShadows opacity={1} scale={10} blur={1} far={10} resolution={256} color="orange" />
    </>
  )
}

export default Box
