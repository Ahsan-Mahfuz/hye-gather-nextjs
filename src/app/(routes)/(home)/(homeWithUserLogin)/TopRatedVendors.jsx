import React from 'react'
import entertainment from '../../../assets/entertainment.jpg'
import djs from '../../../assets/DJs.jpg'
import bar from '../../../assets/Bar.jpg'
import food from '../../../assets/food.jpg'
import photography from '../../../assets/Photography.jpg'

const vendors = [
  {
    id: 1,
    name: 'Eleanor Pena',
    rating: 4.8,
    reviews: 125,
    phone: '(406) 555-0120',
    email: 'michelle.rivera@example.com',
    image: entertainment,
    logo: djs,
    category: 'Tasty Cakes',
  },
  {
    id: 2,
    name: 'Eleanor Pena',
    rating: 4.8,
    reviews: 125,
    phone: '(406) 555-0120',
    email: 'michelle.rivera@example.com',
    image: 'https://randomuser.me/api/portraits/lego/3.jpg',
    logo: 'https://randomuser.me/api/portraits/lego/4.jpg',
    category: 'Coffee Shop',
  },
  {
    id: 3,
    name: 'Eleanor Pena',
    rating: 4.8,
    reviews: 125,
    phone: '(406) 555-0120',
    email: 'michelle.rivera@example.com',
    image: 'https://randomuser.me/api/portraits/lego/7.jpg',
    logo: 'https://randomuser.me/api/portraits/lego/6.jpg',
    category: 'Player Fire',
  },
]

const TopRatedVendors = () => {
  return (
    <div className=" mt-50 ">
      <div className='responsive-width'>
        <h2 className="text-3xl font-bold mb-6">
          This Week's Top-Rated Vendors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden "
            >
              <img
                src={vendor.image}
                alt={vendor.category}
                className="w-full h-60 object-cover"
              />
              <div className="flex justify-center -mt-30">
                <img
                  src={vendor.logo}
                  alt={vendor.category}
                  className="w-50 h-50 object-cover object-center rounded-full border-4 border-white"
                />
              </div>
              <div className=" p-4">
                <h3 className="text-2xl font-semibold ">{vendor.name}</h3>
                <div className=" gap-1 flex items-center   mt-2">
                  ⭐ {vendor.rating}{' '}
                  <span className="text-gray-500 text-sm">
                    ({vendor.reviews} reviews)
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2"> <span className='font-bold'>Phone:</span> {vendor.phone}</p>
                <p className="text-sm text-gray-600 "><span className='font-bold'>Email: </span>{vendor.email}</p>
                <button className="mt-4 w-full bg-blue-800 text-white px-4 py-2 h-[48px] rounded-lg cursor-pointer hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopRatedVendors
