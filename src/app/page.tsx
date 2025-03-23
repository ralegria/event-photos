import Image from "next/image";
import UploadSection from "./components/UploadSection";

async function getData() {
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/by_asset_folder?asset_folder=${process.env.NEXT_PUBLIC_CLOUDINARY_ASSETS_FOLDER}&tags=true&metadata=true&max_results=500&resource_type=image`,

    {
      cache: "no-store",
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY +
            ":" +
            process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
        ).toString("base64")}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch images");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  console.log(data);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col font-[family-name:var(--font-hahmlet)] w-full sm:max-w-[450px]">
        <div className="flex flex-col gap-[24px] items-center p-[40px_24px] bg-[url(/icons/green-flower-icon.svg)] bg-no-repeat bg-contain bg-[left_top_50px]">
          <Image
            src={"/emelys-logo.svg"}
            width={150}
            height={150}
            alt="Party Icon"
          />
          <UploadSection images={data.resources} />
        </div>
      </div>
    </div>
  );
}
