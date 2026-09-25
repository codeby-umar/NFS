import logo from "../assets/images/logo.jpg";
import banner from "../assets/images/photes.png";
import { SlArrowRight } from "react-icons/sl";


import {
  FaTelegramPlane,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaWhatsapp ,
  FaFacebook ,
} from "react-icons/fa";

function Home() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp/>,
      link: "https://wa.me/+998507121208",
    },
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
      name: "Facebook",
      icon: <FaFacebook/>,
      link: "https://www.facebook.com/profile.php?id=61581646061708",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/codeby-umar",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/muhammad-umar-undefined-a91313403/",
    },
    {
      name: "Portfolio",
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
        <div className="relative h-44 w-full sm:h-52">
          <img
            src={banner}
            alt="Profile banner"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#101112]/90" />
        </div>

        <div className="relative flex flex-col items-center px-5 pb-6 sm:px-8">
          <div className="-mt-16 relative z-10 sm:-mt-20">
            <div className="rounded-full bg-[#101112] p-2">
              <img
                className="
            h-30
            rounded-full
            object-cover
            sm:h-36 sm:w-36
          "
                src={logo}
                alt="Turg'unboyov Muhammad Umar"
              />
            </div>
          </div>

          <h1
            className="mt-5 max-w-[320px] text-center text-2xl font-bold leading-tight tracking-[-0.02em]  sm:max-w-105 sm:text-3xl
  "
          >
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

        <div className="mt-5 flex w-full gap-3">
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
            <FaPhone className="shrink-0 text-lg text-white" />
            <span className="truncate text-[16px] text-white">Call Me</span>
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
            <FaEnvelope className="shrink-0 text-lg" />
            <span className="truncate text-[16px]">Email Me</span>
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
                  group-hover:text-green-500
                "
              >
                {social.icon}
              </span>

              <span className="font-medium">{social.name}</span>

              <span className="ml-auto text-gray-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#D9A441]">
                <SlArrowRight className="text-[#D9A441] group-hover:text-green-500" />
              </span>
            </a>
          ))}
        </div>
        <div className="mt-7 overflow-hidden bg-[#17191A]">
          <div className="h-35 w-full">
            <iframe
              title="Location"
              src="https://www.google.com/maps?q=Andijan,Uzbekistan&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>

          <div className="flex items-center justify-between gap-4 p-5">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Location
              </p>

              <h3 className="mt-1 font-semibold text-white">
                Andijan, Uzbekistan
              </h3>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Andijan,Uzbekistan"
              target="_blank"
              rel="noopener noreferrer"
              className="
        shrink-0
        bg-[#D9A441]
        px-4 py-3
        text-sm font-semibold
        text-white
        transition-all duration-300
        hover:bg-[#E4B653]
        hover:-translate-y-0.5
      "
            >
              Open Map
            </a>
          </div>
        </div>
        {/* <a
          href="https://codebyumar.vercel.app/"
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
        </a> */}
      </section>
    </main>
  );
}

export default Home;
