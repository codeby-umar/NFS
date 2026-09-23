import Logo from "../assets/images/logo.jpg";

function Home() {
  return (
    <div className="min-h-screen w-full px-4 py-6 sm:px-6 md:px-8">
      <div className="mx-auto w-full max-w-175">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            <img
              className="h-32 w-32 rounded-full object-cover sm:h-36 sm:w-36 md:h-40 md:w-40"
              src={Logo}
              alt="Turg'unboyov Muhammad Umar"
            />
          </div>

          <h1 className="mt-5 text-center text-xl font-semibold sm:text-2xl md:text-3xl">
            Turg'unboyov Muhammad Umar
          </h1>

          <h1 className="mt-2 text-center text-base sm:text-lg md:text-xl">
            Frontend developer
          </h1>

          <p className="mt-3 text-center text-sm sm:text-base">
            Designing ideas, one pixel at a time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

