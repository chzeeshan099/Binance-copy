"use client";

import React from "react";
import {
  Copy,
  ChevronRight,
  CircleUserRound,
} from "lucide-react";
import Image from "next/image";

const UserProfile = () => {
  return (
    <section className="h-[196px] w-full bg-[#181A20] text-[#EAECEF]">
      <div className="flex h-full items-center px-[19px] w-full">

        {/* ================= USER ================= */}
        <div className="flex w-[29%] items-center">

          {/* Avatar */}
          <div
            className="
              flex
              h-[55px]
              w-[55px]
              shrink-0
              overflow-hidden
              rounded-full
              bg-[#f0bb0b28]
            "
          >
           <Image
               src="/rank1.png"
               alt="Wallet"
               width={700}
               height={700}
               className="!h-[60px] !w-[60px] object-contain"
             />
          </div>

          {/* Name + Social */}
          <div className="ml-[25px]">

            <h2
              className="
                text-[18px]
                font-semibold
                leading-[26px]
                tracking-[-0.3px]
                text-[#eaecef]
              "
            >
              User-0f4c7
            </h2>

            <div className="mt-[15px] flex items-center">

              {/* Social icon circle */}
             <div
  className="
    flex
    h-[30px]
    w-[30px]
    items-center
    justify-center
    rounded-full
    bg-[#2B3441]
  "
>
  <svg
    className="bn-svg text-[#687487]"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.3 7.675v8.65L7.675 20.7h8.65l4.375-4.375v-8.65L16.325 3.3h-8.65L3.3 7.675zm19.2 8.774l-.008.149a1.5 1.5 0 01-.431.912l-4.551 4.55-.11.1a1.5 1.5 0 01-.95.34h-8.9l-.148-.008a1.5 1.5 0 01-.801-.332l-.11-.1-4.552-4.55a1.5 1.5 0 01-.431-.912l-.008-.149V7.551c0-.398.158-.78.44-1.06l4.55-4.552a1.5 1.5 0 01.912-.431l.149-.008h8.898a1.5 1.5 0 011.06.44l4.552 4.55a1.5 1.5 0 01.439 1.06v8.9z"
      fill="currentColor"
    />

    <path
      d="M7.15 12a4.85 4.85 0 119.7 0 4.85 4.85 0 01-9.7 0zm-1.8 0a6.65 6.65 0 1013.301 0A6.65 6.65 0 005.35 12z"
      fill="currentColor"
    />

    <path
      d="M9.238 12.512a.9.9 0 011.274-1.274l.964.965 2.274-2.274.068-.062a.9.9 0 011.266 1.266l-.061.069-2.84 2.84a1 1 0 01-1.415 0l-1.53-1.53z"
      fill="currentColor"
    />
  </svg>
</div>

              {/* Link button */}
              <button
                className="
                  ml-[14px]
                  flex
                  h-[32px]
                  items-center
                  gap-[4px]
                  rounded-[5px]
                  bg-[#312E23]
                  px-[6px]
                  text-[12px]
                  font-medium
                  text-[#F0B90B]
                "
              >
                <span>Link Social Account</span>

                <ChevronRight
                  size={16}
                  strokeWidth={2}
                />
              </button>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="h-[48px] w-px bg-[#3A404B] mx-11" />

        <div className="w-[60%] grid grid-cols-3">

        {/* ================= UID ================= */}
        <div className=" self-start pt-[13px]">

          <p
            className="
              text-[14px]
              font-normal
              leading-[20px]
              text-[#707a8a]
            "
          >
            UID
          </p>

          <div className="mt-[3px] flex items-center gap-[12px]">

            <span
              className="
                text-[14px]
                font-normal
                leading-[20px]
                text-[#EAECEF]
              "
            >
              474900736
            </span>

            <Copy
              size={15}
              strokeWidth={1.8}
              className="text-[#687487]"
            />
          </div>

          {/* Followers */}
          <div className="mt-[52px]">

            <p
              className="
               text-[14px]
              font-normal
              leading-[20px]
              text-[#707a8a]
              "
            >
              Followers
            </p>

            <div className="mt-[3px] flex items-center gap-[7px]">

              <span
                className="
                 text-[14px]
                font-normal
                leading-[20px]
                text-[#EAECEF]
                "
              >
                0
              </span>

              <ChevronRight
                size={15}
                strokeWidth={1.8}
                className="text-[#687487]"
              />
            </div>
          </div>
        </div>

        {/* ================= VIP LEVEL ================= */}
        <div className="w-[280px] self-start pt-[13px]">

          <p
            className="
             text-[14px]
              font-normal
              leading-[20px]
              text-[#707a8a]
            "
          >
            VIP Level
          </p>

          <button className="mt-[3px] flex items-center gap-[7px]">

            <span
              className="
                text-[14px]
                font-normal
                leading-[20px]
                text-[#EAECEF]
              "
            >
              Regular User
            </span>

            <ChevronRight
                size={15}
                strokeWidth={1.8}
                className="text-[#687487]"
            />
          </button>
        </div>

        {/* ================= FOLLOWING ================= */}
        <div className="self-start pt-[13px]">

          <p
            className="
              text-[14px]
              font-normal
              leading-[20px]
              text-[#707a8a]
            "
          >
            Following
          </p>

          <button className="mt-[3px] flex items-center gap-[7px]">

            <span
              className="
              text-[14px]
                font-normal
                leading-[20px]
                text-[#EAECEF]
              "
            >
              0
            </span>

            <ChevronRight
                size={15}
                strokeWidth={1.8}
                className="text-[#687487]"
            />
          </button>
        </div>
        </div>


      </div>
    </section>
  );
};

export default UserProfile;