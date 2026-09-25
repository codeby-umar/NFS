import logo from "../assets/images/logo.jpg";

import {
  FaTelegramPlane,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaDownload,
} from "react-icons/fa";

function Home() {
  const socialLinks = [
    {
      name: "Telegram",
      icon: <FaTelegramPlane />,
      link: "https://t.me/umarteach",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/codeby.umar",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/codeby-umar",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: "#",
    },
    {
      name: "Website",
      icon: <FaGlobe />,
      link: "https://codebyumar.vercel.app/",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:codingbyumar@gmail.com",
    },
  ];

  return (
    <main className="min-h-screen bg-[#08090A] text-white">
      <section
        className="
          mx-auto w-full max-w-xl
          bg-[#101112]
          p-5
          sm:p-8
        "
      >
        <div className="flex flex-col items-center pt-2">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-[#D9A441]/30 blur-md" />

            <img
              className="
                relative
                h-28 w-28
                rounded-full
                border-4 border-[#D9A441]
                object-cover
                sm:h-36 sm:w-36
              "
              src={logo}
              alt="Turg'unboyov Muhammad Umar"
            />
          </div>

          <h1 className="mt-5 text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Turg'unboyov Muhammad Umar
          </h1>

          <p className="mt-2 text-center text-sm font-medium text-[#D9A441] sm:text-base">
            Frontend Developer
          </p>

          <p className="mt-3 max-w-lg text-center text-sm leading-6 text-gray-400">
            I am a frontend developer, and I currently build websites—creating
            modern, high-performance solutions..
          </p>
        </div>

        <div className="mt-7 flex w-full gap-3">
          <a
            href="tel:+998507121208"
            className="
                  flex min-w-0 flex-1 items-center justify-center gap-2
                  bg-[#D9A441]
                  px-3 py-5
                  text-sm font-semibold text-black
                  transition-all duration-300
                 hover:-translate-y-1
                  hover:bg-[#E4B653]
                  hover:shadow-lg hover:shadow-[#D9A441]/20
                  whitespace-nowrap
    "
          >
            <FaPhone className="shrink-0" />
            <span className="truncate">Call Me</span>
          </a>

          <a
            href="mailto:codingbyumar@gmail.com"
            className="
             flex min-w-0 flex-1 items-center justify-center gap-2
                border border-[#D9A441]/60
                px-3 py-3
                text-sm font-semibold text-[#D9A441]
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[#D9A441]
                hover:text-black
                whitespace-nowrap
             "
          >
            <FaEnvelope className="shrink-0" />
            <span className="truncate">Email Me</span>
          </a>
        </div>

        <div className="mt-8 space-y-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex items-center
                gap-5
                bg-[#17191A]
                px-5 py-5
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#D9A441]/40
                hover:bg-[#1D1F20]
              "
            >
              <span
                className="
                  flex h-11 w-11
                  shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-[#0D0E0F]
                  text-xl
                  text-[#D9A441]
                  transition-all duration-300
                  group-hover:bg-[#D9A441]
                  group-hover:text-black
                "
              >
                {social.icon}
              </span>

              <span className="font-medium">{social.name}</span>

              <span className="ml-auto text-gray-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#D9A441]">
                →
              </span>
            </a>
          ))}
        </div>
        <a
          href="#"
          className="
            mt-6
            flex items-center justify-center gap-3
            px-5 py-4
            bg-[#17191A]
            font-medium
            text-gray-300
            transition-all duration-300
            hover:border-[#D9A441]/40
            hover:text-[#D9A441]
          "
        >
          <FaDownload />
          Download CV
        </a>
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-600">Coders : Muhammad Umar</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
