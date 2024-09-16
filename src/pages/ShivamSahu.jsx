import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import Logo from "../assests/logo.jpg";

const ShivamSahu = () => {
  return (
    <>
      <button className="fixed hidden lg:flex z-20 flex gap-1 bg-gray-100 border border-[#FD6512] px-3 rounded-[20px] py-1 top-[88%] right-[11%]">
        <i className="ri-phone-line" />
        <h1>51848484</h1>
      </button>
      <Link to={"/bookguide"}>
        <button className="fixed hidden lg:flex z-20 flex gap-1 border bg-[#FD6512] text-white px-3 rounded-[20px] py-1 top-[88%] right-[1%]">
          <i className="ri-map-pin-2-line" />
          <h1>Plan Your Trip</h1>
        </button>
      </Link>
      <div className="fixed hidden lg:flex h-[12vh] border-gray-100 bg-zinc-100 border items-center justify-center gap-10 flex w-full z-10 bg-white top-[90%] p-2">
        <Link to={"/bookguide"}>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[url(https://www.tourmyindia.com/imgnew/india-tour.svg)] bg-cover bg-center h-[5vh] w-[2vw]"></div>
            <h1 className="text-gray-500 font-normal">India Tour-Guides</h1>
          </div>
        </Link>
        <Link to={"/bookguide"}>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[url(https://www.tourmyindia.com/imgnew/international-tour.svg)] bg-cover bg-center h-[5vh] w-[2vw]"></div>
            <h1 className="text-gray-500 font-nornal">
              International Tour-Guides
            </h1>
          </div>
        </Link>
      </div>
      <nav className="nav flex w-full h-[10vh] justify-between items-center p-5 bg-white shadow-lg">
        {/* img and buttons section */}
        <div className="part1 flex items-center gap-4">
          {/* Logo */}
          <div className="h-[8vh] w-[15vw] lg:h-[10vh] lg:w-[4vw] bg-center bg-cover">
            <img className="logo-jpg-file" src={Logo} alt="" />
          </div>
          {/* Dropdown Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to={"/"}>
              <button className="flex items-center font-medium">
                Home{" "}
                <i className="text-gray-500 text-2xl ri-arrow-drop-down-line" />
              </button>
            </Link>
            <Link to={"/bookguide"}>
              <button className="flex items-center font-medium">
                Destination
                <i className="text-gray-500 text-2xl ri-arrow-drop-down-line" />
              </button>
            </Link>
            <Link to={"/bookguide"}>
              <button className="lg:flex hidden items-center font-medium">
                Booking{" "}
                <i className="text-gray-500 text-2xl ri-arrow-drop-down-line" />
              </button>
            </Link>
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
            <Link to={"/"}>
              <button className="flex items-center font-medium gap-2">
                Logout
              </button>
            </Link>
            {/* <button class="flex items-center font-medium gap-2"><i
                      class="text-xl ri-heart-pulse-fill"></i>Medical Tourism</button> */}
          </div>
        </div>
      </nav>
      <div className="cardcontainer">
        <div className="card">
          <div className="cardprofile">
            <div className="name">
              <h3>Shivam Sahu</h3>
              <small>Professional Tour Guide</small>
            </div>
            <div className="cardimage">
              <img
                src="https://plus.unsplash.com/premium_photo-1682098109069-0e49e3b42884?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Tour Guide Profile"
              />
            </div>
          </div>
          <div className="cardbody">
            <h1>Welcome Tourists!</h1>
            <h2>Tour Guide Details:</h2>
            <p>
              <span className="det">City:</span> Guwahati, Silchar, Digboi
            </p>
            <p>
              <span className="det">Contact:</span> shivamsahu@tourmitra.com
            </p>
            <p>
              <span className="det">Specialities:</span> Walking, Cultural, and
              Food Tours, Private Custom Tours
            </p>
            <p>
              <span className="det">Languages:</span> Hindi, English, French,
              Spanish, Chinese
            </p>
            <p>
              <span className="det">Certified:</span> Licensed NYC Guide, WFTGA
              Certified
            </p>
            <div className="icon">
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={3}
                  precision={0.5}
                  readOnly
                />
              </Stack>
            </div>
          </div>
          <div className="btn">
            Book this Guide <i className="ri-arrow-right-line" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShivamSahu;
