import barberShop from "../assets/barberShop.jpg";
import logo from "../assets/logo.jpg";
import Information from "./Information";

export default function Home() {
  const listOptions = [
    { name: "Home", linkto: "#home" },
    { name: "About", linkto: "#about" },
    { name: "Services", linkto: "#services" },
    { name: "Contact", linkto: "#contact" },
  ];
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${barberShop})`,
        height: "100vh", // Use "400px" if you want a shorter section
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className=" font-serif flex justify-between p-2">
        <span>
          <img
            src={logo}
            alt="Fama Barber Shop Logo"
            height={"100px"}
            width={"80px"}
          />
        </span>
        <span className="ml-10">
          <ul className="flex ">
            {listOptions.map((item, index) => (
              <li
                className="p-2 hover:text-blue-300 text-2xl text-red-300"
                key={index}
              >
                <a href={item.linkto}>{item.name}</a>
              </li>
            ))}
          </ul>
        </span>

        <span>
          <button className="rounded-sm border-black border-s-2 h-[50px] bg-orange-400 p-2  ">
            <a href="#contact">Book an Appointment</a>
          </button>
        </span>
      </div>
      <h1 className=" flex  flex-col justify-center items-center text-5xl  text-white ">
        <span className="font-bold">FAMA</span>{" "}
        <span className="">BARBER SHOP </span> <span>AND BEAUTY SALON</span>
      </h1>
      <Information />
    </section>
  );
}
