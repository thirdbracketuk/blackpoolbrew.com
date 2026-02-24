// // import { FaHeartbeat, FaMugHot, FaLeaf, FaGift } from "react-icons/fa";
// // import { SiNpm } from "react-icons/si";
// // import { MdRestaurant, MdCode, MdArrowOutward } from "react-icons/md";

// // export default function Home() {
// //   return (
// //     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-10 gap-4 sm:p-16 bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">
// //       <main className="flex flex-col gap-5 row-start-2 items-center max-w-3xl text-center w-full">
// //         {/* Inline SVG Logo — works on both light and dark */}
// //         <svg
// //           viewBox="0 0 320 80"
// //           className="h-14 w-auto"
// //           xmlns="http://www.w3.org/2000/svg"
// //           aria-label="Blackpool Brew"
// //         >
// //           {/* Circle emblem */}
// //           <circle cx="40" cy="40" r="36" fill="#bd3b22" opacity="0.12" />
// //           <circle
// //             cx="40"
// //             cy="40"
// //             r="36"
// //             fill="none"
// //             stroke="#bd3b22"
// //             strokeWidth="2"
// //           />

// //           {/* Leaf top */}
// //           <path
// //             d="M40 14 C30 22 26 32 32 42 C36 48 40 50 40 50 C40 50 44 48 48 42 C54 32 50 22 40 14Z"
// //             fill="#bd3b22"
// //             opacity="0.8"
// //           />

// //           {/* Stem */}
// //           <line
// //             x1="40"
// //             y1="50"
// //             x2="40"
// //             y2="62"
// //             stroke="#eca876"
// //             strokeWidth="1.5"
// //             strokeLinecap="round"
// //           />

// //           {/* Small side leaves */}
// //           <path
// //             d="M40 54 C35 50 30 52 32 57 C34 59 38 58 40 54Z"
// //             fill="#eca876"
// //           />
// //           <path
// //             d="M40 54 C45 50 50 52 48 57 C46 59 42 58 40 54Z"
// //             fill="#eca876"
// //           />

// //           {/* Spice dots */}
// //           <circle cx="33" cy="30" r="1.5" fill="#eca876" />
// //           <circle cx="47" cy="28" r="1.5" fill="#eca876" />
// //           <circle cx="38" cy="24" r="1.5" fill="#eca876" />

// //           {/* BLACKPOOL text */}
// //           <text
// //             x="88"
// //             y="36"
// //             fontFamily="Geist, system-ui, sans-serif"
// //             fontSize="26"
// //             fontWeight="700"
// //             letterSpacing="-1"
// //             fill="#bd3b22"
// //           >
// //             BLACKPOOL
// //           </text>

// //           {/* BREW text */}
// //           <text
// //             x="90"
// //             y="63"
// //             fontFamily="Georgia, serif"
// //             fontSize="22"
// //             fontWeight="400"
// //             letterSpacing="6"
// //             fill="#eca876"
// //           >
// //             BREW
// //           </text>
// //         </svg>

// //         {/* Hero Headline */}
// //         <div className="flex flex-col gap-1">
// //           <h1 className="text-3xl font-bold tracking-tight">
// //             Brew Your Way to Wellness
// //           </h1>
// //           <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
// //             A natural blend of ancient herbs and spices, crafted to nourish your
// //             body and delight your senses.
// //           </p>
// //         </div>

// //         {/* Cards slider */}
// //         <div className="w-full overflow-hidden">
// //           <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
// //             <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 snap-center flex-none w-[calc(100%-16px)] sm:w-[calc(50%-6px)] lg:w-[calc(33.333%-8px)] text-center">
// //               <FaHeartbeat size={28} color="#bd3b22" />
// //               <p className="text-sm font-medium">
// //                 Boosts your immune system and supports everyday health
// //                 naturally.
// //               </p>
// //             </div>

// //             <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 snap-center flex-none w-[calc(100%-16px)] sm:w-[calc(50%-6px)] lg:w-[calc(33.333%-8px)] text-center">
// //               <FaMugHot size={28} color="#eca876" />
// //               <p className="text-sm font-medium">
// //                 Perfect brewed in hot water or blended with your favourite tea.
// //               </p>
// //             </div>

