import Head from "next/head";
import SearchHeader from "../components/SearchHeader";

function search() {
  return (
    <div>
      <Head>
        <title>Search</title>
      </Head>

      <SearchHeader />
    </div>
  );
}

export default search;
