import { useRef } from "react";
import { useRouter } from "next/router";
import User from "./User";
import Image from "next/image";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";

function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const searchHandler = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term.trim()) return;
    router.push(`/search?term=${term.trim()}`);
  };

  return (
    <header className="sticky top-0 p-5 bg-white flex justify-between items-center">
      <div className="flex flex-row gap-8 items-center">
        <Image
          onClick={() => router.push("/")}
          className="hover:cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt="google-logo"
          width="120"
          height="40"
        />
        <form className="flex my-4 flex-row justify-center items-center gap-2 max-auto border border-gray-200 px-5 py-2 rounded-full hover:shadow-sm focus-within:shadow-sm transition-all">
          <input
            ref={searchInputRef}
            defaultValue={router.query.term}
            type="text"
            className="w-96 flex-grow focus:outline-none "
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-5 text-gray-500 cursor-pointer pr-2 border-r "
          />
          <SearchIcon
            onClick={searchHandler}
            className="h-5 text-blue-500 cursor-pointer"
          />
          <MicrophoneIcon className="h-5 text-blue-500" />
          <button onClick={searchHandler} type="submit" hidden></button>
        </form>
      </div>
      <User />
    </header>
  );
}

export default SearchHeader;
