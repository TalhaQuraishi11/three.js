import './index.css';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { ChromePicker } from 'react-color';

function Model({ color }) {
  const { nodes, materials } = useGLTF('/scene.gltf');

  Object.keys(materials).forEach((key) => {
    materials[key].color.set(color);
  });

  return (
    <group dispose={null}>
       <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.Rib_2X2_468gsm_FRONT_2859} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Rib_2X2_468gsm_FRONT_2859.001']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['Rib_2X2_468gsm_FRONT_2859.002']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Object_8.geometry} material={materials['Rib_2X2_468gsm_FRONT_2859.003']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['Rib_2X2_468gsm_FRONT_2859.004']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['Rib_2X2_468gsm_FRONT_2859.005']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Object_12.geometry} material={materials['Rib_2X2_468gsm_FRONT_2859.006']} />
        <mesh geometry={nodes.Object_13.geometry} material={materials['Rib_2X2_468gsm_FRONT_2859.007']} />
        <mesh geometry={nodes.Object_14.geometry} material={materials['Rib_2X2_468gsm_FRONT_2859.008']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Object_16.geometry} material={materials.Knit_Ponte_Jersey_FRONT_2871} />
        <mesh geometry={nodes.Object_17.geometry} material={materials['Knit_Ponte_Jersey_FRONT_2871.001']} />
        <mesh geometry={nodes.Object_18.geometry} material={materials['Knit_Ponte_Jersey_FRONT_2871.002']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Object_20.geometry} material={materials['Rib_2X2_468gsm_FRONT_2859.009']} />
        <mesh geometry={nodes.Object_21.geometry} material={materials['Rib_2X2_468gsm_FRONT_2859.010']} />
        <mesh geometry={nodes.Object_22.geometry} material={materials['Rib_2X2_468gsm_FRONT_2859.011']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Object_24.geometry} material={materials['Rib_2X2_468gsm_FRONT_2859.012']} />
        <mesh geometry={nodes.Object_25.geometry} material={materials['Rib_2X2_468gsm_FRONT_2859.013']} />
        <mesh geometry={nodes.Object_26.geometry} material={materials['Rib_2X2_468gsm_FRONT_2859.014']} />
      </group>
      <mesh geometry={nodes.Object_28.geometry} material={materials.PT_FABRIC_FRONT_6052} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  );
}

function App() {
  const [color, setColor] = useState("#ffffff");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="card">
          <button
            className="color-picker-button"
            onClick={toggleColorPicker}
          >
            {showColorPicker ? 'Hide Color Picker' : 'Show Color Picker'}
          </button>
          {showColorPicker && (
            <div className="color-picker">
              <ChromePicker color={color} onChange={handleColorChange} />
            </div>
          )}
          <div className="product-canvas">
            <Canvas>
              <Suspense fallback={null}>
                <ambientLight />
                <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                <Model color={color} />
                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
