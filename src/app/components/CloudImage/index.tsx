"use client";
import { CldImage, CloudinaryUploadWidgetInfo } from "next-cloudinary";

interface ImageListProps {
  images: CloudinaryUploadWidgetInfo[]; // Replace 'any[]' with the actual type of your image data
}

const CloudImages = ({ images }: ImageListProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {images.map((image) => (
        <>
          {image.resource_type !== "video" && (
            <div key={image.public_id} className="w-full">
              <CldImage
                width="300"
                height="200"
                className="w-full rounded-[10px]"
                src={image.public_id}
                alt={image.public_id}
              />
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default CloudImages;
