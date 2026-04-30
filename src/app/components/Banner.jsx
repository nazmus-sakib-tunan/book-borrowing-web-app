
import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co.com/7tBnybsm/banner.jpg')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Find Your{" "}
            <span className="bg-linear-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              Next Read
            </span>
          </h1>
          <p className="text-white mt-4 max-w-md">
            Discover thousands of books across all genres. Borrow digitally,
            read anywhere, and return with a click. Your next adventure awaits.
          </p>

          <div className="flex gap-4 mt-5">
            <Link href="#">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                 Browse Now
              </Button>
            </Link>

            <Link href="/pricing">
              <Button variant="outline" className="text-white">
                Join Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;