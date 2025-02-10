// "use client";
// import { useState } from "react";
// import Image from "next/image";

// export default function LanguageSwitcher({ onLanguageChange }) {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleLanguageSelection = (language, isEnglishFlag) => {
//     onLanguageChange(language, isEnglishFlag);
//     setShowDropdown(false);
//   };

//   const toggleDropdown = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   return (
//     <div className="absolute top-5 right-5">
//       <div className="flex items-end justify-end pr-5 py-10">
//         {/* Language Switcher Icon */}
//         <Image
//           src="/images/Icons/lang.png"
//           alt="Language Icon"
//           width={56}
//           height={56}
//           quality={100}
//           priority={true}
//           className="w-14 h-14 animate-pulse cursor-pointer"
//           onClick={toggleDropdown}
//         />

//         {showDropdown && (
//           <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 border rounded-md bg-white shadow-lg z-10">
//             {/* Header */}
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold">Select Your Language</h2>
//               <button
//                 onClick={() => setShowDropdown(false)}
//                 className="text-black hover:text-red-700 font-bold text-xl"
//               >
//                 ×
//               </button>
//             </div>

//             {/* Language Options */}
//             <div className="grid grid-cols-4 gap-4">
//               {[
//                 { code: "en", label: "English", isEnglish: true },
//                 { code: "te", label: "Telugu", isEnglish: false },
//                 { code: "ta", label: "Tamil", isEnglish: false },
//                 { code: "hi", label: "Hindi", isEnglish: false },
//                 { code: "mr", label: "Marathi", isEnglish: false },
//                 { code: "gu", label: "Gujarati", isEnglish: false },
//                 { code: "ml", label: "Malayalam", isEnglish: false },
//               ].map(({ code, label, isEnglish }) => (
//                 <button
//                   key={code}
//                   onClick={() => handleLanguageSelection(code, isEnglish)}
//                   className="p-2 text-center bg-[#e25a71] text-white hover:bg-[#c4122f] transition rounded-md"
//                 >
//                   {label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }