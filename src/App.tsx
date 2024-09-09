import React, { useState } from "react";
import "./App.css";
import defaultImage from "./assets/default.jpg";
import { ImageColorPicker } from "./components/ImageColorPicker";
import { Header } from "./components/Header";

function App() {
  const [pickedColor, setPickedColor] = useState("Click to pick a color");
  const [zoom, setZoom] = useState(1);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>(defaultImage);
  const [isPickerEnabled, setIsPickerEnabled] = useState(false);
  return (
    <div className="App">
      <Header
        pickedColor={pickedColor}
        onZoomChange={setZoom}
        zoom={zoom}
        onImageUpload={setImagePreviewUrl}
        isPickerEnabled={isPickerEnabled}
        onPickerClick={() => setIsPickerEnabled(!isPickerEnabled)}
      />
      <ImageColorPicker
        imgSrc={imagePreviewUrl}
        onColorPick={(color) => setPickedColor(color)}
        zoom={zoom}
        isPickerEnabled={isPickerEnabled}
      />
    </div>
  );
}

export default App;
