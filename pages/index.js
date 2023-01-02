import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <form className="flex flex-col items-center justify-center mx-auto mt-48 w-fit">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt="google-logo"
          width="240"
          height="80"
        />
        <div className="flex my-4 flex-row justify-center items-center gap-4 max-auto border border-gray-200 px-5 py-2 rounded-full hover:shadow-sm focus-within:shadow-sm transition-all">
          <SearchIcon className="h-5" />
          <input
            placeholder="Search Google or type a URL"
            type="text"
            className="w-96 flex-grow focus:outline-none "
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-row gap-4">
          <button className="btn">Google Search</button>
          <button className="btn">{"I'm feeling Lucky"}</button>
        </div>
      </form>

      <Footer />
    </>
  );
}
