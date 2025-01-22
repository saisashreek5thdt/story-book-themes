// import TranslateText from "../app/_components/page/api/translate3.js";
// export default function page01() {
//     return (
//         <>

//             <div className="cursor-pointer">
//                 <div className="bg-white text-slate-700 shadow-md">
//                     <div className="flex flex-col items-center justify-center xs:h-[100px] xs:w-[100px] sm:h-[350px] sm:w-[400px] md:h-[360px] md:w-[400px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[520px]  sm:p-0 md:p-6 xl:p-6 lg:p-6">
//                         <div
//                             className="flex items-center justify-center flex-col gap-3 text-justify font-medium text-sm sm:text-base lg:text-lg xl:text-xl"
//                         >
//                             <div
//                                 className={`pr-2 ${isExpanded ? "overflow-auto" : "overflow-hidden"
//                                     }`}
//                                 style={{
//                                     maxHeight: "220px",
//                                     transition: "max-height 0.3s ease",
//                                 }}
//                             >
//                                 <p>
//                                     Ten year old Veer is a very intelligent and curious boy. He
//                                     and his Dadaji are great friends. They sleep in the same
//                                     room. At bedtime, before falling asleep.
//                                 </p>
//                                 <p className="py-4">
//                                     Dadaji makes up interesting stories on any topic that he
//                                     feels little Veer should be aware of.
//                                 </p>
//                                 <p className="py-2">
//                                     Veer loves to hear these stories. Veer&apos;s school was
//                                     soon to hold a workshop on Space.
//                                 </p>
//                             </div>
//                             {/* <button
//                                 onClick={toggleExpand}
//                                 className="text-blue-500 hover:text-blue-700 focus:outline-none"
//                             >
//                                 {isExpanded ? "Read Less" : "Read More"}
//                             </button> */}
//                         </div>
//                         {/* Uncomment if needed */}
//                         {/* <div className="-mt-2">
//       <Image
//         src={gifImgUrl}
//         alt="Astronaut Gif"
//         width={120}
//         height={120}
//         unoptimized
//       />
//     </div> */}
//                         {/* Use the AudioPlayer component */}
//                         {/* <AudioPlayer /> */}
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }




{isEnglish ? (
    <div  className={`pr-2 ${
      isExpanded ? "overflow-auto" : "overflow-hidden"
    }`}
    style={{
      maxHeight: "220px",
      transition: "max-height 0.3s ease",
    }}> <p>
    Ten-year-old Veer is a very intelligent and curious boy.
    He and his Dadaji are great friends. They sleep in the
    same room. At bedtime, before falling asleep.
  </p>
  <p className="py-4">
    Dadaji makes up interesting stories on any topic that he
    feels little Veer should be aware of.
  </p>
  <p className="py-2">
    Veer loves to hear these stories. Veer&apos;s school was
    soon to hold a workshop on Space.
  </p> </div>
  ) : (
    <TranslateText targetlanguage={handleLanguageChange} />
  )}
  