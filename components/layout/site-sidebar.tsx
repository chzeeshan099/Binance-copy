"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

type IconProps = {
  className?: string;
};

type MenuItem = {
  label: string;
  icon: React.ElementType;
  dropdown?: boolean;
};

/* =========================================================
   DASHBOARD ICON
========================================================= */

const DashboardIcon = ({ className = "" }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4.8 10.8v8.39h14.4V10.8L12 4.4l-7.2 6.4zM21 19.49c0 .83-.67 1.5-1.5 1.5H4.35c-.76-.08-1.35-.72-1.35-1.5v-8.83c0-.43.18-.84.5-1.12L11 2.88c.57-.5 1.42-.5 1.99 0l7.5 6.67c.32.28.5.69.5 1.12v8.83l.01-.01z"
      fill="currentColor"
    />
    <path
      d="M8.82 12.99L12 9.81l3.18 3.18L12 16.17l-3.18-3.18z"
      fill="currentColor"
    />
  </svg>
);

/* =========================================================
   ASSETS ICON
========================================================= */

const AssetsIcon = ({ className = "" }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M22.4 10.1v6.045h-4.9a1.4 1.4 0 01-1.4-1.4V11.5a1.4 1.4 0 011.4-1.4h4.9zm-4.5 4.246h2.7V11.9h-2.7v2.446zM21 6.1v1.8H3V6.1h18z"
      fill="currentColor"
    />
    <path
      d="M3.3 19.2h17.4V4.8H3.3v14.4zm19.2.3a1.5 1.5 0 01-1.347 1.492L21 21H3l-.153-.008a1.5 1.5 0 01-1.34-1.339L1.5 19.5v-15A1.5 1.5 0 013 3h18l.153.008A1.5 1.5 0 0122.5 4.5v15z"
      fill="currentColor"
    />
  </svg>
);

/* =========================================================
   ORDERS ICON
========================================================= */

const OrdersIcon = ({ className = "" }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20.675 17.05a3.7 3.7 0 10-3.7 3.7v1.8a5.5 5.5 0 110-11 5.5 5.5 0 010 11v-1.8a3.7 3.7 0 003.7-3.7z"
      fill="currentColor"
    />
    <path
      d="M16.075 15.303a.9.9 0 011.8 0v1.434l.734.727a.9.9 0 01-1.268 1.278l-.851-.844a1.4 1.4 0 01-.415-.994v-1.601z"
      fill="currentColor"
    />
    <path
      d="M20.9 9.5a.9.9 0 01-1.8 0V3.4H4.9v17.2h4.6l.092.005a.9.9 0 010 1.79L9.5 22.4h-5A1.4 1.4 0 013.1 21V3a1.4 1.4 0 011.4-1.4h15A1.4 1.4 0 0120.9 3v6.5z"
      fill="currentColor"
    />
  </svg>
);

/* =========================================================
   REWARDS HUB ICON
========================================================= */

const RewardsHubIcon = ({ className = "" }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M11.973 7.8c.5 0 .9.4.9.9v1.512l1.29-.422c.47-.16.98.1 1.13.57.15.48-.11.98-.58 1.14l-1.595.52 1.455 1.56c.34.37.32.94-.04 1.28a.9.9 0 01-1.27-.04l-1.325-1.42-1.285 1.38a.9.9 0 01-1.27.04.91.91 0 01-.04-1.28l1.397-1.5-1.507-.5a.906.906 0 01-.59-1.14c.15-.47.66-.73 1.13-.57l1.3.43V8.7c0-.5.4-.9.9-.9z"
      fill="currentColor"
    />
    <path
      d="M3.3 8.54c.48.18.9.5 1.24.94l.18.26c.8 1.25.8 3.01 0 4.26l-.18.26c-.34.44-.77.76-1.24.94v3.3h17.2v-3.3a2.8 2.8 0 01-1.04-.71l-.2-.23c-1.05-1.34-1.05-3.44 0-4.78l.2-.23c.3-.32.66-.56 1.04-.71V5.3H3.3v3.24zm19 .64c0 .53-.4.92-.85.99h-.09c-.2.02-.45.13-.68.42-.54.69-.54 1.88 0 2.57l.09.1c.21.22.42.3.59.31h.09c.46.08.85.47.85 1v4.47c-.07.66-.6 1.18-1.26 1.25H2.9a1.4 1.4 0 01-1.39-1.26v-4.47a1 1 0 01.94-1h.08c.18-.04.4-.15.6-.41l.09-.13c.41-.65.41-1.64 0-2.3l-.09-.13c-.2-.26-.42-.37-.6-.4h-.08c-.49-.04-.94-.44-.94-1.01V4.9c-.01-.77.62-1.4 1.39-1.4h18.14c.71.08 1.26.68 1.26 1.4v4.28z"
      fill="currentColor"
    />
  </svg>
);

/* =========================================================
   REFERRAL ICON
========================================================= */

