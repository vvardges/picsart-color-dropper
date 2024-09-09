import React, { useState } from "react";
import "./App.css";
import defaultImage from "./assets/default.jpg";
import { ImageColorPicker } from "./components/ImageColorPicker";
import { Header } from "./components/Header";

function App() {
  const [pickedColor, setPickedColor] = useState("#e0e0e0");
  const [zoom, setZoom] = useState(1);
  const [imageUrl, setImageUrl] = useState<string>(defaultImage);
  const [isPickerEnabled, setIsPickerEnabled] = useState(false);
  return (
    <div className="App">
      <Header
        pickedColor={pickedColor}
        onZoomChange={setZoom}
        zoom={zoom}
        onImageUpload={setImageUrl}
        isPickerEnabled={isPickerEnabled}
        onPickerClick={() => setIsPickerEnabled(!isPickerEnabled)}
      />
      <ImageColorPicker
        image={imageUrl}
        onColorPick={setPickedColor}
        zoom={zoom}
        isPickerEnabled={isPickerEnabled}
      />
    </div>
  );
}

export default App;
