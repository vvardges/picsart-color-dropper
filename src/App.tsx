import React from 'react';
import './App.css';
import image from './assets/default.jpg';
import {ImageColorPicker} from "./components/ImageColorPicker";

function App() {
    return (
        <div className="App">
            <ImageColorPicker imgSrc={image} onColorPick={(c) => console.log(c)}/>
        </div>
    );
}

export default App;
