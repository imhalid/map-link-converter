import Head from "next/head";
import { useState } from "react";

const Home = () => {
  const [data, setData] = useState(
    "https://www.google.com/maps/dir/40.0727124,32.9229169/%C4%B0vedik,+ALTINKAYA+Enclosures+for+electronics,+Has+Emek+Sanayi+Sitesi,+1469.+Sk.+No+10,+06378+%C4%B0vedik+Osb%2FYenimahalle%2FAnkara/@39.9862183,32.7645058,13.68z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x14d349f69b21f68d:0xc34297128eaaa7b7!2m2!1d32.7345404!2d39.9934117!3e3"
  );

  const cordinates = {
    lat: 41.011797,
    lng: 28.975428,
  };

  //https://www.google.com/maps/dir/40.0727124,32.9229169/%C4%B0vedik,+ALTINKAYA+Enclosures+for+electronics,+Has+Emek+Sanayi+Sitesi,+1469.+Sk.+No+10,+06378+%C4%B0vedik+Osb%2FYenimahalle%2FAnkara/@39.9862183,32.7645058,13.68z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x14d349f69b21f68d:0xc34297128eaaa7b7!2m2!1d32.7345404!2d39.9934117!3e3

  const useRegex = (input) => {
    const rule = new RegExp(/([0-9]{2,3})*\.([0-9]{6})+/g);
    if (input.match(rule)) {
      return input.match(rule).slice(0, 2);
      // setData(output);
    } else {
      return console.log("No match");
    }
  };

  const lat = useRegex(data)[0];
  const lng = useRegex(data)[1];

  const AppleMap = `https://maps.apple.com/?ll=${lat},${lng}`;

  const GoogleMap = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  const YandexMap = `https://yandex.com/maps/?ll=${lng},${lat}`;

  // console.log(useRegex(data));

  return (
    <div className="flex min-h-screen bg-slate-400 flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex  w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="flex flex-col items-center justify-center">
          <input
            placeholder="paste map"
            type="text"
            onChange={(e) => setData(e.target.value)}
          />
        </div>
        {data ? (
          <div>
            {useRegex(data)[0]} + {useRegex(data)[1]}
          </div>
        ) : null}

        <div className="w-1/3 break-words">
          <p className="bg-rose-200 ">
            https://www.google.com/maps/dir/40.0727124,32.9229169/%C4%B0vedik,+ALTINKAYA+Enclosures+for+electronics,+Has+Emek+Sanayi+Sitesi,+1469.+Sk.+No+10,+06378+%C4%B0vedik+Osb%2FYenimahalle%2FAnkara/@39.9862183,32.7645058,13.68z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x14d349f69b21f68d:0xc34297128eaaa7b7!2m2!1d32.7345404!2d39.9934117!3e3
          </p>
        </div>
        <div className="flex flex-col">
          <a href={AppleMap} target="_blank" rel="noopener noreferrer">
            AppleMap
          </a>
          <a href={GoogleMap} target="_blank" rel="noopener noreferrer">
            GoogleMap
          </a>
          <a href={YandexMap} target="_blank" rel="noopener noreferrer">
            YandexMap
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Created by .<a href="https://github.com/imhalid"> Halid</a>
      </footer>
    </div>
  );
};

export default Home;
