import Head from "next/head";
import { useState } from "react";
import useRegex from "../hooks/useRegex";
import { AiOutlineLink } from "react-icons/ai";
import Image from "next/image.js";

const Home = () => {
  const [data, setData] = useState("");

  const input = (target) => {
    //if input is empty return empty string
    if (useRegex(target) === undefined) {
      return "";
    } else {
      //if input is not empty return lat and lng
      return useRegex(target);
    }
  };

  const showLinks = (target) => {
    if (useRegex(target) === undefined) {
      return (
        <div className="flex flex-col items-center justify-center w-full h-full italic">
          Please enter a valid link
        </div>
      );
    } else {
      return (
        <div className="flex flex-col">
          <p className="text-left mt-3 text-slate-500">Apple Map</p>
          <div className="flex flex-row">
            <div
              className="h-10  w-full relative  bg-white hover:ring-1 rounded-md border overflow-auto flex justify-center items-center cursor-pointer"
              onClick={() => navigator.clipboard.writeText(AppleMap)}
            >
              <div className="w-full h-full absolute bg-blue-500 flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-all text-white">
                Copy to clipboard
              </div>
              <div className="w-28 right-0 h-full absolute bg-gradient-to-l from-white to-white/0"></div>
              <input
                type="text"
                className="pl-2 w-full pointer-events-none"
                defaultValue={AppleMap}
                value={AppleMap}
              />
            </div>
            <div className="h-10 w-10 flex justify-center items-center rounded-md border hover:ring-1 ml-2  bg-white">
              <a href={AppleMap} target="_blank" rel="noopener noreferrer">
                <AiOutlineLink className="w-5 h-5" />
              </a>
            </div>
          </div>
          <p className="text-left  mt-3 text-slate-500">Google Map</p>
          <div className="flex flex-row">
            <div
              className="h-10  w-full relative group  bg-white hover:ring-1 rounded-md border overflow-auto flex justify-center items-center cursor-pointer"
              onClick={() => navigator.clipboard.writeText(GoogleMap)}
            >
              <div className="w-full h-full absolute bg-emerald-500 flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-all text-white">
                Copy to clipboard
              </div>
              <div className="w-28 right-0 h-full absolute bg-gradient-to-l from-white to-white/0"></div>
              <input
                type="text"
                className="pl-2 w-full pointer-events-none"
                defaultValue={GoogleMap}
                value={GoogleMap}
              />
            </div>
            <div className="h-10 w-10 flex justify-center items-center rounded-md border hover:ring-1 ml-2  bg-white">
              <a href={GoogleMap} target="_blank" rel="noopener noreferrer">
                <AiOutlineLink className="w-5 h-5" />
              </a>
            </div>
          </div>
          <p className="text-left  mt-3 text-slate-500">Yandex Map</p>
          <div className="flex flex-row">
            <div
              className="h-10  w-full relative  bg-white hover:ring-1 rounded-md border overflow-auto flex justify-center items-center cursor-pointer"
              onClick={() => navigator.clipboard.writeText(YandexMap)}
            >
              <div className="w-full h-full absolute bg-red-500 flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-all text-white">
                Copy to clipboard
              </div>
              <div className="w-28 right-0 h-full absolute bg-gradient-to-l from-white to-white/0"></div>
              <input
                type="text"
                className="pl-2 w-full pointer-events-none"
                defaultValue={YandexMap}
                value={YandexMap}
              />
            </div>
            <div className="h-10 w-10 flex justify-center items-center rounded-md border hover:ring-1 ml-2  bg-white">
              <a href={YandexMap} target="_blank" rel="noopener noreferrer">
                <AiOutlineLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      );
    }
  };

  const lat = input(data)[0];
  const lng = input(data)[1];

  const AppleMap = `https://maps.apple.com/?ll=${lat},${lng}`;
  const GoogleMap = `http://maps.google.com/maps?q=${lat},${lng}`;
  const YandexMap = `https://yandex.com/maps/?ll=${lng},${lat}`;

  return (
    <div className="flex min-h-screen bg-slate-100 flex-col items-center justify-center py-2">
      <Head>
        <title>Map Link Converter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Image src="/512.png" width={200} height={200} />
        {data ? (
          <div className="mt-3 mb-2 flex">
            <div className="px-2 bg-orange-500 rounded-md text-white border-2 border-orange-600">
              {input(data)[0]}
            </div>

            <div className="px-2 bg-orange-500 rounded-md text-white border-2 border-orange-600 ml-2">
              {input(data)[1]}
            </div>
          </div>
        ) : null}

        <div className="sm:w-96 mt-3 w-80 accent-rose-500 ">
          <form>
            <textarea
              name="link"
              className="w-full rounded-md border hover:ring-1 border-gray-300 p-2"
              placeholder="Paste Google, Apple or Yandex long map link"
              onChange={(e) => setData(e.target.value)}
            />
          </form>

          {showLinks(data)}
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Created with ❤️ by{" "}
        <a
          className="ml-1"
          href="https://github.com/imhalid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Halid
        </a>
      </footer>
    </div>
  );
};

export default Home;
