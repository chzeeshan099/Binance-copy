"use client";

import { useMemo, useState } from "react";
import moment from "moment";
import { scholarships } from "@/lib/data";
import { ScholarshipCard2 } from "@/components/cards/scholarship-card2";
import { FadeIn } from "@/components/motion/fade-in";
import { getScholarshipStatus } from "@/lib/func";
import Image from "next/image";

const defaultFilters = {
  country: "All",
  degreeLevel: "All",
  intake: "All",
  university: "All",
  scholarshipType: "All",
  search: "",
};

export function ScholarshipsGrid() {
  const [filters, setFilters] = useState(defaultFilters);
  const [active, setActive] = useState("all");

  

  // -----------------------------------------
  // Add calculated status to scholarships
  // -----------------------------------------
  const scholarshipsWithStatus = useMemo(() => {
    return scholarships.map((item: any) => ({
      ...item,
      status: getScholarshipStatus(
        item.admissionOpen,
        item.deadline
      ),
    }));
  }, []);

  // -----------------------------------------
  // Real filter counts
  // -----------------------------------------
  const filtersOptions = useMemo(() => {
    const presentCount = scholarshipsWithStatus.filter(
      (item: any) => item.status === "present"
    ).length;

    const upcomingCount = scholarshipsWithStatus.filter(
      (item: any) => item.status === "upcoming"
    ).length;

    const expiredCount = scholarshipsWithStatus.filter(
      (item: any) => item.status === "expired"
    ).length;

    return [
      {
        label: "All Scholarships",
        count: scholarshipsWithStatus.length,
        type: "all",
      },
      {
        label: "Present",
        count: presentCount,
        type: "present",
        dot: "bg-green-500",
      },
      {
        label: "Upcoming",
        count: upcomingCount,
        type: "upcoming",
        dot: "bg-yellow-400",
      },
      {
        label: "Expired",
        count: expiredCount,
        type: "expired",
        dot: "bg-red-500",
      },
    ];
  }, [scholarshipsWithStatus]);

  // -----------------------------------------
  // Dropdown filter options
  // -----------------------------------------
  const filterOptions = useMemo(
    () => ({
      countries: [
        "All",
        ...new Set(
          scholarshipsWithStatus.map((item: any) => item.country)
        ),
      ],

      degreeLevels: [
        "All",
        ...new Set(
          scholarshipsWithStatus.map(
            (item: any) => item.degreeLevel
          )
        ),
      ],

      intakes: [
        "All",
        ...new Set(
          scholarshipsWithStatus.map(
            (item: any) => item.intake
          )
        ),
      ],

      universities: [
        "All",
        ...new Set(
          scholarshipsWithStatus.map(
            (item: any) => item.university
          )
        ),
      ],

      scholarshipTypes: [
        "All",
        ...new Set(
          scholarshipsWithStatus.map(
            (item: any) => item.scholarshipType
          )
        ),
      ],
    }),
    [scholarshipsWithStatus]
  );

  // -----------------------------------------
  // Filter scholarships
  // -----------------------------------------
  const filteredScholarships = useMemo(() => {
    return scholarshipsWithStatus.filter((item: any) => {
      // Status filter
      const matchesStatus =
        active === "all" ||
        item.status === active;

      // Country
      const matchesCountry =
        filters.country === "All" ||
        item.country === filters.country;

      // Degree
      const matchesDegree =
        filters.degreeLevel === "All" ||
        item.degreeLevel === filters.degreeLevel;

      // Intake
      const matchesIntake =
        filters.intake === "All" ||
        item.intake === filters.intake;

      // University
      const matchesUniversity =
        filters.university === "All" ||
        item.university === filters.university;

      // Scholarship type
      const matchesType =
        filters.scholarshipType === "All" ||
        item.scholarshipType === filters.scholarshipType;

      // Search
      const query = filters.search
        .trim()
        .toLowerCase();

      const matchesSearch =
        query.length === 0 ||
        item.title.toLowerCase().includes(query) ||
        item.university.toLowerCase().includes(query) ||
        item.country.toLowerCase().includes(query);

      return (
        matchesStatus &&
        matchesCountry &&
        matchesDegree &&
        matchesIntake &&
        matchesUniversity &&
        matchesType &&
        matchesSearch
      );
    });
  }, [
    scholarshipsWithStatus,
    active,
    filters,
  ]);

  return (
    <section className="pb-10 pt-10">

      {/* =====================================
          FILTER BAR
      ===================================== */}

      <div className="w-full flex gap-5 lg:gap-0 flex-col lg:flex-row items-center justify-between py-7 ">

        {/* Filter Tabs */}
        <div className="h-[30px] sm:h-[52px] flex items-center rounded-[9px] border border-[#e8edf5] bg-white shadow-[0_1px_3px_rgba(15,23,42,0.03),0_4px_12px_rgba(15,23,42,0.025)]">

          {filtersOptions.map((item: any) => {
            const isActive = active === item.type;

            return (
              <button
                key={item.type}
                onClick={() => setActive(item.type)}
                className={`
                  h-[30px] sm:h-[50px]
                  flex items-center justify-center
                  gap-[3px] sm:gap-[10px]
                  border-0
                  whitespace-nowrap
                  cursor-pointer
                  text-[7px] sm:text-[13px]
                  font-semibold
                  transition-all duration-200

                  ${
                    item.type === "all"
                      ? "md:min-w-[200px] px-2 md:px-6"
                      : "md:min-w-[162px] px-2 md:px-6"
                  }

                  ${
                    isActive
                      ? "bg-[#1554c7] text-white rounded-[6px] shadow-[0_1px_3px_rgba(21,84,199,0.2)]"
                      : "bg-transparent text-[#526078]"
                  }
                `}
              >

                {/* Status Dot */}
                {item.dot && (
                  <span
                    className={`
                      w-1 sm:w-2
                      h-1 sm:h-2
                      shrink-0
                      rounded-full
                      ${item.dot}
                    `}
                  />
                )}

                {/* Label */}
                <span className="leading-none">
                  {item.label}
                </span>

                {/* Real Count */}
                <span
                  className={`
                    sm:min-w-[34px]
                    h-[15px] sm:h-[25px]
                    px-[4px] sm:px-[9px]
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    bg-white
                    text-[7px] sm:text-[12px]
                    font-semibold
                    leading-none

                    ${
                      isActive
                        ? "border-white/50 text-[#1554c7]"
                        : item.type === "expired"
                          ? "border-[#e5eaf2] text-[#ed4545]"
                          : "border-[#e5eaf2] text-[#526078]"
                    }
                  `}
                >
                  {item.count}
                </span>

              </button>
            );
          })}

        </div>

        {/* =====================================
            SEARCH
        ===================================== */}

        <div className="relative w-[279px] h-[40px]">

          <input
            type="text"
            value={filters.search}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                search: e.target.value,
              }))
            }
            placeholder="Search scholarships..."
            className="
              w-full
              h-[40px]
              pl-[15px]
              pr-[43px]
              rounded-[7px]
              border
              border-[#dfe6f0]
              outline-none
              bg-white
              text-[#334155]
              text-[12px]
              font-normal
              placeholder:text-[#9aa6b8]
              focus:border-[#b8c9e8]
              focus:ring-[3px]
              focus:ring-[#1554c7]/[0.07]
              transition-all
            "
          />

          {/* Search Icon */}
          <svg
            className="absolute right-[13px] top-1/2 -translate-y-1/2 text-[#718096] pointer-events-none"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
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

        </div>

      </div>

      {/* =====================================
          SCHOLARSHIP CARDS
      ===================================== */}

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {filteredScholarships.map(
          (scholarship: any, index: number) => (
            <FadeIn
              key={scholarship.slug}
              delay={index * 0.12}
            >
              <ScholarshipCard2
                scholarship={scholarship}
              />
            </FadeIn>
          )
        )}

      </div>

      {/* =====================================
          EMPTY STATE
      ===================================== */}

      {filteredScholarships.length === 0 && (
        <FadeIn delay={0.12}>
          <div className="glass-panel p-8 relative overflow-hidden rounded-[28px] flex items-center justify-center">
                  <Image
                    src="/no data found.webp"
                    alt="scholarships image"
                    height={1000}
                    width={1000}
                    priority
                    className="object-contain w-[500px] h-[400px]"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" /> */}
          </div>
        </FadeIn>
      )}

    </section>
  );
}