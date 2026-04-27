# Guide: Adding Your Custom 3D Models

This guide will walk you through replacing the procedural (code-generated) 3D shapes on the website with your actual 3D files exported from software like **Blender**, **SketchUp**, **3ds Max**, or **Rhino**.

---

## 1. Prepare Your Model
Before adding the model to the website, ensure it's optimized for the web:
1. Export your model in the **`.glb`** or **`.gltf`** format. This is the web standard for 3D graphics.
2. Ensure the file size is relatively small (ideally under 5MB-10MB). 
3. **Important:** Compress textures and bake your lighting if possible, to guarantee smooth 60fps performance on mobile devices.

## 2. Place the Model File
Move your exported `.glb` file into the `public` directory of the Next.js project. 
For example, create a folder called `models`:
`d:\project\AMDC\amdc-site\public\models\my-building.glb`

*(Any file inside the `public` folder is automatically hosted and accessible via a standard URL path like `/models/my-building.glb`)*.

---

## 3. Load the Model in React

Now you need to tell React to use your model instead of the code-generated shapes.
Open the file where all 3D logic lives:
📍 `src/components/home/ThreeDSection.jsx`

### Step A: Import `useGLTF`
At the top of the file, ensure you import `useGLTF` from the `@react-three/drei` helper library:
```jsx
// At the top of ThreeDSection.jsx
import { useGLTF } from "@react-three/drei";
```

### Step B: Create a Component for Your Model
Scroll down to where the current models are defined (e.g., `VillaModel`, `TowerModel`). Add your own custom component:

```jsx
export function CustomBuildingModel({ rotY = 0 }) {
  // 1. Load the model from your public folder
  const { scene } = useGLTF("/models/my-building.glb");
  const groupRef = useRef();

  // 2. Animate rotation (Optional)
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (rotY - groupRef.current.rotation.y) * 0.05;
    }
  });

  // 3. Render it
  return (
    <group ref={groupRef} position={[0, -1, 0]} scale={1.5}>
      {/* clone: true allows rendering the model multiple times safely */}
      <primitive object={scene.clone()} />
    </group>
  );
}
```

### Step C: Use the Model!
Now simply swap out any of the old models with `<CustomBuildingModel />`. 
For example, inside `ProjectModel3D` or the `HomeThreeDSection`, you can directly mount it:
```jsx
<Canvas>
   <CustomBuildingModel />
</Canvas>
```

---

## Troubleshooting
- **Black Model?** You need lights. Ensure you have ambient light (`<ambientLight intensity={1} />`) or a directional light (`<directionalLight />`) set up in your `<Canvas>`.
- **Preloading Models:** If your model takes too long to show up, you can preload it at the very bottom of `ThreeDSection.jsx` like this:
  `useGLTF.preload("/models/my-building.glb");`
