import { toast, ToastContainer } from "react-toastify";
import emptychair from "../assets/emptyChair.jpg";
import { MapPin, Phone, Star } from "lucide-react";
export default function Contactform() {
  function handleBooking(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast("Booking Successfull");
  }

  return (
    <section
      id="contact"
      className="w-full h-[100vh] flex justify-between items-center "
      style={{
        backgroundImage: `url(${emptychair})`,
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <ToastContainer />
      <div className="h-[85%] w-1/3 border-2 border-black m-1 bg-gray-900 text-amber-100 p-4 flex flex-col justify-center">
        <div className="flex ">
          <span className="flex p-2 text-3xl">
            <Star className="size-10 text-amber-100" />
            <p className="relative left-2">4.6(116+ reviews)</p>
          </span>
        </div>

        <div className="text-3xl relative top-3 p-2">
          <MapPin className="size-10 text-amber-100 relative top-6 " />
          <p className="relative left-10 bottom-6">
            500 N Bell Ave #109, Denton, TX 76209, United States
          </p>
        </div>
        <div className="text-3xl">
          <Phone className="size-9 text-amber-100 relative top-6 left-3" />
          <p className="relative left-14 bottom-4">+1 940-612-9127</p>
        </div>
      </div>
      <form
        className="flex flex-col   border-2 border-black w-2/3 h-[85%] p-2 bg-gray-900 text-amber-100"
        onSubmit={handleBooking}
      >
        <span className="flex flex-col m-1">
          <label htmlFor="Name" className="text-2xl">
            Name :{" "}
          </label>
          <input
            type="text"
            id="Name"
            name="Name"
            placeholder="Enter your name"
            className="w-[100%] border-1 p-2 rounded-sm"
          />
        </span>
        <span className="flex flex-col m-1">
          <label htmlFor="Number" className="text-2xl">
            Contact :
          </label>
          <input
            type="tel"
            id="Number"
            name="Number"
            placeholder="Enter your phone number"
            className="w-[100%] border-1 p-2 rounded-sm"
          />
        </span>
        <span className="flex flex-col m-1 ">
          <label htmlFor="services" className="text-2xl">
            Services Interested In
          </label>
          <select
            name="services"
            id="services"
            className="bg-black text-white w-1/3 text-xl rounded-sm"
          >
            <option value="Haircut">Haircut</option>
            <option value="Facial">Facial</option>
            <option value="Shave">Shave</option>
            <option value="Massage">Massage</option>
          </select>
        </span>

        <span className="flex flex-col m-1">
          <label htmlFor="BookingDate" className="text-2xl">
            Prefered Date
          </label>
          <input
            type="date"
            name="BookingDate"
            id="BookingDate"
            className="w-2/3 border-1 text-xl rounded-sm"
          />
        </span>
        <span className="flex flex-col m-1">
          <label htmlFor="message" className="text-2xl">
            Message :
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Do you want us to know anything?"
            className="w-2/3 border-1 text-xl rounded-sm"
          />
        </span>

        <button
          type="submit"
          className="border-2 bg-blue-500 hover:bg-blue-300 w-fit rounded-sm p-2 text-xl m-1"
        >
          Book Now
        </button>
      </form>
    </section>
  );
}
