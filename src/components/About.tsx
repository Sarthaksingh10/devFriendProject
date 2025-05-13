import salon from "../assets/salon.jpg";
import salonTwo from "../assets/SalonTwo.jpg";
import man from "../assets/man.jpg";
import women from "../assets/women.jpg";
import scissors from "../assets/scissors.jpg";
export default function About() {
  const serviceOptions = [
    {
      image: man,
      name: "Haircut",
      description: "Man with long beard",
    },
    {
      image: scissors,
      name: "Shave",
      description: "Scissors",
    },
    {
      image: women,
      name: "Facials",
      description: "Women getting her hair dried",
    },
  ];
  return (
    <section
      id="about"
      className="flex flex-col w-full h-full"
      style={{
        backgroundImage: `url(${salonTwo})`,
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-between p-6 ">
        <span className="flex flex-col p-4">
          <h2 className="text-5xl font-bold font-sans text-amber-100 p-2">
            ABOUT US
          </h2>
          <p className="flex flex-col text-3xl font-serif p-3 text-white">
            <span> We provide professional barber and beauty </span>
            <span>services in a welcoming and relaxing atmosphere.</span>
          </p>
        </span>
        <span>
          <img
            src={salon}
            alt="Salon image"
            height={"250px"}
            width={"350px"}
            className="rounded-md relative right-6 top-3"
          />
        </span>
      </div>
      <section id="services">
        <h2 className="text-5xl font-sans font-bold w-full flex justify-center mt-8 text-amber-100">
          OUR SERVICES
        </h2>

        <div className=" w-full  flex  flex-wrap gap-20 justify-center mt-4">
          {serviceOptions.map((service, index) => {
            return (
              <span
                key={index}
                className="border-2 border-black bg-black h-[200px] w-[250px] rounded-sm flex  justify-center items-center flex-col"
              >
                <img
                  src={service.image}
                  alt={service.description}
                  className="h-2/3 w-full rounded-sm"
                />
                <p className="text-white text-xl font-serif">{service.name}</p>
              </span>
            );
          })}
        </div>
      </section>
    </section>
  );
}
