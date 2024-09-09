import React, { useRef } from "react";
import { ColorPreview, ZoomPreview } from "./components";
import {
  ImageColorPickCanvas,
  ImageColorPickContainer,
} from "./ImageColorPicker.styles";
import { useColorPick } from "./hooks";

type ImageColorPickerProps = {
  onColorPick: (color: string) => void;
  imgSrc: string;
  zoom?: number;
  isPickerEnabled?: boolean;
};

const ImageColorPicker = ({
  onColorPick,
  imgSrc,
  zoom,
  isPickerEnabled,
}: ImageColorPickerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { color, coordinates, dimensions } = useColorPick(canvasRef, imgSrc);

  return (
    <ImageColorPickContainer data-testid="image-color-pick-container">
      {isPickerEnabled && (
        <>
          <ColorPreview color={color} />
          <ZoomPreview
            zoom={zoom}
            color={color}
            coordinates={coordinates}
            dimensions={dimensions}
            image={imgSrc}
          />
        </>
      )}
      <ImageColorPickCanvas
        data-testid="image-color-pick-canvas"
        id="image-color-pick-canvas"
        ref={canvasRef}
        onClick={() => onColorPick(color)}
        onTouchEnd={() => onColorPick(color)}
        style={{
          cursor: isPickerEnabled ? "none" : "default",
        }}
      />
    </ImageColorPickContainer>
  );
};

export default ImageColorPicker;
