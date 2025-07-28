

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Car(props) {
  const { nodes, materials } = useGLTF('/models/free_hyper-realistic_model_of_bmw_m8_competition.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[Math.PI, 0, 0]} scale={100}>
          <group position={[0, 0.077, -0.008]}>
            <mesh geometry={nodes.Object_48_rim001_0.geometry} material={materials['rim.001']} />
            <mesh geometry={nodes.Object_48_rim001_0_1.geometry} material={materials['rim.001']} />
          </group>
          <group position={[0, 0.077, -0.008]}>
            <mesh geometry={nodes.Object_50_rim001_0.geometry} material={materials['rim.001']} />
            <mesh geometry={nodes.Object_50_rim001_0_1.geometry} material={materials['rim.001']} />
          </group>
          <group position={[0, 0.077, -0.008]}>
            <mesh geometry={nodes.Object_52_rim001_0.geometry} material={materials['rim.001']} />
            <mesh geometry={nodes.Object_52_rim001_0_1.geometry} material={materials['rim.001']} />
          </group>
          <group position={[0, 0.077, -0.008]}>
            <mesh geometry={nodes.Object_54_rim001_0.geometry} material={materials['rim.001']} />
            <mesh geometry={nodes.Object_54_rim001_0_1.geometry} material={materials['rim.001']} />
          </group>
          <mesh geometry={nodes.Object_2_BMW_M8RewardRecycled_2020BadgeB_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020BadgeB_Material} />
          <mesh geometry={nodes.Object_3_BMW_M8RewardRecycled_2020LicensePlateDefaultA_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020LicensePlateDefaultA_Material} />
          <mesh geometry={nodes.Object_4_BMW_M8RewardRecycled_2020LightA_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020LightA_Material} />
          <mesh geometry={nodes.Object_5_BMW_M8RewardRecycled_2020Base_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Base_Material} />
          <mesh geometry={nodes.Object_8_BMW_M8RewardRecycled_2020Grille3A_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Grille3A_Material} />
          <mesh geometry={nodes.Object_9_BMW_M8RewardRecycled_2020Grille4A_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Grille4A_Material} />
          <mesh geometry={nodes.Object_10_BMW_M8RewardRecycled_2020Grille5A_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Grille5A_Material} />
          <mesh geometry={nodes.Object_11_BMW_M8RewardRecycled_2020Grille6A_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Grille6A_Material} />
          <mesh geometry={nodes.Object_12_BMW_M8RewardRecycled_2020SeatBelt_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020SeatBelt_Material} />
          <mesh geometry={nodes.Object_13_BMW_M8RewardRecycled_2020WindowInside_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020WindowInside_Material} />
          <mesh geometry={nodes.Object_14_BMW_M8RewardRecycled_2020InteriorColourZoneA_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020InteriorColourZoneA_Material} />
          <mesh geometry={nodes.Object_15_redlight_0.geometry} material={materials.redlight} />
          <mesh geometry={nodes.Object_16_whitelight_0.geometry} material={materials.whitelight} />
          <mesh geometry={nodes.Object_18_BMW_M8RewardRecycled_2020Base_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Base_Material} />
          <mesh geometry={nodes.Object_19_BMW_M8RewardRecycled_2020Carbon1_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Carbon1_Material} />
          <mesh geometry={nodes.Object_20_BMW_M8RewardRecycled_2020Carbon1_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Carbon1_Material} />
          <mesh geometry={nodes.Object_21_BMW_M8RewardRecycled_2020Carbon1_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Carbon1_Material} />
          <mesh geometry={nodes.Object_22_BMW_M8RewardRecycled_2020Carbon1_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Carbon1_Material} />
          <mesh geometry={nodes.Object_23_BMW_M8RewardRecycled_2020Carbon1_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Carbon1_Material} />
          <mesh geometry={nodes.Object_26_BMW_M8RewardRecycled_2020Coloured_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Coloured_Material} />
          <mesh geometry={nodes.Object_27_BMW_M8RewardRecycled_2020Coloured_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Coloured_Material} />
          <mesh geometry={nodes.Object_28_BMW_M8RewardRecycled_2020Coloured_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Coloured_Material} />
          <mesh geometry={nodes.Object_29_BMW_M8RewardRecycled_2020Coloured_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Coloured_Material} />
          <mesh geometry={nodes.Object_30_BMW_M8RewardRecycled_2020Coloured_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Coloured_Material} />
          <mesh geometry={nodes.Object_33_BMW_M8RewardRecycled_2020EngineA_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020EngineA_Material} />
          <mesh geometry={nodes.Object_34_BMW_M8RewardRecycled_2020EngineA_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020EngineA_Material} />
          <mesh geometry={nodes.Object_35_BMW_M8RewardRecycled_2020Grille2A_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Grille2A_Material} />
          <mesh geometry={nodes.Object_36_BMW_M8RewardRecycled_2020InteriorA_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020InteriorA_Material} />
          <mesh geometry={nodes.Object_37_BMW_M8RewardRecycled_2020InteriorA_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020InteriorA_Material} />
          <mesh geometry={nodes.Object_38_BMW_M8RewardRecycled_2020InteriorTillingColourZoneA_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020InteriorTillingColourZoneA_Material} />
          <mesh geometry={nodes.Object_39_BMW_M8RewardRecycled_2020Paint_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Paint_Material} />
          <mesh geometry={nodes.Object_40_BMW_M8RewardRecycled_2020Paint_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Paint_Material} />
          <mesh geometry={nodes.Object_41_BMW_M8RewardRecycled_2020Paint_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Paint_Material} />
          <mesh geometry={nodes.Object_42_BMW_M8RewardRecycled_2020Paint_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Paint_Material} />
          <mesh geometry={nodes.Object_43_BMW_M8RewardRecycled_2020Paint_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Paint_Material} />
          <mesh geometry={nodes.Object_44_BMW_M8RewardRecycled_2020Paint_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Paint_Material} />
          <mesh geometry={nodes.Object_45_BMW_M8RewardRecycled_2020Window_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Window_Material} />
          <mesh geometry={nodes.Object_46_badge001_0.geometry} material={materials['badge.001']} position={[0, 0.076, -0.008]} />
          <mesh geometry={nodes.Object_47_col2_0.geometry} material={materials.col2} />
          <mesh geometry={nodes.Object_49_rim001_0.geometry} material={materials['rim.001']} position={[0, 0.077, -0.008]} />
          <mesh geometry={nodes.Object_51_rim001_0.geometry} material={materials['rim.001']} position={[0, 0.077, -0.008]} />
          <mesh geometry={nodes.Object_53_rim001_0.geometry} material={materials['rim.001']} position={[0, 0.077, -0.008]} />
          <mesh geometry={nodes.Object_55_rim001_0.geometry} material={materials['rim.001']} position={[0, 0.077, -0.008]} />
          <mesh geometry={nodes.Object_56_rotor_0.geometry} material={materials.rotor} position={[0, 0.077, -0.008]} />
          <mesh geometry={nodes.Object_57_tire001_0.geometry} material={materials['tire.001']} position={[0, 0.077, -0.008]} />
          <mesh geometry={nodes.Object_40001_BMW_M8RewardRecycled_2020Paint_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Paint_Material} />
          <mesh geometry={nodes.Object_40002_BMW_M8RewardRecycled_2020Paint_Material_0.geometry} material={materials.BMW_M8RewardRecycled_2020Paint_Material} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/free_hyper-realistic_model_of_bmw_m8_competition.glb')
