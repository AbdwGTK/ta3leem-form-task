import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface UploadButtonProps {
  initialImage: string | ArrayBuffer | null;
  onImageChange: (image: string | ArrayBuffer | null) => void;
}

const UploadButton: React.FC<UploadButtonProps> = ({
  initialImage,
  onImageChange,
}) => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(initialImage);
  const { t } = useTranslation();

  useEffect(() => {
    setImage(initialImage);
  }, [initialImage]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        onImageChange(reader.result);
      };

      // Validate file type
      if (file.type.startsWith("image/")) {
        reader.readAsDataURL(file);
      } else {
        alert("Please upload a valid image file (JPEG, PNG, GIF)");
      }
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    onImageChange(null);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-4  space-y-4">
      <label className="w-32 h-32 cursor-pointer flex items-center Tajawal justify-center bg-gray-200 rounded-full border-2 border-dashed border-gray-400 hover:border-indigo-500 transition-colors">
        {image ? (
          <img
            src={image as string}
            alt="Upload Preview"
            className="object-cover w-full h-full rounded-full"
          />
        ) : (
          <span className="text-gray-400">Upload Photo</span>
        )}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </label>
      {image && (
        <button
          onClick={handleRemoveImage}
          className="px-4 py-2 font-bold Tajawal text-white bg-red-500 rounded-md hover:bg-red-600"
        >
          {t("remove")}
        </button>
      )}
    </div>
  );
};

export default UploadButton;
