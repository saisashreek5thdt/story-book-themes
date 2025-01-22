<<<<<<< HEAD
// import React from "react"
// import { useState,useEffect } from "react";
// import object from "../textconent";
// export default function TranslateText(props){
//     const [translatedText, setTranslatedText] = useState("Hello my name is Vishal");
//     const [targetLanguage, setTargetLanguage] = useState("en")
//     useEffect(()=>{
//         const randomfunc = async ()=>{
//             setTargetLanguage(props.targetlanguage)
//             const response = await fetch(
//                 `https://translation.googleapis.com/language/translate/v2?key=${process.env.GOOGLE_TRANSLATE_API_KEY}`,
//                  {
//                    method: "POST",
//                    headers: {
//                      "Content-Type": "application/json",
//                    },
//                    body: JSON.stringify({
//                      q: [object[0].translatedtext],
//                      target: targetLanguage,
//                    }),
//                  }
//                );
       
//                if (!response.ok) {
//                  throw new Error(`Translation failed: ${response.statusText}`);
//                }
       
//                const data = await response.json();
//                console.log(data, "printing data")
       
//                // Ensure the response data contains translations
//                if (data.data && data.data.translations) {
//                  setTranslatedText(data.data.translations[0].translatedText);
//                } else {
//                  throw new Error("No translations returned from API");
//                }
             
//         }
//         randomfunc()
//     },[targetLanguage,translatedText])



//     return(
//         <>
//             <div className="relative p-6 flex flex-col gap-4">
//                 <div className="text-white text-lg text-justify justify-center font-medium py-20">
//                    <p>
//                         {translatedText}
//                    </p>
                    
//                 </div>
                
//             </div>

//         </>
//     )
// }
// TranslationFunction.js



// import { useState, useEffect } from "react";

// const TranslationFunction = ({ text, targetLanguage }) => {
//   const [translatedText, setTranslatedText] = useState(""); // State to store translated text

//   useEffect(() => {
//     const fetchTranslation = async () => {
//       const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY; // Your Google Translate API key
//       const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

//       const params = {
//         q: text, // Text to be translated
//         target: targetLanguage, // The target language code
//         format: "text",
//       };

//       try {
//         const response = await fetch(url, {
//           method: "POST",
//           body: JSON.stringify(params),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         const data = await response.json();
//         if (data.data && data.data.translations) {
//           setTranslatedText(data.data.translations[0].translatedText); // Update state with translated text
//         }
//       } catch (error) {
//         console.error("Error fetching translation:", error);
//       }
//     };

//     if (text) {
//       fetchTranslation(); // Fetch translation whenever the text or targetLanguage changes
//     }
//   }, [text, targetLanguage]); // Re-run effect whenever text or targetLanguage changes

//   return <div dangerouslySetInnerHTML={{ __html: translatedText }} />; // Render the translated text
// };

// export default TranslationFunction;








// TranslateText.js
=======
>>>>>>> e9379acb6e1e2fa8e9c355085baab69ee80eaf47
import { useState, useEffect } from "react";

const TranslateText = ({ text, targetLanguage }) => {
  const [translatedText, setTranslatedText] = useState(""); // Store translated text

  useEffect(() => {
    const fetchTranslation = async () => {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY; // Google Translate API key
      const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

      const params = {
        q: text, // Text to be translated
        target: targetLanguage, // Target language code
        format: "text",
      };

      try {
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(params),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (data.data && data.data.translations) {
          setTranslatedText(data.data.translations[0].translatedText); // Set translated text
        }
      } catch (error) {
        console.error("Error fetching translation:", error);
      }
    };

    if (text && targetLanguage) {
      fetchTranslation(); // Trigger translation whenever text or targetLanguage changes
    }
  }, [text, targetLanguage]);

  return <div dangerouslySetInnerHTML={{ __html: translatedText }} />; // Render the translated text
};

<<<<<<< HEAD
export default TranslateText;

=======
export default TranslateText;
>>>>>>> e9379acb6e1e2fa8e9c355085baab69ee80eaf47