const ReferralIcon = ({ className = "" }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M11.78 12.6a.9.9 0 010 1.8H8A4.6 4.6 0 003.4 19v2.5a.9.9 0 01-1.8 0V19A6.4 6.4 0 018 12.6h3.78zM9 2a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.8a2.7 2.7 0 100 5.4 2.7 2.7 0 000-5.4zM18 13.1a.9.9 0 01.9.9v2.6h2.6a.9.9 0 010 1.8h-2.6V21a.9.9 0 01-1.8 0v-2.6h-2.6a.9.9 0 010-1.8h2.6V14a.9.9 0 01.9-.9z"
      fill="currentColor"
    />
  </svg>
);

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
      d="M14.7 6.3A2.7 2.7 0 1012 9v1.8a4.5 4.5 0 110-9 4.5 4.5 0 010 9V9a2.7 2.7 0 002.7-2.7zM18.1 21.302v-2.5a4.6 4.6 0 00-4.364-4.594l-.236-.006h-3a4.6 4.6 0 00-4.6 4.6v2.5a.9.9 0 01-1.8 0v-2.5a6.4 6.4 0 016.4-6.4h3l.33.008a6.4 6.4 0 016.07 6.392v2.5a.9.9 0 01-1.8 0z"
      fill="currentColor"
    />
  </svg>
);

/* =========================================================
   SUB ACCOUNTS ICON
========================================================= */

const SubAccountsIcon = ({ className = "" }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M1.6 21.5V19A6.4 6.4 0 018 12.6h3.5a.9.9 0 010 1.8H8A4.6 4.6 0 003.4 19v2.5a.9.9 0 01-1.8 0zM15 20.6h6.5a.9.9 0 010 1.8H15a.9.9 0 010-1.8zM15 16.6h6.5a.9.9 0 010 1.8H15a.9.9 0 010-1.8zM15 12.6h6.5a.9.9 0 010 1.8H15a.9.9 0 010-1.8zM11.7 6.5A2.7 2.7 0 109 9.2V11a4.5 4.5 0 110-9 4.5 4.5 0 010 9V9.2a2.7 2.7 0 002.7-2.7z"
      fill="currentColor"
    />
  </svg>
);

/* =========================================================
   SETTINGS ICON
========================================================= */

const SettingsIcon = ({ className = "" }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M11.646 8.854a.5.5 0 01.707 0l2.793 2.793a.5.5 0 010 .707l-2.793 2.793a.5.5 0 01-.707 0l-2.792-2.793a.5.5 0 010-.707l2.793-2.793z"
      fill="currentColor"
    />
    <path
      d="M19.327 8.404a1.1 1.1 0 00-.55-.952L12.55 3.857a1.1 1.1 0 00-1.1 0L5.223 7.452a1.1 1.1 0 00-.55.952v7.192c0 .393.21.756.55.952l6.227 3.596a1.1 1.1 0 001.1 0l6.227-3.596a1.1 1.1 0 00.55-.952V8.404zm1.8 7.192a2.9 2.9 0 01-1.45 2.51l-6.227 3.596a2.9 2.9 0 01-2.9 0l-6.227-3.596a2.9 2.9 0 01-1.45-2.51V8.404a2.9 2.9 0 011.45-2.51l6.227-3.596a2.9 2.9 0 012.9 0l6.227 3.596a2.9 2.9 0 011.45 2.51v7.192z"
      fill="currentColor"
    />
  </svg>
);


/* =========================================================
   MENU ITEMS
========================================================= */

const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    icon: DashboardIcon,
  },
  {
    label: "Assets",
    icon: AssetsIcon,
    dropdown: true,
  },
  {
    label: "Orders",
    icon: OrdersIcon,
    dropdown: true,
  },
  {
    label: "Rewards Hub",
    icon: RewardsHubIcon,
  },
  {
    label: "Referral",
    icon: ReferralIcon,
  },
  {
    label: "Account",
    icon: AccountIcon,
    dropdown: true,
  },
  {
    label: "Sub Accounts",
    icon: SubAccountsIcon,
  },
  {
    label: "Settings",
    icon: SettingsIcon,
  },
];


/* =========================================================
   SIDEBAR
========================================================= */

const Sidebar = () => {
  return (
    <aside
      className="
        w-[250px]
        bg-[#181A20]
        text-[#848E9C]
      "
    >
      <nav className="flex flex-col gap-2 pt-3">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          // Abhi first item active hai
          const isActive = index === 0;

          return (
            <button
              key={item.label}
              type="button"
              className={`
                relative
                flex
                w-full
                items-center
                py-4
                px-[28px]
                text-left
                transition-colors
                rounded-r-[16px]

                ${
                  isActive
                    ? `
                      bg-[#2B3441]
                      text-[#F5F5F5]
                    `
                    : `
                      text-[#848E9C]
                      hover:bg-[#2B3441]
                      hover:text-[#EAECEF]
                    `
                }
              `}
            >
              {/* Custom SVG Icon */}
              <Icon
                className="
                  w-6
                  h-6
                  shrink-0
                "
              />

              {/* Label */}
              <span
                className={`
                  ml-[15px]
                  text-[16px]
                  leading-none
                  ${
                    isActive
                      ? "font-semibold text-[#F5F5F5]"
                      : "font-medium text-[#848E9C]"
                  }
                `}
              >
                {item.label}
              </span>

              {/* Dropdown Arrow */}
              {item.dropdown && (
                <ChevronDown
                  size={23}
                  strokeWidth={1.8}
                  className="
                    absolute
                    right-[39px]
                    text-[#848E9C]
                  "
                />
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;