"use client";

import React from "react";
import {
  House,
  WalletCards,
  FileClock,
  TicketPercent,
  UserRoundPlus,
  UserRound,
  UsersRound,
  Settings,
  ChevronDown,
} from "lucide-react";

type MenuItem = {
  label: string;
  icon: React.ElementType;
  dropdown?: boolean;
};

const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    icon: House,
  },
  {
    label: "Assets",
    icon: WalletCards,
    dropdown: true,
  },
  {
    label: "Orders",
    icon: FileClock,
    dropdown: true,
  },
  {
    label: "Rewards Hub",
    icon: TicketPercent,
  },
  {
    label: "Referral",
    icon: UserRoundPlus,
  },
  {
    label: "Account",
    icon: UserRound,
    dropdown: true,
  },
  {
    label: "Sub Accounts",
    icon: UsersRound,
  },
  {
    label: "Settings",
    icon: Settings,
  },
];

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
          const isActive = index === 0;

          return (
            <button
              key={item.label}
              className={`
                relative
                flex
                w-full
                h-full
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
              {/* Icon */}
              <Icon
                size={25}
                strokeWidth={1.8}
                className="shrink-0"
              />

              {/* Text */}
              <span
                className={`
                  ml-[15px]
                  text-[16px]
                  font-medium
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

              {/* Dropdown */}
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