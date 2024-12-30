```javascript
import { Camera } from 'expo-camera';
import { useState } from 'react';

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};

const CameraScreen = () => {
  const [scanned, setScanned] = useState(null);

  const handleBarCodeScanned = debounce((scanned) => {
    setScanned(scanned);
  }, 500); // Debounce for 500ms

  return (
    <Camera style={{ flex: 1 }} onBarCodeScanned={handleBarCodeScanned}>
      {/* ... rest of the component ... */}
    </Camera>
  );
};
```