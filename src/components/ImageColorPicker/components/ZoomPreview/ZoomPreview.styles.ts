import styled from "styled-components";

export const ZoomPreviewContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 100;
  pointer-events: none;
`;

export const ZoomPreviewWindow = styled.div`
  width: 100px;
  height: 100px;
  box-shadow: 1px 1px 1px #000;
  border: 4px solid red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 1px 1px 2px white;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;
