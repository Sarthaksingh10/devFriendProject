import { MapPin, Phone, Star } from "lucide-react";

export default function Information() {
  return (
    <div className="w-full flex justify-center">
      <div className="bg-gray-900 h-[300px] w-1/2 text-white p-4 mt-6 ">
        <div className="flex justify-between">
          <span className="flex p-2 text-3xl">
            <Star className="size-10 text-amber-100" />
            <p className="relative left-2">4.6(116+ reviews)</p>
          </span>
          <span className="mr-2 mt-4 text-xl">
            <button className="rounded-sm bg-amber-100 border-s-2 text-black cursor-pointer">
              <a href="https://shorturl.at/ykIce">DIRECTION</a>
            </button>
          </span>
        </div>

        <div className="text-3xl relative top-3">
          <MapPin className="size-10 text-amber-100 relative top-6 left-2" />
          <p className="relative left-14 bottom-6">
            500 N Bell Ave #109, Denton, TX 76209, United States
          </p>
        </div>
        <div className="text-3xl">
          <Phone className="size-9 text-amber-100 relative top-6 left-3" />
          <p className="relative left-14 bottom-4">+1 940-612-9127</p>
        </div>
      </div>
    </div>
  );
}
