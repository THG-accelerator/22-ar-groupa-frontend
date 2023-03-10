/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --transform
Author: Andriano Milanovic (https://sketchfab.com/andriano82)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mario-floor-lamp-15b2782b523b486ea169d6e16e72123f
Title: Mario Floor Lamp
*/

import { useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export function MarioFloorLamp(props) {
  const { nodes, materials } = useGLTF(
    "assets/MarioFloorLamp/scene-transformed.glb"
  );
  const ref = useRef();
  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.5}>
        <group rotation={[Math.PI / 2, props.angle * Math.PI, 0]}>
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials.Mario_Metal}
          />
          <mesh
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.Brass}
          />
          <mesh
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.Glow}
          />
          <mesh
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials.Shuho}
          />
          <mesh
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials.Metal_Chrome}
          />
          <mesh
            geometry={nodes.defaultMaterial_5.geometry}
            material={materials.Shadow}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene-transformed.glb");