// //             <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 snap-center flex-none w-[calc(100%-16px)] sm:w-[calc(50%-6px)] lg:w-[calc(33.333%-8px)] text-center">
// //               <FaLeaf size={28} color="#4a9e6b" />
// //               <p className="text-sm font-medium">
// //                 100% natural ingredients — no chemicals, no side effects, ever.
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Free Promo CTA */}
// //         <div className="flex flex-col items-center gap-3 w-full">
// //           <p className="text-sm font-medium" style={{ color: "#bd3b22" }}>
// //             🎁 Free samples available for a limited time!
// //           </p>
// //           <a
// //             href="https://wa.me/447507155382?text=Hi%2C%20I%27d%20like%20to%20claim%20my%20free%20Blackpool%20Brew%20sample!"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-base font-semibold text-white shadow-lg transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
// //             style={{ backgroundColor: "#bd3b22" }}
// //           >
// //             <FaGift size={18} />
// //             Claim Your Free Sample
// //           </a>
// //         </div>
// //       </main>

// //       {/* Footer */}
// //       <footer className="row-start-3 flex gap-5 flex-wrap items-center justify-center text-xs text-gray-400 dark:text-gray-600">
// //         <a
// //           href="https://www.npmjs.com/package/@thirdbracket/bracketui"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="flex items-center gap-1 hover:text-red-500 transition-colors"
// //         >
// //           <SiNpm size={16} />
// //           <span>BracketUI</span>
// //           <MdArrowOutward size={12} />
// //         </a>
// //         <span>·</span>
// //         <a
// //           href="https://justhungry.co.uk"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="flex items-center gap-1 hover:text-orange-400 transition-colors"
// //         >
// //           <MdRestaurant size={14} />
// //           <span>Just Hungry</span>
// //           <MdArrowOutward size={12} />
// //         </a>
// //         <span>·</span>
// //         <a
// //           href="https://thirdbracket.co.uk"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="flex items-center gap-1 hover:text-blue-400 transition-colors"
// //         >
// //           <MdCode size={14} />
// //           <span>Third Bracket</span>
// //           <MdArrowOutward size={12} />
// //         </a>
// //       </footer>
// //     </div>
// //   );
// // }

// import { FaHeartbeat, FaMugHot, FaLeaf, FaGift } from "react-icons/fa";
// import { SiNpm } from "react-icons/si";
// import { MdRestaurant, MdCode, MdArrowOutward } from "react-icons/md";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-10 gap-4 sm:p-16 bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">
//       <main className="flex flex-col gap-5 row-start-2 items-center max-w-3xl text-center w-full">
//         {/* Inline SVG Logo — works on both light and dark */}
//         {/* Inline SVG Logo — works on both light and dark */}
//         <svg
//           viewBox="0 0 320 80"
//           className="h-14 w-auto"
//           xmlns="http://www.w3.org/2000/svg"
//           aria-label="Blackpool Brew"
//         >
//           {/* Circle emblem */}
//           <circle cx="40" cy="40" r="36" fill="#bd3b22" opacity="0.12" />
//           <circle
//             cx="40"
//             cy="40"
//             r="36"
//             fill="none"
//             stroke="#bd3b22"
//             strokeWidth="2"
//           />

//           {/* Leaf top */}
//           <path
//             d="M40 14 C30 22 26 32 32 42 C36 48 40 50 40 50 C40 50 44 48 48 42 C54 32 50 22 40 14Z"
//             fill="#bd3b22"
//             opacity="0.8"
//           />

//           {/* Stem */}
//           <line
//             x1="40"
//             y1="50"
//             x2="40"
//             y2="62"
//             stroke="#eca876"
//             strokeWidth="1.5"
//             strokeLinecap="round"
//           />

//           {/* Small side leaves */}
//           <path
//             d="M40 54 C35 50 30 52 32 57 C34 59 38 58 40 54Z"
//             fill="#eca876"
//           />
//           <path
//             d="M40 54 C45 50 50 52 48 57 C46 59 42 58 40 54Z"
//             fill="#eca876"
//           />

//           {/* Spice dots */}
//           <circle cx="33" cy="30" r="1.5" fill="#eca876" />
//           <circle cx="47" cy="28" r="1.5" fill="#eca876" />
//           <circle cx="38" cy="24" r="1.5" fill="#eca876" />

//           {/* BLACKPOOL text */}
//           <text
//             x="88"
//             y="36"
//             fontFamily="Geist, system-ui, sans-serif"
//             fontSize="26"
//             fontWeight="700"
//             letterSpacing="-1"
//             fill="#bd3b22"
//           >
//             BLACKPOOL
//           </text>

//           {/* BREW text */}
//           <text
//             x="90"
//             y="63"
//             fontFamily="Georgia, serif"
//             fontSize="22"
//             fontWeight="400"
//             letterSpacing="6"
//             fill="#eca876"
//           >
//             BREW
//           </text>
//         </svg>

