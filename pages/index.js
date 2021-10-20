import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [input, setInput] = useState("");
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Tweet Reach Analytics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-700">
          Tweet Reach Analytics
        </h1>
        <p className="mt-3 text-xl font-mono text-gray-600">
          Analyze and visualize the reach of a tweet
        </p>
        <div className="mt-6 text-2xl flex flex-wrap -mx-3 mb-6">
          <form>
            <div className="w-full px-3">
              <input
                className="mb-3 block appearance-none bg-white placeholder-gray-400 border border-indigo-200 rounded w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:border-indigo-400 focus:placeholder-gray-300 focus:ring-2 focus:ring-indigo-200"
                placeholder="Enter Tweet ID"
                value={input}
                onInput={(e) => setInput(e.target.value)}
              />

              <button
                className="font-bold bg-gradient-to-r from-purple-600 to-blue-700 hover:from-purple-500 hover:to-blue-600 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded"
                type="button"
                onClick={() => {
                  router.push(`/analyze/${input}`);
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
