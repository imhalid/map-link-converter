import Head from "next/head";
import { useState } from "react";

const Home = () => {
  const [data, setData] = useState("");

  const cordinates = {
    lat: 41.011797,
    lng: 28.975428,
  };
  const AppleMap = `https://maps.apple.com/?ll=${cordinates.lat},${cordinates.lng}`;

  const GoogleMap = `https://www.google.com/maps/search/?api=1&query=${cordinates.lat},${cordinates.lng}`;

  const YandexMap = `https://yandex.com/maps/?ll=${cordinates.lng},${cordinates.lat}`;

  function useRegex(text) {
    const rule = new RegExp(/([0-9]{2})*\.([0-9]{6})+/g);
    if (text.match(rule)) {
      return text.match(rule).slice(0, 2);
    } else {
      return console.log("No match");
    }
  }

  console.log(useRegex(data));

  return (
    <div className="flex min-h-screen bg-slate-400 flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex  w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <form className="flex flex-col items-center justify-center">
          <input
            placeholder="paste map"
            type="text"
            onChange={(e) => setData(e.target.value)}
          />
          <button type="Submit">Submit</button>
        </form>
        {useRegex(data) ? (
          <div>
            {useRegex(data)[0]} + {useRegex(data)[1]}
          </div>
        ) : null}
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Created by .<a href="https://github.com/imhalid"> Halid</a>
      </footer>
    </div>
  );
};

export default Home;
