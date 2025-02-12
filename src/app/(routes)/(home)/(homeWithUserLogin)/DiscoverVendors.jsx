import React, { useState } from 'react'
import entertainment from '../../../../assets/entertainment.jpg'
import photography from '../../../../assets/photography.jpg'
import venues from '../../../../assets/venues.jpg'
import djs from '../../../../assets/djs.jpg'
import bar from '../../../../assets/Bar.jpg'
import food from '../../../../assets/food.jpg'
import { Link } from 'react-router-dom'

const DiscoverVendors = () => {
  const categories = [
    'Entertainment',
    'Photography',
    'Venues',
    'DJs',
    'Bars',
    'Food',
    'View All',
  ]

  const [activeCategory, setActiveCategory] = useState(categories[0])

  const vendors = {
    Entertainment: [
      { id: 1, image: entertainment, title: 'Entertainment 1' },
      { id: 2, image: entertainment, title: 'Entertainment 2' },
      { id: 3, image: entertainment, title: 'Entertainment 3' },
    ],
    Photography: [
      { id: 4, image: photography, title: 'Photography 1' },
      { id: 5, image: photography, title: 'Photography 2' },
    ],
    Venues: [
      { id: 6, image: venues, title: 'Venue 1' },
      { id: 7, image: venues, title: 'Venue 2' },
    ],
    DJs: [
      { id: 8, image: djs, title: 'DJ 1' },
      { id: 9, image: djs, title: 'DJ 2' },
    ],
    Bars: [
      { id: 10, image: bar, title: 'Bar 1' },
      { id: 11, image: bar, title: 'Bar 2' },
    ],
    Food: [
      { id: 12, image: food, title: 'Food 1' },
      { id: 13, image: food, title: 'Food 2' },
    ],
  }

  return (
    <div className="responsive-width mx-auto pb-50">
      <h2 className="text-3xl font-bold text-gray-900">
        Discover Vendors for Your Perfect Event
      </h2>
      <p className="text-gray-600 mb-4">
        Browse a wide range of professional vendors, from entertainment to
        photography, and make your event truly unforgettable.
      </p>
      <div className="flex space-x-4 border-b border-gray-500 overflow-x-scroll scrollbar-none">
        {categories.map((category) =>
          category === 'View All' ? (
            <Link key={category} to="/user/vendors">
              <button className="px-4 py-2 text-sm font-medium text-gray-700">
                {category}
              </button>
            </Link>
          ) : (
            <button
              key={category}
              className={`px-4 py-2 text-sm font-medium ${
                activeCategory === category
                  ? 'bg-blue-800 text-white'
                  : 'text-gray-700'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          )
        )}
      </div>
      <div className="flex flex-wrap items-center justify-start max-lg:justify-center gap-4 mt-6">
        {vendors[activeCategory].map((vendor) => (
          <div key={vendor.id} className="flex flex-col">
            <img
              src={vendor.image}
              alt={vendor.title}
              className="rounded-lg shadow-md w-[300px] h-[300px]"
            />
            <p className="text-lg font-semibold mt-2">{vendor.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DiscoverVendors
