import React from "react";
import ImageUploader from "./components/ImageUploader";

type Props = {
  pickedColor: string;
  onZoomChange: (e: number) => void;
  zoom: number;
  onImageUpload: (img: string) => void;
  isPickerEnabled: boolean;
  onPickerClick: () => void;
};
const Header = ({
  pickedColor,
  onZoomChange,
  zoom,
  onImageUpload,
  isPickerEnabled,
  onPickerClick,
}: Props) => {
  return (
    <div className="App-header">
      <div className="App-header_toolbar">
        <button onClick={onPickerClick}>Mode</button>
        {isPickerEnabled && (
          <>
            <input
              type="range"
              min="1"
              max="10"
              value={zoom}
              onChange={(e) => onZoomChange(Number(e.target.value))}
            />
            zoom: {zoom}
          </>
        )}
      </div>
      {isPickerEnabled && <b>{pickedColor.toUpperCase()}</b>}
      <ImageUploader onImageUpload={onImageUpload} />
    </div>
  );
};

export default Header;