//         {/* Hero Headline */}
//         <div className="flex flex-col gap-1">
//           <h1 className="text-3xl font-bold tracking-tight">
//             Brew Your Way to Wellness
//           </h1>
//           <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
//             A natural blend of ancient herbs and spices, crafted to nourish your
//             body and delight your senses.
//           </p>
//         </div>

//         {/* Cards slider */}
//         <div className="w-full overflow-hidden">
//           <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//             <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 snap-center flex-none w-[calc(100%-16px)] sm:w-[calc(50%-6px)] lg:w-[calc(33.333%-8px)] text-center">
//               <FaHeartbeat size={28} color="#bd3b22" />
//               <p className="text-sm font-medium">
//                 Boosts your immune system and supports everyday health
//                 naturally.
//               </p>
//             </div>

//             <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 snap-center flex-none w-[calc(100%-16px)] sm:w-[calc(50%-6px)] lg:w-[calc(33.333%-8px)] text-center">
//               <FaMugHot size={28} color="#eca876" />
//               <p className="text-sm font-medium">
//                 Perfect brewed in hot water or blended with your favourite tea.
//               </p>
//             </div>

//             <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 snap-center flex-none w-[calc(100%-16px)] sm:w-[calc(50%-6px)] lg:w-[calc(33.333%-8px)] text-center">
//               <FaLeaf size={28} color="#4a9e6b" />
//               <p className="text-sm font-medium">
//                 100% natural ingredients — no chemicals, no side effects, ever.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Free Promo CTA */}
//         <div className="flex flex-col items-center gap-3 w-full">
//           <p className="text-sm font-medium" style={{ color: "#bd3b22" }}>
//             🎁 Free samples available for a limited time!
//           </p>
//           <a
//             href="https://wa.me/447507155382?text=Hi%2C%20I%27d%20like%20to%20claim%20my%20free%20Blackpool%20Brew%20sample!"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-base font-semibold text-white shadow-lg transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
//             style={{ backgroundColor: "#bd3b22" }}
//           >
//             <FaGift size={18} />
//             Claim Your Free Sample
//           </a>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="row-start-3 flex gap-5 flex-wrap items-center justify-center text-xs text-gray-400 dark:text-gray-600">
//         <a
//           href="https://www.npmjs.com/package/@thirdbracket/bracketui"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-1 hover:text-red-500 transition-colors"
//         >
//           <SiNpm size={16} />
//           <span>BracketUI</span>
//           <MdArrowOutward size={12} />
//         </a>
//         <span>·</span>
//         <a
//           href="https://justhungry.co.uk"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-1 hover:text-orange-400 transition-colors"
//         >
//           <MdRestaurant size={14} />
//           <span>Just Hungry</span>
//           <MdArrowOutward size={12} />
//         </a>
//         <span>·</span>
//         <a
//           href="https://thirdbracket.co.uk"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-1 hover:text-blue-400 transition-colors"
//         >
//           <MdCode size={14} />
//           <span>Third Bracket</span>
//           <MdArrowOutward size={12} />
//         </a>
//       </footer>
//     </div>
//   );
// }

