"use client";
import { useState } from "react";
import YayTobyImg from "./assets/YayToby.jpeg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Talaga?",
      "Are you sure?",
      "What if I asked really nicely?",
      "Bakit?",
      "Pretty please",
      "With a chocolate brownie on top",
      "What about a iced french vanilla latte?",
      "Or a starbucks?",
      "PLEASE KR",
      "But :*(",
      "please bibs",
      ":((((",
      "PRETTY PLEASE",

      "Ano?",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src={YayTobyImg} className="w-96" />
          <div className="my-4 text-4xl font-bold justify-center">
            WOOOOOO!!!😍 It's a date 👩🏻‍❤️👨🏻 <br />
            <span>at </span>
            <a
              href="https://www.theavenuecinema.com/whatson/movie/showtimes/madame-web"
              className="underline"
            >
              Avenue Cinema for 7:45pm!
            </a>
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">
            Mrs Karen Rose Hermoso-Troyo 🌹, will you be my Valentine? ❤️
          </h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
