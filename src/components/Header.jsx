import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className=" flex items-center justify-between flex-wrap bg-slate-300 dark:bg-slate-600 p-3 bg-opacity-90 ">
      <div className="flex flex-row items-center">
        <div className="flex items-center  mr-6">
          <Link className="font-semibold text-xl tracking-tight" to="/">
            Recipe Book
          </Link>
        </div>

        <div className="flex flex-row  content-center">
          <div className="text-sm flex flex-row ">
            <a
              href="#responsive-header"
              className="block  lg:inline-block lg:mt-0 hover:text-white mr-6"
            >
              Recipes
            </a>
            <a
              href="#responsive-header"
              className="block mr-6  lg:inline-block lg:mt-0 hover:text-white "
            >
              Shopping List
            </a>
          </div>
        </div>
      </div>{" "}
      <div className="flex items-center gap-3">
        <div>Manage</div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Header;
