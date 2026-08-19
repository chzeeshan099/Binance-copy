"use client";

import React from "react";
import Image from "next/image";
import { Wallet, ChevronDown } from "lucide-react";

/* =========================================================
   ICON TYPES
========================================================= */

type IconProps = {
  className?: string;
};

/* =========================================================
   ACCOUNT ICON
========================================================= */

const AccountIcon = ({ className = "" }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-.87 13.9a3.1 3.1 0 00-3.099 3.085 8.058 8.058 0 004.1 1.115 8.058 8.058 0 004.099-1.115 3.099 3.099 0 00-3.1-3.085h-2zM12 3.82a8.18 8.18 0 00-5.65 14.095 4.903 4.903 0 014.78-3.815h2c2.26 0 4.16 1.529 4.727 3.608A8.18 8.18 0 0012 3.819zm.13 1.78a3.901 3.901 0 110 7.802 3.901 3.901 0 010-7.802zm0 1.8a2.1 2.1 0 100 4.2 2.1 2.1 0 000-4.2z"
      fill="currentColor"
    />
  </svg>
);

/* =========================================================
   WALLET ICON
========================================================= */

const WalletIcon = ({ className = "" }: IconProps) => (
  <Wallet
    className={className}
    strokeWidth={1.8}
  />
);

/* =========================================================
   MESSAGE ICON
========================================================= */

const MessageIcon = ({ className = "" }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20.653 2.508A1.5 1.5 0 0122 4v12.273l-.008.153a1.5 1.5 0 01-1.339 1.339l-.153.008h-6.092l-.05.013-5.816 3.397-.19.093A1.502 1.502 0 016.3 20.1l-.014-.212v-2.014a.101.101 0 00-.061-.093l-.04-.008H3.5l-.153-.007a1.5 1.5 0 01-1.34-1.34L2 16.274V4a1.5 1.5 0 011.347-1.492L3.5 2.5h17l.153.008zM3.8 15.973h2.386a1.9 1.9 0 011.9 1.9v1.491l5.364-3.132.11-.06c.263-.131.554-.2.848-.2H20.2V4.3H3.8v11.673zm13.292-4.369a.9.9 0 010 1.792L17 13.4H7a.9.9 0 010-1.8h10l.092.005zm0-4.5a.9.9 0 010 1.792L17 8.9H7a.9.9 0 010-1.8h10l.092.004z"
      fill="currentColor"
    />
  </svg>
);

/* =========================================================
   APP DOWNLOAD ICON
========================================================= */

const AppDownloadIcon = ({ className = "" }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2a1 1 0 011 1v11.586l3.293-3.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L11 14.586V3a1 1 0 011-1z"
      fill="currentColor"
    />
    <path
      d="M4 20a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z"
      fill="currentColor"
    />
  </svg>
);

/* =========================================================
   LANGUAGE ICON
========================================================= */

const LanguageIcon = ({ className = "" }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M17.863 1.901c1.279-.325 2.658-.332 3.565.575.69.69.845 1.661.748 2.608-.098.956-.463 2.038-1.012 3.165-.077.157-.159.316-.244.476.375 1.021.58 2.124.58 3.275 0 5.246-4.253 9.5-9.5 9.5a9.484 9.484 0 01-3.274-.58c-.16.084-.32.166-.477.243-1.127.55-2.209.916-3.165 1.014-.946.096-1.917-.06-2.607-.75-.848-.848-.894-2.11-.639-3.295.2-.922.61-1.95 1.183-3.028a9.5 9.5 0 0112.37-11.978c.535-.363 1.548-.99 2.472-1.225zM4.046 17.193c-.168.434-.38 1.004-.448 1.317-.214.993-.035 1.457.152 1.644.151.15.475.3 1.15.232.496-.051 1.103-.215 1.802-.5a9.549 9.549 0 01-2.656-2.693zm15.486-6.195c-1.047 1.518-2.368 3.103-3.9 4.635-1.531 1.531-3.116 2.852-4.634 3.899a7.6 7.6 0 008.534-8.534zM4.467 13a7.605 7.605 0 004.256 5.857l.168-.102c-.729-1.49-1.184-3.528-1.273-5.755h-3.15zm4.953 0c.085 1.916.462 3.574.987 4.746a32.592 32.592 0 003.953-3.387c.085-.085.168-.17.25-.256.005-.304.003-.72-.002-1.103H9.42zm5.283-8.105c.223.35.424.736.6 1.149.594 1.388.975 3.186 1.072 5.155h.782c.66-.853 1.23-1.688 1.7-2.479a7.624 7.624 0 00-4.154-3.825zm-5.407 0A7.606 7.606 0 004.442 11.2h3.183c.097-1.969.48-3.767 1.073-5.155.176-.412.375-.8.598-1.149zm2.705.004c-.178 0-.424.08-.73.383-.31.306-.63.795-.918 1.469-.486 1.137-.83 2.686-.925 4.448h5.144c-.095-1.762-.438-3.311-.924-4.448-.288-.674-.608-1.163-.918-1.469-.306-.302-.552-.383-.73-.383zm8.154-1.15c-.203-.203-.727-.389-1.85-.104-.35.089-.716.257-1.053.439a9.55 9.55 0 012.634 2.617c.285-.699.448-1.305.5-1.8.068-.676-.08-1.001-.231-1.152z"
      fill="currentColor"
    />
  </svg>
);

