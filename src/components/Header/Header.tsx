import React from 'react'

type Props = {
    pickedColor: string,
    onZoomChange: (e: number) => void,
    zoom: number,
}
const Header = ({
    pickedColor = '',
    onZoomChange,
    zoom
}: Props) => {
  return (
      <div className="App-header">
          <button>Upload Image</button>
          <div>
              <button>Mode</button>
              <input
                  type="range"
                  min="1"
                  max="10"
                  value={zoom}
                  onChange={(e) => onZoomChange(Number(e.target.value))}
              />
          </div>
          <span>{pickedColor}</span>
      </div>
  )
}

export default Header
