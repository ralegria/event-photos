"use client";
import {
  CldUploadButton,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";

const UploadButton = ({
  onSuccess = () => {},
}: {
  onSuccess?: (arg0: CloudinaryUploadWidgetResults) => void;
}) => {
  const onSuccessHandler = (result: CloudinaryUploadWidgetResults) => {
    onSuccess(result);
  };
  return (
    <CldUploadButton
      className="w-fit h-fit p-[12px_24px_16px] rounded-[50px]  font-[family-name:var(--font-hahmlet)] text-white border text-[18px] cursor-pointer"
      uploadPreset="emelys"
      onSuccess={(result) => onSuccessHandler(result)}
    >
      Sube tus fotos
    </CldUploadButton>
  );
};

export default UploadButton;
