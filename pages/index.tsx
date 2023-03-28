import Head from "next/head";
import { SwitchTheme } from "@/components/switch_theme";
import { memo, useState } from "react";
import CountriesAutoComplete from "@/components/countries_auto_complete";
import AutoComplete from "@/components/auto_complete";

const Home = () => {
  const [value, setValue] = useState("");
  //a list of countries to show the dropdown
  const countries = ["Africa", "Armenia", "Canada", "United States"];

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center pt-6">
        <section className="container mx-auto px-4">
          <div className="font-bold text-2x">Hello Next.js</div>
          <SwitchTheme />
        </section>
        <section className="container mx-auto px-4">
          <div className="py-10">
            <CountriesAutoComplete />
          </div>
        </section>
        <section className="container mx-auto px-4">
          <div className="py-10">
            <AutoComplete items={countries} value={value} onChange={setValue} />
          </div>
        </section>
      </main>
    </>
  );
};

export default memo(Home);
