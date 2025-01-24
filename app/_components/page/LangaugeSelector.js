// "use client";

// import { useState } from "react";

// export default function LanguageSelector({ defaultText }) {
//   const [translatedText, setTranslatedText] = useState(defaultText);
//   const [selectedLanguage, setSelectedLanguage] = useState("en");
//   const [showDropdown, setShowDropdown] = useState(false);  // State to control dropdown visibility

//   // Function to handle language selection
//   const handleLanguageChange = (lang) => {
//     setSelectedLanguage(lang);
//     translatePageContent(lang);
//     setShowDropdown(false); // Close dropdown after selection
//   };

//   // Translate page content based on selected language
//   const translatePageContent = async (targetLanguage) => {
//     if (targetLanguage === "en") {
//       restoreOriginalContent();
//       return;
//     }

//     const elements = document.querySelectorAll("*:not(script):not(style):not(meta)");
//     const textsToTranslate = [];
//     const elementMap = [];

//     // Collect all text content
//     elements.forEach((el) => {
//       if (el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE) {
//         const text = el.textContent.trim();
//         if (text) {
//           textsToTranslate.push(text);
//           elementMap.push(el);
//         }
//       }
//     });

//     if (textsToTranslate.length === 0) return;

//     try {
//       // Split texts into chunks of 128 segments each
//       const chunkSize = 128;
//       const textChunks = [];
//       for (let i = 0; i < textsToTranslate.length; i += chunkSize) {
//         textChunks.push(textsToTranslate.slice(i, i + chunkSize));
//       }

//       const translations = [];

//       // Translate each chunk sequentially
//       for (const chunk of textChunks) {
//         const response = await fetch("`https://translation.googleapis.com/language/translate/v2?key=${process.env.GOOGLE_TRANSLATE_API_KEY}`", {
//           method: "POST",
//           body: JSON.stringify({
//             q: chunk,
//             target: targetLanguage,
//           }),
//           headers: { "Content-Type": "application/json" },
//         });

//         const data = await response.json();
//         if (data.data && data.data.translations) {
//           translations.push(...data.data.translations);
//         }
//       }

//       // Update text content with translations
//       translations.forEach((translation, index) => {
//         elementMap[index].textContent = translation.translatedText;
//       });
//     } catch (error) {
//       console.error("Translation Error:", error);
//     }
//   };

//   // Restore the original content when language is set to English
//   const restoreOriginalContent = () => {
//     window.location.reload();  // Reload the page to restore original content
//   };

//   return (
//     <div>
//       {/* Button to toggle the dropdown visibility */}
//       <button
//         onClick={() => setShowDropdown(!showDropdown)}
//         className="border p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
//       >
//         Change Language
//       </button>

//       {/* Language selection dropdown */}
//       {showDropdown && (
//         <div className="mt-2 p-2 border rounded-md bg-white shadow-lg">
//           <button
//             onClick={() => handleLanguageChange("en")}
//             className="block p-2 w-full text-left text-black hover:bg-gray-100"
//           >
//             English
//           </button>
//           <button
//             onClick={() => handleLanguageChange("te")}
//             className="block p-2 w-full text-left text-black hover:bg-gray-100"
//           >
//             Telugu
//           </button>
//           <button
//             onClick={() => handleLanguageChange("ta")}
//             className="block p-2 w-full text-left text-black hover:bg-gray-100"
//           >
//             Tamil
//           </button>
//           <button
//             onClick={() => handleLanguageChange("hi")}
//             className="block p-2 w-full text-left text-black hover:bg-gray-100"
//           >
//             Hindi
//           </button>
//           <button
//             onClick={() => handleLanguageChange("mr")}
//             className="block p-2 w-full text-left text-black hover:bg-gray-100"
//           >
//             Marathi
//           </button>


//           {/* Add more languages as needed */}
//         </div>
//       )}
//     </div>
//   );
// }