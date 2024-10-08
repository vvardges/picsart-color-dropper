// eslint-disable-next-line no-unused-vars
import { Coordinates } from "../../util";
import { ZoomPreviewContainer, ZoomPreviewWindow } from "./ZoomPreview.styles";
import { useMobileDetect, useMousePosition } from "../../hooks";
import { RefObject } from "react";

type ColorPreviewProps = {
  coordinates: Coordinates;
  color: string;
  dimensions: { width: number; height: number };
  image: string;
  zoom?: number;
  canvasRef?: RefObject<HTMLCanvasElement>;
};

export const ZoomPreview = ({
  color,
  coordinates,
  dimensions,
  image,
  zoom = 0.5,
  canvasRef,
}: ColorPreviewProps) => {
  const isMobile = useMobileDetect();
  const mousePosition = useMousePosition();

  const { x, y } = coordinates;
  const zoomFactor = zoom;
  const errorMargin = isMobile ? 30 : 50;

  const headerHeight = 60;
  const zoomWidth = dimensions.width * zoomFactor;
  const zoomHeight = dimensions.height * zoomFactor;
  const imgPosX = x * zoomFactor - errorMargin;
  const imgPosY = y * zoomFactor - errorMargin;

  const clientHeight = canvasRef?.current?.clientHeight || 0;
  if (
    mousePosition.y < headerHeight ||
    mousePosition.y > clientHeight + headerHeight
  )
    return null;

  return (
    <ZoomPreviewContainer
      data-testid="zoom-preview-container"
      style={{
        left: `${mousePosition.x - errorMargin}px`,
        top: `${mousePosition.y - errorMargin - headerHeight}px`,
      }}
    >
      <ZoomPreviewWindow
        data-testid="zoom-preview"
        style={{
          backgroundSize: `${zoomWidth}px ${zoomHeight}px`,
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: `-${imgPosX}px -${imgPosY}px`,
          borderColor: color,
        }}
      >
        {color}
      </ZoomPreviewWindow>
    </ZoomPreviewContainer>
  );
};
