import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2  p-5 ">
      {/* details modifier */}
      <details className="select-none open:bg-indigo-500 open:text-white">
        <summary className="cursor-pointer ">What is my fav. food</summary>
        <span className="selection:bg-indigo-500 selection:text-white">
          Cheeze
        </span>
      </details>
      {/* list modifier */}
      <ul className="list-decimal marker:text-teal-500">
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul>
      {/* file modifier */}
      <input
        type="file"
        className="file:cursor-pointer file:rounded-xl file:border-0 file:bg-purple-400 file:px-5 file:text-white file:transition-colors file:hover:border file:hover:border-purple-400 file:hover:bg-white file:hover:text-purple-400"
      />
      {/* letter modifier */}
      <p className="first-letter:text-7xl first-letter:hover:text-purple-400 ">
        Hello everyone!
      </p>
    </div>
  );
};

export default Home;
