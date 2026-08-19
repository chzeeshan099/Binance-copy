"use client";
import React from "react";
import {
  Search,
  Download,
  UserCircle,
  WalletCards,
  MessageSquare,
  Globe,
  Moon,
  ChevronDown,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import { IoMoonOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="h-[70px] w-full bg-[#181a20] text-[#eaecef]">
      <div className="flex h-full items-center justify-between px-[20px]">
        
        {/* ================= LEFT SIDE ================= */}
        <div className="flex items-center">
        {/* ================= LOGO ================= */}
        <div className="flex shrink-0 items-center">
        <Image
            src="/binance.png"
            alt={`binance logo`}
            height={700}
            width={700}
            className="object-cover w-[120px] h-auto"
          />
        </div>

        {/* ================= MAIN MENU ================= */}
        <nav className="ml-[20px] flex items-center gap-[20px] whitespace-nowrap">

          <NavItem label="Buy Crypto" />

          <NavItem label="Markets" />

          <NavItem label="Trade" dropdown />

          <NavItem label="Futures" dropdown />

          <NavItem label="Earn" dropdown />

          <NavItem label="Square" dropdown />

          <NavItem label="More" dropdown />

        </nav>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-[15px]">

          {/* Search */}
          <button className="">
            <Search
              size={20}
              strokeWidth={2}
              className="text-[#eaecef] hover:text-[#F0B90B] h-[24px] w-[24px]"
            />
          </button>

          {/* Deposit */}
          <button
            className="
              flex items-center gap-[9px]
              rounded-[6px]
              bg-[#fcd535]
              px-[18px] py-[8px]
              text-[14px]
              font-medium
              text-[#181a20]
              transition-colors
              hover:bg-[#f0c800]
            "
          >
            <Download className="h-[16px] w-[16px]"/>
            <span>Deposit</span>
          </button>

          {/* User */}
          <button className="">
            <UserCircle
              size={20}
              strokeWidth={2}
              className="text-[#eaecef] hover:text-[#F0B90B] h-[24px] w-[24px]"
            />
          </button>

          {/* Wallet */}
          <button className="">
            <Wallet
              size={20}
              strokeWidth={1.8}
              className="text-[#eaecef] hover:text-[#F0B90B] h-[24px] w-[24px]"
            />
          </button>

          {/* Messages */}
          <button className="relative flex h-[30px] w-[30px] items-center justify-center">
            <MessageSquare
              size={20}
              strokeWidth={1.8}
              className="text-[#eaecef] hover:text-[#F0B90B] h-[24px] w-[24px]"
            />

            {/* Yellow notification dot */}
            <span className="absolute right-[3px] top-[3px] h-[7px] w-[7px] rounded-full bg-[#fcd535]" />
          </button>

          {/* Download */}
          <button className="">
          <Image
            src="/download.png"
            alt={`binance logo`}
            height={700}
            width={700}
            className="object-cover w-[26px] h-auto"
          />
            {/* <Download
              size={20}
              strokeWidth={1.8}
              className="text-[#eaecef] hover:text-[#F0B90B] h-[24px] w-[24px]"
            /> */}
          </button>

          {/* Globe */}
          <button className="">
          <Image
            src="/earth.png"
            alt={`binance logo`}
            height={700}
            width={700}
            className="object-cover w-[28px] h-auto"
          />
            {/* <Globe
              size={20}
              strokeWidth={1.8}
              className="text-[#eaecef] hover:text-[#F0B90B] h-[24px] w-[24px]"
            /> */}
          </button>

          {/* Dark Mode */}
          <button className="">
            <IoMoonOutline 
              size={20}
              strokeWidth={1.8}
              className="text-[#eaecef] hover:text-[#F0B90B] h-[24px] w-[24px]"
            />
          </button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;


/* ================================================= */
/* NAV ITEM                                          */
/* ================================================= */

type NavItemProps = {
  label: string;
  dropdown?: boolean;
};

const NavItem = ({ label, dropdown }: NavItemProps) => {
  return (
    <button
      className="
        flex
        items-center
        gap-[0px]
        text-[14px]
        font-medium
        
        text-[#eaecef]
        transition-colors
        hover:text-[#F0B90B]
      "
    >
      <span>{label}</span>

      {dropdown && (
        <ChevronDown
          size={16}
          strokeWidth={2}
          className="mt-[2px]"
        />
      )}
    </button>
  );
};