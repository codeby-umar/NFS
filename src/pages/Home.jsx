import Logo from "../assets/images/logo.jpg";

function Home() {
  return (
    <div className="max-w-175 p-5 h-screen border">
      <div className="">
        <div className="flex items-center justify-center">
          <img className="w-40 h-40 rounded-full" src={Logo} alt="" />
        </div>
        <h1 className="text-center">Frontend developer</h1>
      </div>
    </div>
  );
}

export default Home;
