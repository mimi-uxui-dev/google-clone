import { useSession, signIn, signOut } from "next-auth/react";

const User = (props) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div
        className="flex flex-row gap-4 justify-center items-center bg-slate-200 p-1 pr-4 rounded-full hover:cursor-pointer hover:bg-sky-200 hover:drop-shadow-sm transition-all"
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

  return <button onClick={signIn}>Sign In</button>;
};

export default User;
