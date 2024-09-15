import React from "react";
import { Link } from "react-router-dom";
import firstImage from "../assests/cartrip-removebg-preview.png";
import secondImage from "../assests/Screenshot_2024-09-01_130615-removebg-preview.png";
import thirdImage from "../assests/tourguide-removebg-preview.png";
const Home = () => {
  return (
    <>
      {/* <div>
        <Link className="text-blue-600" to={"/login"}>
          Login
        </Link>
      </div>
      <div>
        <Link className="text-blue-600" to={"/signup"}>
          SignUp
        </Link>
      </div>
      <div>
        <Link className="text-blue-600" to={"/bookguide"}>
          Book A Guide
        </Link>
      </div>
      <div>
        <Link className="text-blue-600" to={"/aboutguide"}>
          Guide Details
        </Link>
      </div>
      <div>
        <Link className="text-blue-600" to={"/guideinfo"}>
          Guide
        </Link>
      </div> */}
      <div>
        <button className="fixed hidden lg:flex z-20 flex gap-1 bg-gray-100 border border-[#FD6512] px-3 rounded-[20px] py-1 top-[88%] right-[11%]">
          <i className="ri-phone-line" />
          <h1>51848484</h1>
        </button>
        <button className="fixed hidden lg:flex z-20 flex gap-1 border bg-[#FD6512] text-white px-3 rounded-[20px] py-1 top-[88%] right-[1%]">
          <i className="ri-map-pin-2-line" />
          <h1>Plan Your Trip</h1>
        </button>
        <div className="fixed hidden lg:flex h-[12vh] border-gray-100 bg-zinc-100 border items-center justify-center gap-10 flex w-full z-10 bg-white top-[90%] p-2">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[url(https://www.tourmyindia.com/imgnew/india-tour.svg)] bg-cover bg-center h-[5vh] w-[2vw]"></div>
            <h1 className="text-gray-500 font-normal">India Tour-Guides</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[url(https://www.tourmyindia.com/imgnew/international-tour.svg)] bg-cover bg-center h-[5vh] w-[2vw]"></div>
            <h1 className="text-gray-500 font-nornal">
              International Tour-Guides
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            {/* <div
          class="bg-[url(https://www.tourmyindia.com/imgnew/destinaton-wedding.svg)] bg-cover bg-center h-[5vh] w-[1.8vw]">
      </div>
      <h1 class="text-gray-500 font-nornal">Destination Wedding</h1> */}
          </div>
          <div className="flex flex-col items-center justify-center">
            {/* <div
          class="bg-[url(https://www.tourmyindia.com/imgnew/medical-tourism.svg)] bg-cover bg-center h-[5vh] w-[3vw]">
      </div> */}
            {/* <h1 class="text-gray-500 font-nornal">Medical Tourism</h1> */}
          </div>
        </div>
        {/* main-code-start */}
        <main className="main z-9 w-full font-[gilroy] bg-[#FFFFFF]">
          {/* nav */}
          <nav className="nav flex w-full h-[10vh] justify-between items-center p-5 bg-white shadow-md">
            {/* img and buttons section */}
            <div className="part1 flex items-center gap-4">
              {/* Logo */}
              <div className="h-[8vh] w-[15vw] lg:h-[10vh] lg:w-[4vw] bg-center bg-cover bg-[url('https://www.tourmyindia.com/imgnew/inner_logo.png')]"></div>
              {/* Dropdown Buttons */}
              <div className="hidden md:flex items-center gap-4">
                <button className="flex items-center font-medium">
                  Home{" "}
                  <i className="text-gray-500 text-2xl ri-arrow-drop-down-line" />
                </button>
                <button className="flex items-center font-medium">
                  Destination
                  <i className="text-gray-500 text-2xl ri-arrow-drop-down-line" />
                </button>
                <button className="lg:flex hidden items-center font-medium">
                  Booking{" "}
                  <i className="text-gray-500 text-2xl ri-arrow-drop-down-line" />
                </button>
                <button className="lg:flex hidden items-center font-medium">
                  Contact Us{" "}
                  <i className="text-gray-500 text-2xl ri-arrow-drop-down-line" />
                </button>
                <button className="lg:flex hidden items-center font-medium">
                  Weekend Getaways{" "}
                  <i className="text-gray-500 text-2xl ri-arrow-drop-down-line" />
                </button>
              </div>
              {/* Mobile Hamburger Icon */}
              <button className="md:hidden ml-[200px] text-gray-500 text-3xl">
                <i className="ri-menu-line" />
              </button>
            </div>
            {/* icons and buttons section */}
            <div className="part2 flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-5">
                <button className="flex items-center font-medium gap-2">
                  <Link to={"/login"}>
                    <i class="text-xl ri-map-pin-user-fill"></i>Login
                  </Link>
                </button>
                <button className="flex items-center font-medium gap-2">
                  <Link to={"/signup"}>
                    <i class="text-xl ri-user-heart-fill"></i>SignUp
                  </Link>
                </button>
                {/* <button class="flex items-center font-medium gap-2"><i
                      class="text-xl ri-heart-pulse-fill"></i>Medical Tourism</button> */}
              </div>
            </div>
          </nav>
          {/* page-1 */}
          <div className="page-1 lg:flex p-3  gap-5">
            {/* side part-one */}
            <div className="slider-container rounded-2xl lg:h-[90vh] lg:w-[55vw] flex overflow-hidden relative">
              <div className="slides flex transition-transform duration-500 ease-in-out">
                <div className="slide bg-[url(https://www.tourmyindia.com/imagess/kashmir-banner.webp)] h-[90vh] bg-cover bg-center w-[100vw] lg:w-[35vw] flex items-end justify-center">
                  <div className="text flex flex-col items-center mb-10">
                    <div className="text-center lg:text-left p-5">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
                        North &amp; Central India Tiger
                      </h1>
                      <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
                        Package
                      </h1>
                      <h1 className="text-xl sm:text-2xl md:text-4xl text-white font-semibold">
                        16 Nights - 17 Days
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="slide bg-[url(https://www.tourmyindia.com/imagess/maharaja1-express.webp)] h-[90vh] bg-cover bg-center w-[100vw] lg:w-[35vw] flex items-end justify-center">
                  <div className="text flex flex-col items-center mb-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
                      Maharaja Express Luxury
                    </h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
                      Package
                    </h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
                      8 Nights - 9 Days
                    </h1>
                  </div>
                </div>
                <div className="slide bg-[url(https://www.tourmyindia.com/imagess/tajmahal.webp)] h-[90vh] bg-cover bg-center w-[100vw] lg:w-[35vw] flex items-end justify-center">
                  <div className="text flex flex-col items-center mb-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
                      Golden Triangle Tour
                    </h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
                      Package
                    </h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
                      6 Nights - 7 Days
                    </h1>
                  </div>
                </div>
                <div className="slide bg-[url(https://www.tourmyindia.com/imagess/leh-ladakh-tour.webp)] h-[90vh] bg-cover bg-center w-[100vw] lg:w-[35vw] flex items-end justify-center">
                  <div className="text flex flex-col items-center mb-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
                      Leh Ladakh Tours
                    </h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
                      Package
                    </h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
                      6 Nights - 7 Days
                    </h1>
                  </div>
                </div>
              </div>
              {/* Navigation Buttons */}
            </div>
            {/* side part-two */}
            <div className="box lg:mt-0 mt-5 lg:h-[90vh] w-full flex flex-col justify-center items-center">
              {/* Text Section */}
              <div className="text px-5 lg:px-10 text-center lg:text-left mb-5">
                <h1 className="text-4xl sm:text-5xl md:text-[9vh] lg:text-[11vh] text-gray-500">
                  Let us plan you a
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-[9vh] lg:text-[11vh] text-gray-500">
                  perfect{" "}
                  <span className="font-semibold text-[#FF6612]">Holiday</span>
                </h1>
                <h1 className="text-md mt-[10px] sm:text-xl md:text-2xl text-gray-500">
                  With TourMitra, select your destination, book a verified
                  guide, and customize your itinerary. Manage logistics like
                  transportation and accommodation, make secure payments, and
                  enjoy a hassle-free holiday. Afterward, leave a review to help
                  other travelers
                </h1>
              </div>
              {/* Boxes Section */}
              <div className="min-box1 h-auto w-full p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center">
                {/* Wildlife Box */}
                <div className="minbox h-[35vh] sm:h-[40vh] lg:h-[35vh] w-full sm:w-[45vw] md:w-[30vw] lg:w-[15vw] bg-zinc-100 shadow-black rounded-xl p-5 flex flex-col justify-between">
                  <div className="text flex flex-col">
                    <h1 className="font-semibold  text-2xl text-center">
                      Choose a city
                      {/* <h1 class="font-semibold text-gray-500">70+ Packages</h1> */}
                    </h1>
                  </div>
                  <div className="bg-[url('')] h-[20vh] w-full rounded-[20px] bg-cover bg-center ">
                    <img src={firstImage} alt />
                  </div>
                </div>
                {/* Heritage Box */}
                <div className="minbox h-[35vh] sm:h-[40vh] lg:h-[35vh] w-full sm:w-[45vw]  md:w-[30vw] lg:w-[15vw] bg-zinc-100 shadow-black rounded-xl p-5 flex flex-col justify-between">
                  <div className="text flex flex-col">
                    <h1 className="font-semibold  text-2xl text-center">
                      Choose a guide
                    </h1>
                    {/* <h1 class="font-semibold text-gray-500">25+ Packages</h1> */}
                  </div>
                  <div className="bg-[url('./')] h-[20vh] w-full rounded-[20px] bg-cover bg-center text-center">
                    <img src={secondImage} alt />
                  </div>
                </div>
                {/* Trekking Box */}
                <div className="minbox h-[35vh] sm:h-[40vh] lg:h-[35vh] w-full sm:w-[45vw] md:w-[30vw] lg:w-[15vw] bg-zinc-100 shadow-black rounded-xl p-5 flex flex-col justify-between">
                  <div className="text flex flex-col">
                    <h1 className="font-semibold text-2xl text-center">
                      Enjoy Your Trip
                    </h1>
                    {/* <h1 class="font-semibold text-gray-500">70+ Packages</h1> */}
                  </div>
                  <div className="bg-[url('')] h-[20vh] w-full rounded-[20px] bg-cover bg-center">
                    <img src={thirdImage} alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* page-2 */}
          <div className="page-2 lg:h-screen ">
            {/* text */}
            <div className="text h-full flex flex-col gap-7 w-full p-5 md:p-[10vh]">
              {/* Text Section */}
              <div className="text flex flex-col gap-5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-500 text-center md:text-left">
                  Explore Top Destinations by Region
                </h1>
                <div className="button flex flex-wrap justify-center md:justify-start gap-5 md:gap-[6vw]">
                  <button className="text-lg sm:text-xl font-semibold hover:text-gray-500 duration-300 hover:underline">
                    North India
                  </button>
                  <button className="text-lg sm:text-xl font-semibold hover:text-gray-500 duration-300 hover:underline">
                    South India
                  </button>
                  <button className="text-lg sm:text-xl font-semibold hover:text-gray-500 duration-300 hover:underline">
                    East India
                  </button>
                  <button className="text-lg sm:text-xl font-semibold hover:text-gray-500 duration-300 hover:underline">
                    West India
                  </button>
                  <button className="text-lg sm:text-xl font-semibold hover:text-gray-500 duration-300 hover:underline">
                    Center India
                  </button>
                </div>
              </div>
              {/* Images Section */}
              <div className="img flex flex-wrap justify-center md:justify-start gap-5 lg:gap-14 p-3 md:p-5">
                {/* Uttarakhand */}
                <div className="img1 flex flex-col">
                  <div className="bg-[url('https://www.tourmyindia.com/imagess/uttarakhand01-package.webp')] flex items-end px-5 py-3 text-lg md:text-xl font-semibold text-white rounded-2xl bg-center bg-cover h-[45vh] sm:h-[50vh] md:h-[62vh] w-[70vw] sm:w-[45vw] md:w-[27vw]">
                    <h1>
                      Uttarakhand Package <br /> 50+ Packages
                    </h1>
                  </div>
                </div>
                {/* Smaller Images */}
                <div className="img2 flex lg:flex-col gap-3">
                  <div className="bg-[url('https://www.tourmyindia.com/imagess/rajasthan-package.webp')] bg-top flex items-end px-5 py-3 text-lg md:text-xl font-semibold text-white rounded-2xl bg-cover h-[150px] sm:h-[180px] md:h-[210px] w-[45vw] sm:w-[40vw] md:w-[230px]">
                    <h1>
                      Rajasthan <br /> 30+ Packages
                    </h1>
                  </div>
                  <div className="bg-[url('https://www.tourmyindia.com/imagess/up-package.webp')] bg-top flex items-end px-5 py-3 text-lg md:text-xl font-semibold text-white rounded-2xl bg-cover h-[150px] sm:h-[180px] md:h-[210px] w-[45vw] sm:w-[40vw] md:w-[230px]">
                    <h1>
                      Uttar Pradesh <br /> 25+ Packages
                    </h1>
                  </div>
                </div>
                <div className="img3 flex lg:flex-col gap-3">
                  <div className="bg-[url('https://www.tourmyindia.com/imagess/himachal-package.webp')] bg-top flex items-end px-5 py-3 text-lg md:text-xl font-semibold text-white rounded-2xl bg-cover h-[150px] sm:h-[180px] md:h-[210px] w-[45vw] sm:w-[40vw] md:w-[230px]">
                    <h1>
                      Himachal <br /> 60+ Packages
                    </h1>
                  </div>
                  <div className="bg-[url('https://www.tourmyindia.com/imagess/delhi-package.webp')] bg-top flex items-end px-5 py-3 text-lg md:text-xl font-semibold text-white rounded-2xl bg-cover h-[150px] sm:h-[180px] md:h-[210px] w-[45vw] sm:w-[40vw] md:w-[230px]">
                    <h1>
                      Delhi <br /> 20+ Packages
                    </h1>
                  </div>
                </div>
                <div className="img4 flex lg:flex-col gap-3">
                  <div className="bg-[url('https://www.tourmyindia.com/imagess/j&k-package.webp')] bg-top flex items-end px-5 py-3 text-lg md:text-xl font-semibold text-white rounded-2xl bg-cover h-[150px] sm:h-[180px] md:h-[210px] w-[45vw] sm:w-[40vw] md:w-[230px]">
                    <h1>
                      Jammu &amp; Kashmir <br /> 30+ Packages
                    </h1>
                  </div>
                  <div className="bg-[url('https://www.tourmyindia.com/imagess/ladakh-trend.webp')] bg-top flex items-end px-5 py-3 text-lg md:text-xl font-semibold text-white rounded-2xl bg-cover h-[150px] sm:h-[180px] md:h-[210px] w-[45vw] sm:w-[40vw] md:w-[230px]">
                    <h1>
                      Ladakh <br /> 35+ Packages
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* page-3 */}
          <div className="page-3 lg:h-screen lg:px-[12vh] py-5 flex flex-col gap-10">
            {/* text */}
            <div className="text flex flex-col gap-3 md:gap-5">
              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center md:text-left">
                Top Trending Destinations
              </h1>
              {/* View All Tours Button */}
              <h1 className="text-lg sm:text-xl font-bold text-zinc-500 flex items-center justify-center md:justify-start gap-2">
                View All Tours
                <i className="ri-arrow-drop-right-line text-[#FE402A] text-4xl sm:text-5xl" />
              </h1>
            </div>
            {/* img-box */}
            <div className="lg:h-[60vh] lg:flex lg:flex-row flex flex-col gap-3 p-5 overflow-hidden bg-zinc-100 rounded-[10px]">
              <div className="box1 h-[55vh] lg:w-[25vw] border border-gray-300 rounded-[20px] p-2">
                <div className="rounded-2xl bg-[url(https://www.tourmyindia.com/imagess/sikkim01-package.webp)] bg-cover bg-center h-[40vh] w-full bg-yellow-500"></div>
                <div className="text mt-5">
                  <h1 className="text-2xl text-zinc-400 font-semibold">
                    40+ Packages
                  </h1>
                  <h1 className="text-xl font-bold">Sikkim</h1>
                </div>
              </div>
              <div className="box1 h-[55vh] lg:w-[25vw]  border border-gray-300 rounded-[20px] p-2">
                <div className="rounded-2xl bg-[url(https://www.tourmyindia.com/imagess/bhutan-package.webp)] bg-cover bg-center h-[40vh] w-full bg-yellow-500"></div>
                <div className="text mt-5">
                  <h1 className="text-2xl text-zinc-400 font-semibold">
                    20+ Packages
                  </h1>
                  <h1 className="text-xl font-bold">Bhutan</h1>
                </div>
              </div>
              <div className="box1 h-[55vh] lg:w-[25vw]  border border-gray-300 rounded-[20px] p-2">
                <div className="rounded-2xl bg-[url(https://www.tourmyindia.com/imagess/bhutan-package.webp)] bg-cover bg-center h-[40vh] w-full bg-yellow-500"></div>
                <div className="text mt-5">
                  <h1 className="text-2xl text-zinc-400 font-semibold">
                    10+ Packages
                  </h1>
                  <h1 className="text-xl font-bold">Thailand</h1>
                </div>
              </div>
              <div className="box1 h-[55vh] lg:w-[25vw]  border border-gray-300 rounded-[20px] p-2">
                <div className="rounded-2xl bg-[url(https://www.tourmyindia.com/imagess/srilanaka-package.webp)] bg-cover bg-center h-[40vh] w-full bg-yellow-500"></div>
                <div className="text mt-5">
                  <h1 className="text-2xl text-zinc-400 font-semibold">
                    10+ Packages
                  </h1>
                  <h1 className="text-xl font-bold">Sirlanka</h1>
                </div>
              </div>
              <div className="box1 h-[55vh] lg:w-[25vw]  border border-gray-300 rounded-[20px] p-2">
                <div className="rounded-2xl bg-[url(https://www.tourmyindia.com/imagess/rajasthan01-package.webp)] bg-cover bg-center h-[40vh] w-full bg-yellow-500"></div>
                <div className="text mt-5">
                  <h1 className="text-2xl text-zinc-400 font-semibold">
                    30+ Packages
                  </h1>
                  <h1 className="text-xl font-bold">Rajashan</h1>
                </div>
              </div>
            </div>
          </div>
          {/* page-4 */}
          <div className="page-4 lg:h-screen p-[10vh] ">
            {/* text */}
            <div className="text flex flex-col gap-4 md:gap-5 items-center md:items-start">
              {/* Main Headings */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-400 text-center md:text-left">
                Guest Satisfaction is Our Goal;
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-400 text-center md:text-left">
                Valuable Feedback Matters to Us
              </h1>
              {/* Buttons */}
              <div className="button flex flex-wrap gap-5 md:gap-10 justify-center md:justify-start mt-4">
                <button className="px-4 py-2 sm:px-5 sm:py-2 border rounded-[20px] text-lg sm:text-xl font-semibold hover:bg-white duration-300 hover:text-black text-gray-500 bg-[#FF6612]">
                  Jaipur Visit
                </button>
                <button className="px-4 py-2 sm:px-5 sm:py-2 border rounded-[20px] text-lg sm:text-xl font-semibold hover:bg-[#FF6612] duration-300 hover:text-white">
                  Kashmir Ladakh Trip
                </button>
                <button className="px-4 py-2 sm:px-5 sm:py-2 border rounded-[20px] text-lg sm:text-xl font-semibold hover:bg-[#FF6612] duration-300 hover:text-white">
                  Ranthambore Visit
                </button>
                <button className="px-4 py-2 sm:px-5 sm:py-2 border rounded-[20px] text-lg sm:text-xl font-semibold hover:bg-[#FF6612] duration-300 hover:text-white">
                  View All
                </button>
              </div>
            </div>
            {/* img-box */}
            <div className="box flex flex-col lg:flex-row gap-5">
              {/* Image Section */}
              <div className="min-box w-full lg:w-[50%] gap-5 p-5 flex flex-col md:flex-row">
                <div className="h-[50vh] md:h-[60vh] w-full md:w-[25vw] bg-[url(https://www.tourmyindia.com/imagess/gangotri-customer.webp)] bg-cover bg-center rounded-lg"></div>
                <div className="h-[50vh] md:h-[60vh] w-full md:w-[23vw] bg-[url(https://www.tourmyindia.com/imagess/gangotri-client.webp)] bg-cover bg-center rounded-lg"></div>
              </div>
              {/* Text Section */}
              <div className="min-box2 py-4 px-5 flex flex-col items-start gap-5 w-full lg:w-[50%]">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold">
                  Nice experiences....
                </h1>
                <p className="text-sm md:text-base lg:text-[17px] text-gray-600">
                  "I had an amazing experience using TourMitra during my trip to
                  Jaipur. Booking a tour guide was so easy and seamless through
                  the platform. I was matched with a local guide who was
                  incredibly knowledgeable about the city's history, culture,
                  and hidden gems. What I appreciated most was the verification
                  process of the guides, which made me feel safe and assured.
                  The guide was friendly, punctual, and customized the tour to
                  my interests. From the vibrant markets to the grand palaces,
                  the whole experience was unforgettable. Highly recommend
                  TourMitra for anyone looking for a reliable and authentic
                  travel experience!
                </p>
                {/* User and Rating Section */}
                <div className="text flex justify-between w-full">
                  <div className="text1">
                    <h1 className="text-lg md:text-xl font-semibold text-zinc-700">
                      Jaipur Visit
                    </h1>
                    <h1 className="text-lg md:text-xl text-gray-500">
                      May 2022
                    </h1>
                  </div>
                  <div className="box flex flex-col items-end">
                    <div className="icon text-xl md:text-2xl text-[#61C27C] font-semibold flex">
                      <i className="ri-star-s-fill" />
                      <i className="ri-star-s-fill" />
                      <i className="ri-star-s-fill" />
                      <i className="ri-star-s-fill" />
                      <i className="ri-star-s-fill" />
                    </div>
                    <h1 className="text-lg md:text-xl font-semibold text-gray-500">
                      Tour Mitra
                    </h1>
                  </div>
                </div>
                {/* Button */}
                <button className="border w-[30vw] md:w-[20vw] lg:w-[10vw] h-[6vh] rounded-2xl border-gray-500 hover:border-none font-semibold hover:bg-[#FD6512] hover:text-white duration-300">
                  Explore More
                </button>
              </div>
            </div>
          </div>
          {/* why tourmitra */}
          <div className="mt-[90px] ">
            <p className=" font-bold text-[#38404F] text-7xl px-[5.5vw]">
              Why TourMitra?
            </p>
            <div className="p-4 lg:flex gap-2 items-center justify-between mt-10 px-[30px] lg:px-[90px]">
              <div className="bg-[#EFF4EF] w-[320px] h-[400px] lg:h-[550px] lg:p-[20px] flex flex-col items-center lg:pt-[50px] text-center pt-[60px] px-[10px] mb-[20px]">
                <img src="https://www.tourmyindia.com/imagess/thumb.png" alt />
                <p className="text-xl font-bold mt-[30px]">
                  Verified and Trustworthy Guides
                </p>
                <p className="mt-[10px] text-lg">
                  {" "}
                  All guides are thoroughly verified through Aadhar, PAN, and
                  other credentials, ensuring tourists receive services from
                  reliable and qualified professionals.
                </p>
              </div>
              <div className="bg-[#EEF5F8] w-[320px] h-[400px] lg:h-[550px] lg:p-[20px] flex flex-col items-center lg:pt-[50px] pt-[60px] px-[10px] mb-[20px]">
                <img src="https://www.tourmyindia.com/imagess/thumb.png" alt />
                <p className="text-xl font-bold mt-[30px]">
                  Secure Transactions
                </p>
                <p className="text-center mt-[10px] text-lg">
                  {" "}
                  With integrated secure payment gateways, tourists can book
                  their guides confidently, knowing their financial information
                  is protected.
                </p>
              </div>
              <div className="bg-[#FBF2F1] w-[320px] h-[400px] lg:h-[550px] lg:p-[20px] flex flex-col items-center lg:pt-[50px] pt-[60px] px-[10px] mb-[20px]">
                <img src="https://www.tourmyindia.com/imagess/thumb.png" alt />
                <p className="text-xl font-bold mt-[30px]">
                  User-Friendly Platform
                </p>
                <p className="text-center mt-[10px] text-lg">
                  {" "}
                  The platform is designed for simplicity, allowing tourists to
                  easily browse, select, and book guides with just a few clicks.
                </p>
              </div>
              <div className="bg-[#FDFAEE] w-[320px] h-[400px] lg:h-[550px] lg:p-[20px] flex flex-col items-center lg:pt-[50px] pt-[60px] px-[10px] mb-[20px]">
                <img src="https://www.tourmyindia.com/imagess/thumb.png" alt />
                <p className="text-xl font-bold mt-[30px]">
                  Enhanced Travel Experience
                </p>
                <p className="text-center mt-[10px] text-lg">
                  {" "}
                  : By connecting with knowledgeable local guides, tourists gain
                  deeper insights into their destinations, making their trips
                  more authentic and enriching.
                </p>
              </div>
            </div>
          </div>
          {/* footer  */}
          <div className="fotter bg-[#FF6612] w-full p-5 mt-[100px] lg:h-[450px] pt-[50px] lg:flex   items-center justify-between">
            <div className="lg:w-[40%]  ">
              <p className="text-white font-bold text-[30px]  ">About Us</p>
              <p className="text-white text-lg mt-[30px]">
                TourMitra connects travelers with verified local guides for
                authentic and personalized experiences. We focus on creating
                meaningful journeys by offering tours that go beyond the typical
                tourist spots. With a commitment to safety and cultural
                connection, TourMitra ensures every trip is an unforgettable
                adventure filled with unique memories.
              </p>
              <button className="bg-white text-[#38404F] text-2xl px-[20px] py-[10px] font-bold mt-[30px]">
                Book your TourMitra
              </button>
            </div>
            <div className="w-[40%] h-full">
              <div className=" mt-[30px] flex items-center gap-[50px] text-white font-semibold text-xl">
                <div className="leading-[40px]">
                  <p>Email</p>
                  <p>cutomer care</p>
                  <p>Address</p>
                </div>
                <div className="leading-[40px]">
                  <p>tourmitra@gmail.com</p>
                  <p>9573895984</p>
                  <p className="tracking-wider">
                    Ashoka Garden , Bhopal , Madhya Pradesh
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[20px] text-6xl mt-[70px] text-white">
                <i className="ri-instagram-fill" />{" "}
                <i className="ri-facebook-box-fill" />
                <i className="ri-twitter-fill" />
                <i className="ri-linkedin-fill" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
