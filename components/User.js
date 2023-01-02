import { useSession, signIn, signOut } from "next-auth/react";
import { ArrowRightIcon } from "@heroicons/react/solid";

const User = (className) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div
        className={`${className} flex flex-row gap-4 justify-center items-center bg-slate-200 p-1 pr-4 rounded-full hover:cursor-pointer hover:bg-sky-200 hover:drop-shadow-sm transition-all`}
        onClick={signOut}
      >
        <img
          className="w-10 rounded-full "
          src={session.user.image}
          alt={session.user.email}
        />
        <span className="font-medium">Sign Out</span>
      </div>
    );
  }

  return (
    <button
      className={`btn-secodary flex justify-center items-center gap-4 ${className}`}
      onClick={signIn}
    >
      Sign In <ArrowRightIcon className="text-white h-5" />
    </button>
  );
};

export default User;
