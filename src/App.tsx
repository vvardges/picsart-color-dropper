import React, {useState} from 'react';
import './App.css';
import image from './assets/default.jpg';
import {ImageColorPicker} from "./components/ImageColorPicker";
import {Header} from "./components/Header";

function App() {
    const [pickedColor, setPickedColor] = useState('Click to pick a color');
    const [zoom, setZoom] = useState(1);
    return (
        <div className="App">
            <Header pickedColor={pickedColor} onZoomChange={(zoom) => setZoom(zoom)} zoom={zoom}/>
            <ImageColorPicker imgSrc={image} onColorPick={(color) => setPickedColor(color)} zoom={zoom}/>
        </div>
    );
}

export default App;
