import Image from "next/image";
import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <Image
              className="w-52 object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="google-logo"
              width="300"
              height="100"
            />
            <p className="text-sm italic my-10 text-center">
              This website is created for learning purposes
            </p>
            <button
              className="bg-blue-600 rounded-md text-white px-6 py-3 hover:bg-blue-700"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
