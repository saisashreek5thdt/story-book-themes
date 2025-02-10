// import { useState, useEffect } from "react";

// const TranslateText = ({ text, targetLanguage }) => {
//   const [translatedText, setTranslatedText] = useState(""); // Store translated text

//   useEffect(() => {
//     const fetchTranslation = async () => {
//       const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY; // Google Translate API key
//       const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

//       const params = {
//         q: text, // Text to be translated
//         target: targetLanguage, // Target language code
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
//           setTranslatedText(data.data.translations[0].translatedText); // Set translated text
//         }
//       } catch (error) {
//         console.error("Error fetching translation:", error);
//       }
//     };

//     if (text && targetLanguage) {
//       fetchTranslation(); // Trigger translation whenever text or targetLanguage changes
//     }
//   }, [text, targetLanguage]);

//   return <div dangerouslySetInnerHTML={{ __html: translatedText }} />; // Render the translated text
// };

// export default TranslateText;
