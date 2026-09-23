import { useEffect, useState } from "react";
import Logo from "../assets/images/logo.jpg";

/**
 * Palette — sovuq oq-ko'k fon + chuqur korporativ ko'k urg'u, yonida
 * bir oz yorqinroq ikkilamchi ko'k tus (gradientlar va spinner uchun).
 */
const ink = "#101B2D";
const paper = "#F3F6FB";
const panel = "#FFFFFF";
const line = "#DCE3EF";
const azure = "#2C4C8C";
const azureLight = "#5B8DEF";
const slate = "#7C8AA3";

const glyphs = {
  sparkle: "M12 2l1.6 4.8L18 8l-4.4 1.2L12 14l-1.6-4.8L6 8l4.4-1.2L12 2z",
  globe:
    "M12 22a10 10 0 100-20 10 10 0 000 20zM2 12h20M12 2c2.4 2.7 3.8 6.2 3.8 10s-1.4 7.3-3.8 10c-2.4-2.7-3.8-6.2-3.8-10S9.6 4.7 12 2z",
  folder: "M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z",
  pen: "M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z",
  bag: "M6 7h12l1 13H5L6 7zM9 7a3 3 0 016 0",
  mail: "M4 4h16v16H4V4zM4 4l8 8 8-8",
  arrow: "M5 12h14M13 6l6 6-6 6",
  instagram:
    "M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zM12 8a4 4 0 100 8 4 4 0 000-8zM17.5 6.5h.01",
  tiktok:
    "M15 2v12.5a3.5 3.5 0 11-3-3.46V7a6.5 6.5 0 106.5 6.5V7.8A6.9 6.9 0 0022 9.5V6a4 4 0 01-4-4h-3z",
  x: "M4 4l16 16M20 4L4 20",
};

const Glyph = ({ name, className, strokeWidth = 1.7 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}
       strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d={glyphs[name]} />
  </svg>
);

const links = [
  { icon: "globe", title: "Veb-sayt", subtitle: "Shaxsiy sahifam", featured: true },
  { icon: "folder", title: "Portfolio", subtitle: "Ishlarimni ko'rish" },
  { icon: "pen", title: "Yangi post", subtitle: "So'nggi fikrlar" },
  { icon: "bag", title: "Do'kon", subtitle: "Dizaynlar va boshqa" },
  { icon: "mail", title: "Bog'lanish", subtitle: "Birga ishlaylik" },
];

const socials = ["instagram", "tiktok", "x"];

/* Ism boshidagi harflardan monogramma — logotip yuklanmagan holatda ham ishlaydi */
const initials = "TM";

