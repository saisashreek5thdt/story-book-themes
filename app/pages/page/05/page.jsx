"use client";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";
import { useRouter } from "next/navigation";
export default function Page1() {
  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/tw26ezhjtqyyobfkcb5a",
  });

  const gifImgUrl = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/rx8f0g9xjsp3yxbu2qr1",
  });

  const router = useRouter();

  const pageClickHander = (e) => {
    e.preventDefault();
    router.push("/pages/page/06");
  };

  return (
    <div className="w-full min-h-screen bg-cover select-none">
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-2 p-4">
          {/* Text Section */}
          <div className="cursor-pointer">
            <div className="bg-white text-slate-700">
              <div className="flex flex-col items-center h-[530px] w-[550px] justify-center">
                <div className="px-14 py-12 mt-12 text-xl text-justify font-medium">
                  <p>
                    When I lift it towards the moon, it completely covers it,
                    and then I can't see the moon at all.
                  </p>
                  <p className="py-4">Saint - Do you know how high it is?</p>

                  <p className="py-4">
                    Princess - It's visible just above that tree in the palace
                    garden.
                  </p>
                  <p className="py-4">
                    I think it is just as high as that tree.
                  </p>

                  <p className="py-2">Saint - What does the moon look like?</p>
                  <p className="py-2">Princess - It is white and bright like silver.</p>
                  {/* <div className="py-2">
                    <Image
                      src={gifImgUrl}
                      alt="Astronaut Gif"
                      width={120}
                      height={120}
                    />
                  </div> */}
                </div>
                <hr className="w-full -mt-2 h-[2px] opacity-70 bg-gray-300" />
                {/* Use the AudioPlayer component */}
                <AudioPlayer />
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="cursor-pointer">
            <div onClick={pageClickHander} className="rounded">
              <Image
                src={imgURL1}
                className="bg-cover h-[530px] w-[550px]"
                alt="Cover Image"
                width={800}
                height={1400}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
