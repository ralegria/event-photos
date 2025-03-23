"use client";
import { useState } from "react";
import CloudImages from "../CloudImage";
import UploadButton from "../UploadButton";
import {
  CloudinaryUploadWidgetResults,
  CloudinaryUploadWidgetInfo,
} from "next-cloudinary";

interface UploadSectionProps {
  images: CloudinaryUploadWidgetInfo[];
}

const UploadSection = ({ images }: UploadSectionProps) => {
  const [localImages, setLocalImages] =
    useState<CloudinaryUploadWidgetInfo[]>(images);
  const onSuccessHandler = (newImage: CloudinaryUploadWidgetResults) => {
    if (newImage.info && typeof newImage.info !== "string") {
      setLocalImages([newImage.info, ...localImages]);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-[16px] items-center bg-[url(/shadows/green-shadow.png)] bg-no-repeat bg-contain bg-[center_top]">
        <div className="flex flex-col gap-[8px] items-center">
          <h2 className="text-center text-[20px]">
            ¡Las mejores fotos <br />
            de mi fiesta!
          </h2>
          <p className="text-center text-[14px] font-light">
            Mira y comparte las mejores fotos tomadas en mi fiesta. Creemos
            juntos un album enorme de recuerdos de este momento.
          </p>
          <span className="text-[13px] italic">
            Colocar &uacute;nicamente Fotograf&iacute;as
          </span>
        </div>
        <UploadButton onSuccess={onSuccessHandler} />
      </div>
      <CloudImages images={localImages} />
    </>
  );
};

export default UploadSection;