/* =========================================================
   THEME / MOON ICON
========================================================= */

const ThemeIcon = ({ className = "" }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M2 12c0-3.781 2.1-7.07 5.195-8.77.711-.39 1.461.32 1.37 1.126l-.028.282A10.11 10.11 0 008.5 5.5l.013.514a10 10 0 009.472 9.472l.515.013c.388 0 .77-.022 1.146-.065.805-.092 1.516.658 1.126 1.37l-.164.286A9.993 9.993 0 0112 22v-1.8a8.178 8.178 0 006.258-2.905C11.933 17.168 6.83 12.066 6.703 5.742a8.176 8.176 0 00-2.898 5.968L3.8 12a8.2 8.2 0 008.2 8.2V22l-.515-.014a10 10 0 01-9.472-9.472L2 12z"
      fill="currentColor"
    />
  </svg>
);

/* =========================================================
   NAVBAR
========================================================= */

const Navbar = () => {
  return (
    <header className="h-[70px] w-full bg-[#181a20] text-[#eaecef]">
      <div className="flex h-full items-center justify-between px-[20px]">

        {/* ================= LEFT SIDE ================= */}

        <div className="flex items-center">

          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Image
              src="/binance.png"
              alt="Binance logo"
              width={700}
              height={700}
              className="h-auto w-[120px] object-cover"
            />
          </div>

          {/* Main Menu */}
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
          <button
            type="button"
            className="text-[#eaecef] transition-colors hover:text-[#F0B90B]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11"
                cy="11"
                r="7.5"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M16.5 16.5L21 21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Deposit */}
          <button
            type="button"
            className="
              flex
              items-center
              gap-[9px]
              rounded-[6px]
              bg-[#fcd535]
              px-[18px]
              py-[8px]
              text-[14px]
              font-medium
              text-[#181a20]
              transition-colors
              hover:bg-[#f0c800]
            "
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3V16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M7 11L12 16L17 11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 20H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <span>Deposit</span>
          </button>

          {/* =================================================
             1. ACCOUNT
          ================================================= */}

          <button
            type="button"
            className="
              flex
              items-center
              justify-center
              text-[#eaecef]
              transition-colors
              hover:text-[#F0B90B]
            "
          >
            <AccountIcon className="h-[26px] w-[26px]" />
          </button>

          {/* =================================================
             2. WALLET
          ================================================= */}

          <button
            type="button"
            className="
              flex
              items-center
              justify-center
              text-[#eaecef]
              transition-colors
              hover:text-[#F0B90B]
            "
          >
            <WalletIcon className="h-[25px] w-[25px]" />
          </button>

          {/* =================================================
             3. MESSAGES
          ================================================= */}

          <button
            type="button"
            className="
              relative
              flex
              items-center
              justify-center
              text-[#eaecef]
              transition-colors
              hover:text-[#F0B90B]
            "
          >
            <MessageIcon className="h-[25px] w-[25px]" />

            {/* Notification Dot */}
            <span
              className="
                absolute
                right-[1px]
                top-[1px]
                h-[7px]
                w-[7px]
                rounded-full
                bg-[#fcd535]
              "
            />
          </button>

          {/* =================================================
             4. APP DOWNLOAD
          ================================================= */}

         <button
  type="button"
  className="
    flex
    items-center
    justify-center
    text-[#eaecef]
  "
>
  <Image
    src="/download.png"
    alt="Wallet"
    width={700}
    height={700}
    className="h-[29px] w-[29px] object-contain"
  />
</button>

          {/* =================================================
             5. LANGUAGE
          ================================================= */}

          <button
            type="button"
            className="
              flex
              items-center
              justify-center
              text-[#eaecef]
              transition-colors
              hover:text-[#F0B90B]
            "
          >
            <LanguageIcon className="h-[25px] w-[25px]" />
          </button>

          {/* =================================================
             6. THEME / MOON
          ================================================= */}

          <button
            type="button"
            className="
              flex
              items-center
              justify-center
              text-[#eaecef]
              transition-colors
              hover:text-[#F0B90B]
            "
          >
            <ThemeIcon className="h-[25px] w-[25px]" />
          </button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;

/* =========================================================
   NAV ITEM
========================================================= */

type NavItemProps = {
  label: string;
  dropdown?: boolean;
};

const NavItem = ({ label, dropdown }: NavItemProps) => {
  return (
    <button
      type="button"
      className="
        flex
        items-center
        gap-0
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