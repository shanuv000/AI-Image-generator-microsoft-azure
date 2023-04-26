import React from "react";
import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
      {/* left */}
      <div className="flex space-x-2 items-center">
        <Image
          src="https://links.papareact.com/4t3"
          alt="logo"
          height={30}
          width={30}
        />
        <div>
          <h1 className="font-bold">
            Shanu <span className="text-violet-500">AI</span> Image Generator
          </h1>
          <h2 className="text-xs">
            Powered by Dalle 2, Chat Gpt & Microsoft Azure!
          </h2>
        </div>
      </div>

      {/* right */}
      <div className="flex text-xs md:text-base divide-x items-center text-gray-500">
        <Link
          href={"https://bit.ly/vaibhavreact"}
          className="px-2 font-light text-right"
        >
          Zero To Full Stack Hero
        </Link>{" "}
        <Link
          href={"https://github.com/shanuv000"}
          className="px-2 font-light "
        >
          Github Repo
        </Link>
      </div>
    </header>
  );
}

export default Header;