import { FaHeartbeat, FaMugHot, FaLeaf, FaGift } from "react-icons/fa";
import { SiNpm } from "react-icons/si";
import { MdRestaurant, MdCode, MdArrowOutward } from "react-icons/md";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-10 gap-4 sm:p-16 bg-white dark:bg-black text-black dark:text-white overflow-x-hidden">
      <main className="flex flex-col gap-5 row-start-2 items-center max-w-3xl text-center w-full">
        {/* Inline SVG Logo — works on both light and dark */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Blackpool Brew"
          viewBox="0 0 302 96"
          className="w-auto"
          style={{ height: "50px" }}
        >
          <g transform="translate(-52.56 -7)">
            <g
              fill="none"
              stroke="#eca876"
              strokeLinecap="round"
              strokeWidth={2}
            >
              <path d="M72 28c0-8 6-10 6-18" opacity={0.7} />
              <path d="M82 30c0-8 6-12 6-22" opacity={0.9} />
              <path d="M92 28c0-8 6-10 6-18" opacity={0.7} />
            </g>
            <path fill="#bd3b22" d="m60 40 10 55h30l10-55z" />
            <rect
              width={54}
              height={8}
              x={58}
              y={36}
              fill="#9a2e18"
              rx={4}
              ry={4}
            />
            <ellipse
              cx={85}
              cy={98}
              fill="#9a2e18"
              opacity={0.6}
              rx={32}
              ry={5}
            />
            <path
              fill="none"
              stroke="#9a2e18"
              strokeLinecap="round"
              strokeWidth={6}
              d="M110 52c18 0 18 26 0 26"
            />
            <path
              fill="#eca876"
              d="M78 72c2-12 12-14 14-8s-4 12-14 8z"
              opacity={0.6}
            />
            <path
              stroke="#eca876"
              strokeLinecap="round"
              d="m85 70-3-12"
              opacity={0.8}
            />
            <g fill="#eca876">
              <circle cx={76} cy={80} r={1.5} opacity={0.5} />
              <circle cx={94} cy={76} r={1.5} opacity={0.5} />
              <circle cx={88} cy={84} r={1.5} opacity={0.5} />
            </g>
            <text
              x={140}
              y={62}
              fill="#bd3b22"
              fontFamily="'Avenir Next LT Pro'"
              fontSize={36}
              fontWeight="bold"
              letterSpacing={-1}
              style={{
                fontVariantCaps: "normal",
                fontVariantEastAsian: "normal",
                fontVariantLigatures: "normal",
                fontVariantNumeric: "normal",
              }}
            >
              {"BLACKPOOL"}
            </text>
            <path
              stroke="#eca876"
              strokeWidth={0.904}
              d="M142.63 73.136h200"
              opacity={0.5}
            />
            <text
              x={142}
              y={96}
              fill="#eca876"
              fontFamily="Anta"
              fontSize={22}
              letterSpacing={14}
              style={{
                fontVariantCaps: "normal",
                fontVariantEastAsian: "normal",
                fontVariantLigatures: "normal",
                fontVariantNumeric: "normal",
              }}
            >
              {"BREW"}
            </text>
          </g>
        </svg>

        {/* Hero Headline */}
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight">
            Brew Your Way to Wellness
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            A natural blend of ancient herbs and spices, crafted to nourish your
            body and delight your senses.
          </p>
        </div>

        {/* Cards slider */}
        <div className="w-full overflow-hidden">
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 snap-center flex-none w-[calc(100%-16px)] sm:w-[calc(50%-6px)] lg:w-[calc(33.333%-8px)] text-center">
              <FaHeartbeat size={28} color="#bd3b22" />
              <p className="text-sm font-medium">
                Boosts your immune system and supports everyday health
                naturally.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 snap-center flex-none w-[calc(100%-16px)] sm:w-[calc(50%-6px)] lg:w-[calc(33.333%-8px)] text-center">
              <FaMugHot size={28} color="#eca876" />
              <p className="text-sm font-medium">
                Perfect brewed in hot water or blended with your favourite tea.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 snap-center flex-none w-[calc(100%-16px)] sm:w-[calc(50%-6px)] lg:w-[calc(33.333%-8px)] text-center">
              <FaLeaf size={28} color="#4a9e6b" />
              <p className="text-sm font-medium">
                100% natural ingredients — no chemicals, no side effects, ever.
              </p>
            </div>
          </div>
        </div>

        {/* Free Promo CTA */}
        <div className="flex flex-col items-center gap-3 w-full">
          <p className="text-sm font-medium" style={{ color: "#bd3b22" }}>
            🎁 Free samples available for a limited time!
          </p>
          <a
            href="https://wa.me/447507155382?text=Hi%2C%20I%27d%20like%20to%20claim%20my%20free%20Blackpool%20Brew%20sample!"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-base font-semibold text-white shadow-lg transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
            style={{ backgroundColor: "#bd3b22" }}
          >
            <FaGift size={18} />
            Claim Your Free Sample
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-5 flex-wrap items-center justify-center text-xs text-gray-400 dark:text-gray-600">
        <a
          href="https://www.npmjs.com/package/@thirdbracket/bracketui"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-red-500 transition-colors"
        >
          <SiNpm size={16} />
          <span>BracketUI</span>
          <MdArrowOutward size={12} />
        </a>
        <span>·</span>
        <a
          href="https://justhungry.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-orange-400 transition-colors"
        >
          <MdRestaurant size={14} />
          <span>Just Hungry</span>
          <MdArrowOutward size={12} />
        </a>
        <span>·</span>
        <a
          href="https://thirdbracket.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-blue-400 transition-colors"
        >
          <MdCode size={14} />
          <span>Third Bracket</span>
          <MdArrowOutward size={12} />
        </a>
      </footer>
    </div>
  );
}
