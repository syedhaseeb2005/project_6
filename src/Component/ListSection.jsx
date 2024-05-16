import React from "react";
import logo from "../assets/logo.png";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import img2 from "../assets/Rectangles.svg";
import img3 from "../assets/Rectangle.svg";

const ListSection = () => {
  return (
    <>
      {/* <div
        className="h-full bg-cover bg-no-repeat bg-left"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div
          className="h-full w-full bg-cover bg-no-repeat bg-right"
          style={{ backgroundImage: `url(${img3})` }}
        > */}
          <div className="px-5 lg:px-32 sm:flex relative sm:items-center sm:justify-center">
          <img src={img2} className="absolute sm:w-[600px] sm:h-[] -left-32 w-[1000px] h-[1000px]" alt="" />
            <img src={img3} className="absolute -right-0 top-20 w-[700px] h-[700px]" alt="" />
            <div className="lg:pt-32 pt-10">
              <h1 className="text-center text-md font-semibold lg:text-[50px] w-[70%] mx-auto lg:leading-[60px] md:text-5xl">
                Find below the list of the best{" "}
                <span className="text-[#03E1FF]">Solana launchpads</span>
              </h1>
              <div className="flex flex-col gap-6 items-center justify-center mt-20 mb-10">
                <div className="flex items-center gap-7">
                  <h1 className="border border-[#DB1FFF] text-xl py-2 px-10">
                    Asvoria
                  </h1>
                  <div className="rounded-full w-3 h-3 bg-[#03e1ff]"></div>
                </div>
                <div className="flex items-center gap-7">
                  <div className="rounded-full w-3 h-3 bg-[#03e1ff]"></div>
                  <h1 className="border border-[#DB1FFF] text-xl py-2 px-10">
                    Pinksale
                  </h1>
                </div>
                <div className="flex items-center gap-7">
                  <h1 className="border border-[#DB1FFF] text-xl py-2 px-10">
                    We Will See
                  </h1>
                  <div className="rounded-full w-3 h-3 bg-[#03e1ff]"></div>
                </div>
                <div className="flex items-center gap-7">
                  <div className="rounded-full w-3 h-3 bg-[#03e1ff]"></div>
                  <h1 className="border border-[#DB1FFF] text-xl py-2 px-10">
                    Pinksale
                  </h1>
                </div>
                <div className="flex items-center gap-7">
                  <h1 className="border border-[#DB1FFF] text-xl py-2 px-10">
                    Asvoria
                  </h1>
                  <div className="rounded-full w-3 h-3 bg-[#03e1ff]"></div>
                </div>
                <div className="flex items-center gap-7">
                  <div className="rounded-full w-3 h-3 bg-[#03e1ff]"></div>
                  <h1 className="border border-[#DB1FFF] text-xl py-2 px-10">
                    Asvoria
                  </h1>
                </div>
                <div className="flex items-center gap-7">
                  <h1 className="border border-[#DB1FFF] text-xl py-2 px-10">
                    Asvoria
                  </h1>
                  <div className="rounded-full w-3 h-3 bg-[#03e1ff]"></div>
                </div>
              </div>
            </div>
          </div>
        {/* </div>
      </div> */}
      <footer class="lg:flex lg:justify-center pt-10 px-6 lg:px-32">
        <header class="">
          <img src={logo} alt="SolanaKYC Logo" class="mb-5" />
          <p class="lg:text-xs text-sm md:text-base md:w-[50%] lg:w-[57%] mb-5">
            Disclaimer: SolanaKYC is an independent community project focused on
            bringing fairness and transparency to the Solana ecosystem. We are
            not affiliated with the Solana brand, and the Solana name and logo
            are the property of their respective owners. Our mission is to
            provide identity verification services for project owners to help
            ensure trust and legitimacy within the Solana community.
          </p>
        </header>
        <div className="flex gap-4">
          <div className="">
            <h1>Menu</h1>
            <ul className="text-gray-500">
              <li>HOW?</li>
              <li>WHY?</li>
              <li>APPLY?</li>
            </ul>
          </div>
          <div class="text-[#DB1FFF] flex gap-3">
            <FaTelegramPlane
              aria-label="Telegram"
              class="bg-gradient-to-t rounded-lg from-[#DB1FFF] w-9 h-9 p-2"
            />
            <FaXTwitter
              aria-label="Twitter"
              class="shadow-lg bg-gradient-to-t rounded-lg from-[#DB1FFF] w-9 h-9 p-2"
            />
          </div>
        </div>
      </footer>
      <div className="">
        <hr />
        <h1 className="text-center mt-3 text-xl mb-3">© Copywirght | Solana</h1>
      </div>
    </>
  );
};

export default ListSection;
