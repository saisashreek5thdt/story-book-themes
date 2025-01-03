import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";

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
              <div className="bg-white text-slate-700 h-full">
                <div className="flex flex-col items-center justify-center">
                  <div className="py-6 px-2 text-xl text-justify font-medium">
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
                  <div className="relative bg-slate-200 h-12 w-full flex items-center justify-center mt-[128px]">
                    <div className="flex gap-40 ">
                      <h1>Prev</h1>
                      <h1>Music</h1>
                      <h1>Home</h1>
                      <h1>Next</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="rounded">
                <Image
                  src={imgURL1}
                  alt="Cover Image"
                  width={800}
                  height={1400}
                  className="bg-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
