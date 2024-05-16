import React from "react";
import logo from "../assets/logo.png";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ListSection = () => {
  return (
    <>
      <div className=" px-5 lg:px-32 sm:flex sm:items-center sm:justify-center">
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
      <footer class=" md:flex lg:flex md:px-10 pt-10 lg:items-center bg-[#1A1A1A] lg:pt-20 px-5 lg:px-32 lg:mb-0 pb-3 mb-5">
        <header class="flex-[6] md:flex-[2]">
          <img src={logo} alt="SolanaKYC Logo" class="mb-5" />
          <p class="lg:text-xs text-sm md:text-base md:w-[50%] lg:w-[57%] mb-5">
            Disclaimer: SolanaKYC is an independent community project focused on
            bringing fairness and transparency to the Solana ecosystem. We are
            not affiliated with the Solana brand, and the Solana name and logo
            are the property of their respective owners. Our mission is to
            provide identity verification services for project owners to help
            ensure trust and legitimacy within the Solana community.
          </p>
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
        </header>

        {/* <!-- Navigation and Legal Links --> */}
        <nav class="flex justify-content-space-between mt-10">
          <div class="flex-1 md:flex-[2]">
            <h1 class="text-white">Menu</h1>
            <ul class="text-gray-500" role="navigation">
              <li>
                <a href="#">Why</a>
              </li>
              <li>
                <a href="#">How</a>
              </li>
              <li>
                <a href="#">Apply</a>
              </li>
            </ul>
          </div>
          <div class="flex-1 md:flex-[2]">
            <h1 class="text-white">Legal</h1>
            <ul class="text-gray-500" role="navigation">
              <li>
                <a href="#">Term</a>
              </li>
              <li>
                <a href="#">Cookie & Privacy</a>
              </li>
              <li>
                <a href="#">Disclaimer</a>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default ListSection;
