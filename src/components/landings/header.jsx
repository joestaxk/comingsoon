import { useState } from "react";

export default function Header() {
    const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="relative flex justify-center z-[99] overflow-hidden">
        <div className="xl:w-[1400px] w-full flex py-3  px-2 lg:justify-around justify-between items-center">
          <img src="/liaex.png" className="w-[200px] " alt="liaex" />

          <div className="text-[#f5f5f5] text-[1.15rem] flex items-center gap-5">
            <ul className="md:flex gap-5 hidden">
              <li>
                <a href="#" className="">
                  Home
                </a>
              </li>

              <li>
                <a href="http://liachain.com/" target="_parent" className="">
                  ICO
                </a>
              </li>

              <li>
                <a href="#contact" className="">
                  Contact us
                </a>
              </li>
            </ul>
            

            <div className="md:flex gap-5 items-center hidden">
              <button className="border border-[#F49F1C] hover:bg-[#F49F1C]  transition-all duration-300 rounded-md py-1 px-8">
                Login
              </button>
              <button className="bg-[#F49F1C] border border-[#F49F1C] hover:bg-transparent transition-all duration-300 rounded-md py-1 px-8">
                Sign Up
              </button>
            </div>


            {/* open button */}
            <div className="">
              <button onClick={() => setToggle(true)} className="border rounded-lg md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <svg
          className="absolute  bottom-0"
          width="1275"
          height="2"
          viewBox="0 0 1275 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M0 0.999985L1275 0.999873"
            stroke="url(#paint0_linear_11_6435)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_11_6435"
              x1="178"
              y1="1"
              x2="1222.5"
              y2="1.00012"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* mobile nav bar */}
      <div
      style={{position: "fixed", top: toggle ? "0": "-100rem", transition: ".5s all"}}
       className="w-full p-10 px-3 bg-[#1e1c1d] z-[100]">
        <div
        style={{display: toggle ? "block": "none"}}
         onClick={() => setToggle(false)} className="absolute w-screen h-screen inset-0 z-[-10]"></div>
        <div className="flex text-[#f5f5f5] justify-between items-center">
          <div className="flex gap-4 items-center">
            <a href="/" className="text-[18px] font-semibold">
              <span>Lia </span>
              <span className="text-[#F49F1C]">chain</span>
            </a>
            <button className="xs:block hidden border border-[#F49F1C] hover:bg-[#F49F1C]  transition-all duration-300 rounded-md py-1 px-8">
              Login
            </button>
            <button className="xs:block hidden bg-[#F49F1C] border border-[#F49F1C] hover:bg-transparent transition-all duration-300 rounded-md py-1 px-8">
              Sign Up
            </button>
          </div>

        {/* close it */}
          <div className="">
            <button onClick={() => setToggle(false)} className="border border-gray-100/20 cursor-pointer rounded-lg md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-5 flex justify-center gap-5 xs:hidden flex-wrap text-[#f5f5f5]">
          <button className="border border-[#F49F1C] hover:bg-[#F49F1C]  transition-all duration-300 rounded-md py-1 px-8">
            Login
          </button>
          <button className="bg-[#F49F1C] border border-[#F49F1C] hover:bg-transparent transition-all duration-300 rounded-md py-1 px-8">
            Sign Up
          </button>
        </div>
        <ul className="block mt-8 space-y-4">
          <li className="bg-[#f49f1c] p-3 rounded-lg text-center text-[#f5f5f5] hover:font-semibold cursor-pointer">
            <a href="#" className="block">
              Home
            </a>
          </li>

          <li className="border-[#f49f1c] border p-3 rounded-lg text-center text-[#f5f5f5] hover:font-semibold cursor-pointer">
            <a href="https://liachain.com" target="_blank"  className="block">
              ICO
            </a>
          </li>

          <li className="border-[#f49f1c] border p-3 rounded-lg text-center text-[#f5f5f5] hover:font-semibold cursor-pointer">
            <a href="#contact" className="block">
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
