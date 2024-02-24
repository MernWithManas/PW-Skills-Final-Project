import { Link } from "react-router-dom";

import homePageMainImage from "../assets/Images/homePageMainImage.png";
import HomeLayout from "../layouts/HomeLayout";

function Home() {
  return (
    <HomeLayout>
      <div className="flex items-center justify-center pt-10 text-white gap-10 mx-16 h-[90vh]">
        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl font-semibold">
            Find out best{" "}
            <span className="font-bold text-yellow-500">Online Courses</span>
          </h1>
          <p className="text-xl text-gray-200">
            We have a large library of courses taught by highly skilled and
            qualified faculties at a very affordable cost.
          </p>

          <div className="space-x-6">
            <Link to="/courses">
              <button className="px-5 py-3 text-lg font-semibold transition-all duration-300 ease-in-out bg-yellow-500 rounded-md cursor-pointer hover:bg-yellow-600">
                Explore Courses
              </button>
            </Link>
            <Link to="/contacts">
              <button className="px-5 py-3 text-lg font-semibold transition-all duration-300 ease-in-out border border-yellow-500 rounded-md cursor-pointer hover:bg-yellow-600">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center w-1/2 ">
          <img src={homePageMainImage} alt="home page" />
        </div>
        
      </div>
    </HomeLayout>
  );
}

export default Home;
