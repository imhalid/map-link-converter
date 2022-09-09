import Head from "next/head";
import LinkIcon from "../assets/LinkIcon.jsx";
import { useState } from "react";
import useRegex from "../hooks/useRegex";

const Home = () => {
  const [data, setData] = useState(
    "https://www.google.com/search?q=apple+park&tbm=lcl&sxsrf=ALiCzsaqhsmwnLTaHicCAHk5mPMXwpy5hg%3A1662738469684&ei=JWAbY_-kKb6_xc8PrcaJqA0&oq=apple+park&gs_l=psy-ab.3..0i273k1j0i203k1l9.35857.37485.0.37749.10.10.0.0.0.0.235.1129.0j6j1.7.0....0...1c.1.64.psy-ab..3.7.1125...35i39k1j0i67k1j0i457i67k1.0.qa1RHF6FbPM#rlfi=hd:;si:;mv:%5B%5B37.337181701954286,-122.00400301884345%5D,%5B37.33207188826054,-122.01318690251044%5D,null,%5B37.33462683855649,-122.00859496067694%5D,18%5D"
  );

  const iutput = (target) => {
    //if input is empty return empty string
    if (useRegex(target) === undefined) {
      return "";
    } else {
      //if input is not empty return lat and lng
      return useRegex(target);
    }
  };

  const lat = iutput(data)[0];
  const lng = iutput(data)[1];

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
        {/* {data ? (
          <div>
            {useRegex(data)[0]} + {useRegex(data)[1]}
          </div>
        ) : null} */}

        <div className="sm:w-96 w-80 accent-rose-500 ">
          <form>
            <textarea
              name="link"
              className="w-full rounded-md border hover:ring-1 border-gray-300 p-2"
              placeholder="Paste Google, Apple or Yandex long map link"
              onChange={(e) => setData(e.target.value)}
            />
          </form>

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
                  <LinkIcon />
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
                  <LinkIcon />
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
                  <LinkIcon />
                </a>
              </div>
            </div>
          </div>
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
