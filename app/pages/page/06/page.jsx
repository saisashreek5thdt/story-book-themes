"use client";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import AudioPlayer from "../../../_components/AudioPlayer";
import { useRouter } from "next/navigation";

export default function Page6() {
  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/pages/y6xd9kgtgabbyyo7zupp.png",
  });

  const router = useRouter();

  const pageClickHander = (e) => {
    e.preventDefault();
    router.push("/pages/page/07");
  };

  return (
    <div className="w-full min-h-screen bg-cover select-none">
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 p-4">
          {/* Text Section */}
          <div className="cursor-pointer">
            <div className="bg-white text-slate-700 h-[600px] w-full md:w-[550px] flex flex-col justify-center">
              <div className="px-6 md:px-14 py-6 md:py-12 text-lg md:text-xl text-justify font-medium">
                <p>
                  Dadaji - Veer, this is what everyone has been made to
                  believe. The fact is, that other nations have explored space
                  just a few decades back.
                </p>
                <p className="py-4">
                  But many of our ancient Indian texts, like the Vedas,
                  discussed about space and astronomy thousands of years ago.
                </p>
                <p className="py-4">
                  Do you know that India was once the vishvaguru, or the
                  teacher of the world?
                </p>
                <p className="py-4">
                  Veer&apos;s eyes widened. He had not known this about his
                  country. He became even more alert and interested in what
                  Dadaji was saying.
                </p>
                <p className="py-4">
                  The clever grandpa knew that Veer was keen to learn of the
                  glory of India&apos;s past. He continued on the same lines.
                </p>
              </div>
              <hr className="w-full mt-[5px] h-[2px] opacity-70 bg-gray-300" />
              {/* Use the AudioPlayer component */}
              <AudioPlayer />
            </div>
          </div>

          {/* Image Section */}
          <div
            className="cursor-pointer flex justify-center items-center h-[600px] w-full md:w-[550px]"
            onClick={pageClickHander}
          >
            <div className="rounded h-full w-full">
              <Image
                src={imgURL1}
                className="h-full w-full object-cover "
                alt="Cover Image"
                width={800}
                height={1400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
