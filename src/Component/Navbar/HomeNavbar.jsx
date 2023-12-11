import { Button } from "@nextui-org/react";
import { BsCloudDownload } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <div>
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav
          className="mt-6 relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <div>
              <img
                className="w-12 rounded-full "
                src="https://i.ibb.co/Nj32r3V/FB-IMG-1668143230958.jpg"
                alt=""
              />
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle w-8 h-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="flex flex-col gap-y-4 py-3 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
              <NavLink
              to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-base underline font-orbitron" : "font-orbitron"
                }
              >
                Home
              </NavLink>
              <NavLink className="text-base font-orbitron ">About Me</NavLink>
              <NavLink className="text-base font-orbitron ">Skill</NavLink>
              <NavLink className="text-base font-orbitron ">Service</NavLink>
              <NavLink className="text-base font-orbitron ">Contact</NavLink>

              <Button
                radius="full"
                className="bg-gradient-to-tr font-orbitron from-pink-500 to-yellow-500 text-white shadow-lg"
              >
                <BsCloudDownload />
                Resume
              </Button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HomeNavbar;