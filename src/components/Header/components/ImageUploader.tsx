import React from "react";

type Props = {
  onImageUpload: (img: string) => void;
};

const ImageUploader = ({ onImageUpload }: Props) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageUpload(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-uploader">
      <label className="label-file">
        Select Image
        <input
          type="file"
          accept="image/*"
          className="input-file"
          onChange={handleImageChange}
        />
      </label>
    </div>
  );
};

export default ImageUploader;
