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
