import React from "react";
import { HeartIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="absolute bottom-0 py-5 w-full text-center">
      <p className="flex flex-row items-center justify-center gap-2 text-sm">
        Made with <HeartIcon className="h-5 text-red-500" /> By Mimi T. Khoudour
        &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