function LoadingScreen({ visible }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: paper }}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative w-20 h-20">
          <div
            className="absolute inset-0 rounded-full spin-slow"
            style={{
              background: `conic-gradient(${azureLight}, ${azure}, ${line} 60%, ${azureLight})`,
              WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 0)",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 0)",
            }}
          />
          <div
            className="absolute inset-[6px] rounded-full flex items-center justify-center font-serif text-lg pulse-soft"
            style={{ backgroundColor: panel, color: azure }}
          >
            {initials}
          </div>
        </div>
        <div className="w-32 h-[3px] rounded-full overflow-hidden" style={{ backgroundColor: line }}>
          <div className="h-full rounded-full loading-bar" style={{ backgroundColor: azure }} />
        </div>
        <p className="text-xs tracking-wide" style={{ color: slate }}>
          Yuklanmoqda…
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const [pressed, setPressed] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const finishTimer = setTimeout(() => setLoading(false), 1500);
    const readyTimer = setTimeout(() => setReady(true), 1650);
    return () => {
      clearTimeout(finishTimer);
      clearTimeout(readyTimer);
    };
  }, []);

  return (
    <div
      className="relative min-h-screen w-full flex justify-center overflow-hidden"
      style={{ backgroundColor: paper, color: ink }}
    >
      <style>{`
        @keyframes riseIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ringGrow {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulseSoft {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(0.94); }
        }
        @keyframes loadingBar {
          0%   { width: 6%; }
          60%  { width: 78%; }
          100% { width: 100%; }
        }
        @keyframes drift {
          0%   { transform: translate(0, 0) scale(1); }
          50%  { transform: translate(4%, -6%) scale(1.06); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes ringRotate { to { transform: rotate(360deg); } }
        @keyframes bounceIcon {
          0%, 100% { transform: translateY(0); }
          30% { transform: translateY(-3px); }
        }

        .rise { animation: riseIn 0.6s cubic-bezier(.22,.61,.36,1) both; }
        .ring-in { animation: ringGrow 0.7s cubic-bezier(.22,.61,.36,1) both; }
        .spin-slow { animation: spin 1.1s linear infinite; }
        .pulse-soft { animation: pulseSoft 1.6s ease-in-out infinite; }
        .loading-bar { animation: loadingBar 1.5s cubic-bezier(.22,.61,.36,1) forwards; }
        .blob { animation: drift 9s ease-in-out infinite; }
        .blob-b { animation-delay: -4s; }
        .ring-rotate { animation: ringRotate 14s linear infinite; }
        .press-down { transform: scale(0.97); }
        .link-icon:hover { animation: bounceIcon 0.5s ease; }

        @media (prefers-reduced-motion: reduce) {
          .rise, .ring-in, .spin-slow, .pulse-soft, .loading-bar, .blob, .ring-rotate, .link-icon:hover {
            animation: none !important;
          }
        }
      `}</style>

      <LoadingScreen visible={loading} />

      {/* Fonda sokin suzuvchi ko'k dog'lar — chuqurlik uchun, hech qanday og'ir soyasiz */}
      <div
        className="blob absolute -top-24 -left-16 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: `radial-gradient(circle, ${azureLight}33, transparent 70%)` }}
      />
      <div
        className="blob blob-b absolute -bottom-28 -right-20 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: `radial-gradient(circle, ${azure}26, transparent 70%)` }}
      />

      <div
        className={`relative w-full max-w-[420px] px-5 xs:px-6 sm:px-8 pt-8 sm:pt-12 pb-10 sm:pb-14 transition-all duration-700 ${
          ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        {/* Yuqori qator */}
        <div className="rise flex items-start justify-between mb-8 sm:mb-10" style={{ animationDelay: "0ms" }}>
          <div className="flex items-center gap-2" style={{ color: slate }}>
            <Glyph name="sparkle" className="w-3.5 h-3.5 shrink-0" style={{ color: azure }} />
            <p className="text-[11px] sm:text-xs leading-tight">
              Ijodiy fikr,<br />raqamli ruh
            </p>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            {socials.map((name) => (
              <a
                key={name}
                href="#"
                className="link-icon w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border transition-all duration-200 hover:-translate-y-0.5"
                style={{ borderColor: line, color: ink }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = azure)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = line)}
              >
                <Glyph name={name} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Profil rasmi */}
        <div className="rise flex justify-center mb-6 sm:mb-7" style={{ animationDelay: "80ms" }}>
          <div className="ring-in relative" style={{ animationDelay: "150ms" }}>
            <div
              className="ring-rotate absolute -inset-2.5 sm:-inset-3 rounded-full"
              style={{
                background: `conic-gradient(from 0deg, ${azureLight}, transparent 30%, transparent 70%, ${azure})`,
                WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 0)",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 0)",
              }}
            />
            <img
              src={Logo}
              alt="Turg'unboyov Muhammad Umar"
              className="relative rounded-full object-cover w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40"
              style={{ boxShadow: `0 6px 20px -10px ${ink}55` }}
            />
          </div>
        </div>

        {/* Ism */}
        <div className="rise text-center mb-2 px-1" style={{ animationDelay: "160ms" }}>
          <h1 className="font-serif font-medium leading-[1.05] text-[clamp(1.6rem,6vw,2.4rem)]">
            Turg'unboyov
          </h1>
          <h1
            className="font-serif font-medium leading-[1.05] text-[clamp(1.6rem,6vw,2.4rem)]"
            style={{
              backgroundImage: `linear-gradient(90deg, ${azure}, ${azureLight})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Muhammad Umar
          </h1>
        </div>

        <p className="rise text-center text-sm mb-5" style={{ animationDelay: "220ms", color: slate }}>
          Frontend dasturchi
        </p>

        <p
          className="rise text-center text-[13px] sm:text-sm leading-relaxed mb-8 sm:mb-10 px-2"
          style={{ animationDelay: "260ms", color: "#44506B" }}
        >
          G'oyalarni piksel-piksel jonlantiraman — zamonaviy va qulay
          interfeyslar bilan.
        </p>

        {/* Havolalar */}
        <div className="flex flex-col gap-2.5 sm:gap-3">
          {links.map(({ icon, title, subtitle, featured }, i) => (
            <a
              key={title}
              href="#"
              onMouseDown={() => setPressed(title)}
              onMouseUp={() => setPressed(null)}
              onMouseLeave={() => setPressed(null)}
              className={`rise group flex items-center gap-3 sm:gap-4 rounded-2xl px-3.5 sm:px-4 py-3 sm:py-3.5 border transition-all duration-200 ${
                pressed === title ? "press-down" : "hover:-translate-y-0.5"
              }`}
              style={{
                animationDelay: `${320 + i * 70}ms`,
                backgroundColor: featured ? `${azure}0D` : panel,
                borderColor: featured ? azure : line,
              }}
            >
              <span
                className="link-icon w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{
                  backgroundColor: featured ? azure : paper,
                  color: featured ? paper : ink,
                }}
              >
                <Glyph name={icon} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </span>

              <span className="flex-1 min-w-0 text-left">
                <span className="block text-sm sm:text-[15px] font-medium truncate">{title}</span>
                <span className="block text-xs sm:text-[13px] truncate" style={{ color: slate }}>
                  {subtitle}
                </span>
              </span>

              <span
                className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: azure }}
              >
                <Glyph name="arrow" className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>

        {/* Pastki qator */}
        <div
          className="rise flex items-center justify-between mt-9 sm:mt-11 pt-5 border-t"
          style={{ animationDelay: `${320 + links.length * 70 + 60}ms`, borderColor: line }}
        >
          <p className="text-[11px] sm:text-xs" style={{ color: slate }}>
            Ko'proq uchun kuzating
          </p>
          <div className="flex items-center gap-1.5 sm:gap-2">
            {socials.map((name) => (
              <a
                key={name}
                href="#"
                className="link-icon w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 hover:-translate-y-0.5"
                style={{ borderColor: line, color: ink }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = azure)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = line)}
              >
                <Glyph name={name} className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}