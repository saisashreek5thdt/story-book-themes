import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";
import { Repeat } from 'lucide-react';
import { Play } from 'lucide-react';
import { Volume2 } from 'lucide-react';
export default function Page1() {
  const imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/bgImages/page1/pkftpgetorjyryeasvxu",
  });

  return (
    <>
      <div className="w-full min-h-screen bg-cover bgCover select-none">
        <div className="flex justify-center items-center min-h-screen">
          <div className="grid grid-cols-2 p-4">
            <div className="cursor-pointer">
              <div className="bg-white text-slate-700 h-">
                <div className="flex flex-col items-center h-[600px] w-[550px] justify-center">
                  <div className="px-14 py-12 mt-6 text-xl text-justify font-medium">
                    <p>
                      Ten year old Veer is a very intelligent and curious boy.
                      He and his Dadaji are great friends. They sleep in the
                      same room. At bedtime, before falling asleep, Dadaji makes
                      up interesting stories on any topic that he feels little
                      Veer should be aware of.
                    </p>
                    <p className="py-4">
                      Veer loves to hear these storie&apos;s. Veer&apos;s school
                      was soon to hold a workshop on Space.
                    </p>
                  </div>
                  <hr className=" w-full mt-[175px] h-[2px] opacity-70 bg-gray-300" />
                  <div className=" h-12 w-[550px] flex items-center justify-center  ">
                    <div className="flex gap-20">
                      <div className="flex items-center justify-center gap-2">
                      <p>00:00</p>
                      <p>
                        <input
                          type="range"
                          // value={value}
                          // onChange={(e) => setValue(e.target.value)}
                          className="w-40 h-2  bg-gray-300 rounded-lg appearance-none cursor-pointer"
                          style={{
                            WebkitAppearance: "none",
                          }}
                        />
                      </p>
                      <p>00:16</p>
                      <div className="">
                        <p> <Repeat /></p>
                      </div>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                      <div className="w-8 h-8  bg-gray-400 flex justify-center items-center rounded-full">
                        <Play />
                      </div>
                      <p><Volume2 /></p>
                      <p>
                        <input
                          type="range"
                          // value={value}
                          // onChange={(e) => setValue(e.target.value)}
                          className="w-16 h-2  bg-gray-300 rounded-lg appearance-none cursor-pointer"
                          style={{
                            WebkitAppearance: "none",
                          }}
                        />
                      </p>
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="rounded">
                <Image
                  src={imgURL1}
                  className="bg-cover h-[600px] w-[550px]"
                  alt="Cover Image"
                  width={800}
                  height={1400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
