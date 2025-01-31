"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Page1() {
    const [isPortrait, setIsPortrait] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected answer
    const [showResult, setShowResult] = useState(false); // Show result after submission
    const [correctAnswer, setCorrectAnswer] = useState("Near the Lunar South Pole"); // Correct answer
    const [note, setNote] = useState(""); // Note explaining the correct answer
    const [isButton, setIsNextButton] = useState(false);
    const [submitted, setSubmitted] = useState(false); // Track if the answer has been submitted
    const options = [
        "Near the Lunar South Pole",
        "Mare Tranquillitatis",
        "Near the Aitken Basin",
        "Oceanus Procellarum"
    ];

    useEffect(() => {
        // Check for window object availability and set initial orientation
        if (typeof window !== "undefined") {
            setIsPortrait(window.innerHeight > window.innerWidth);
            const handleResize = () => {
                setIsPortrait(window.innerHeight > window.innerWidth);
            };
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    const router = useRouter();

    const pageClickNextHandler = (e) => {
        e.preventDefault();
        router.push("/pages/page/01");
    };

    const pageClickPrevHandler = (e) => {
        e.preventDefault();
        router.push("/Quiz/quiz/03");
    };

    const handleAnswer = () => {
        if (!selectedAnswer) {
            alert("Please select an answer before submitting.");
            return;
        }

        // Mark the answer as submitted
        setSubmitted(true);

        // Show result and explanation
        setShowResult(true);

        // Set note based on the correct answer
        if (selectedAnswer === correctAnswer) {
            setNote(
                <>
                    <span className="text-green-600 font-bold">Correct!</span>
                </>
            );
        } else {
            setNote(
                <>
                    <span className="text-red-600 font-bold">Incorrect.</span> The correct answer is{" "}
                    <span className="font-bold">{correctAnswer}</span>.
                </>
            );
        }

        // Delay the confirmation prompt by 3 seconds
        setTimeout(() => {
            setIsNextButton(true); // Navigate to the next page
        }, 1000); // 3 seconds delay
    };

    return (
        <div className="w-full min-h-screen bg-cover select-none flex flex-col items-center justify-center">
            <div className="flex justify-center items-center min-h-[80vh] gap-3">
                <button className="bg-white rounded-full p-2 text-black" onClick={pageClickPrevHandler}>
                    <ArrowLeft />
                </button>

                {/* Quiz Section */}
                <div className="grid grid-cols-1 p-4 bgQuiz h-[500px] w-[1000px] rounded-lg shadow-lg">
                    <div className="flex justify-start items-center flex-col">
                        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-300 mb-8">Quick Review</h2>
                        <div className="flex justify-center flex-col gap-10 rounded-2xl bg-white shadow-xl p-8 w-full max-w-[600px]">
                            <p className="text-xl font-semibold text-gray-800">
                                Where did Chandrayaan-3 successfully land?
                            </p>
                            <div className="grid grid-cols-2 grid-rows-2 gap-2">
                                {options.map((option, index) => (
                                    <div
                                        key={index}
                                        className={`text-lg flex gap-2 items-center p-3 rounded-lg transition duration-300 ease-in-out cursor-pointer ${
                                            submitted && option === correctAnswer
                                                ? "bg-green-200 border-green-500"
                                                : submitted && option === selectedAnswer && option !== correctAnswer
                                                ? "bg-red-200 border-red-500"
                                                : "hover:bg-purple-100 hover:shadow-md"
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            id={`option-${index}`}
                                            name="q1"
                                            value={option}
                                            checked={selectedAnswer === option} // Controlled component
                                            onChange={() => !submitted && setSelectedAnswer(option)} // Disable selection after submission
                                            className="appearance-none w-5 h-5 border-2 border-purple-500 rounded-full checked:bg-purple-500 checked:border-transparent focus:outline-none"
                                        />
                                        <label htmlFor={`option-${index}`} className="text-gray-700 font-medium">
                                            {option}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-row gap-1">
                                    Note:
                                    {showResult && (
                                        <p className="font-semibold">{note}</p>
                                    )}
                                </div>
                                <button
                                    className="p-3 w-30 h-12 px-6 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                                    onClick={handleAnswer}
                                    disabled={submitted} // Disable the button after submission
                                >
                                    {submitted ? "Submitted" : "Submit"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {isButton && (
                    <button
                        className="bg-white rounded-full p-2 text-black"
                        onClick={pageClickNextHandler}
                    >
                        <ArrowRight />
                    </button>
                )}
            </div>
        </div>
    );
}