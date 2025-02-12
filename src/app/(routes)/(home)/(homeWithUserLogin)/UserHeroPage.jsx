import React from 'react'

import djs from '../../../assets/DJs.jpg'
import bar from '../../../assets/Bar.jpg'
import food from '../../../assets/food.jpg'
import photography from '../../../assets/Photography.jpg'

const UserHeroPage = () => {
  return (
    <div className="responsive-width flex flex-col xl:flex-row gap-10 items-center justify-between h-screen  ">
      {/* Left Side - Text & Search */}
      <div className="max-w-xl ">
        <h1 className="text-3xl font-bold text-gray-900">
          Plan Your Dream Event Effortlessly!
        </h1>
        <p className="text-gray-700 mt-3">
          Design and customize your perfect event with ease. Choose from
          top-rated vendors for a seamless and unforgettable experience.
        </p>

        <ul className="mt-4 space-y-2">
          <li className="flex items-center text-gray-700">
            <span className="text-blue-500 mr-2">✔</span> Manage all your event
            details in one place
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-blue-500 mr-2">✔</span> Get real-time updates
            on your bookings
          </li>
          <li className="flex items-center text-gray-700">
            <span className="text-blue-500 mr-2">✔</span> Secure and hassle-free
            payments
          </li>
        </ul>

        <div className="mt-6 flex w-full max-w-md">
          <input
            type="text"
            className="flex-1 px-4 py-3 rounded-l-lg bg-white text-gray-700 focus:outline-none"
            placeholder="type here ..."
          />
          <button className="px-6 py-3 bg-blue-600 text-white rounded-r-lg font-semibold hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </div>

      {/* Right Side - Images */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-end max-md:items-center max-md:justify-center items-end gap-3">
          <img
            src={djs}
            alt="Bartender"
            className="max-w-72 w-full h-72 rounded-lg shadow-md object-cover"
          />
          <img
            src={bar}
            alt="DJ"
            className="max-w-52 w-full h-52 rounded-lg shadow-md object-cover max-md:hidden "
          />
        </div>
        <div className="flex justify-start max-md:items-center max-md:justify-center items-start gap-3">
          <img
            src={food}
            alt="Chef"
            className="max-w-52 w-full h-52 rounded-lg shadow-md object-cover max-md:hidden"
          />
          <img
            src={photography}
            alt="Photographer"
            className="max-w-72 w-full h-72  rounded-lg shadow-md object-cover "
          />
        </div>
      </div>
    </div>
  )
}

export default UserHeroPage
