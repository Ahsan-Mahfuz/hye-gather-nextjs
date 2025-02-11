import Link from 'next/link'

const categories = [
  { name: 'Musicians', image: '/Frame-1.png' },
  { name: 'Entertainers', image: '/Frame-2.png' },
  { name: 'Event Planners', image: '/Frame-3.png' },
  { name: 'Decorators', image: '/Frame-4.png' },
  { name: 'Caterers', image: '/Frame-5.png' },
  { name: 'Photographers', image: '/Frame-6.png' },
  { name: 'DJs', image: '/Frame.png' },
]

const VendorCategories = () => {
  return (
    <div className="responsive-width ">
      <section className="mt-[200px] max-lg:mt-[40px]">
        <div className="mx-auto flex items-center flex-col ">
          <h1 className="text-3xl font-bold">Explore Our Vendor Categories</h1>
          <p className="text-[15px] mt-3 text-gray-600 flex items-center justify-center">
            Pre-defined templates focusing on content presentation and high
            conversion rates. This is your starting point to discover the best
            vendors in each category at the most competitive prices.
          </p>
        </div>
        <Link
          href={'/vendors'}
          className="flex flex-wrap justify-center  max-md:gap-0 gap-3 mt-5 "
        >
          {categories.map((category) => (
            <div
              key={category.name}
              style={{
                backgroundImage: `url(${category.image})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '350px',
              }}
              className=" min-h-[200px] max-md:min-h-[200px]  flex items-center justify-center"
            >
              <div className="text-black  max-md:text-[17px] font-bold text-xl  bg-opacity-50 p-2 rounded -mt-5 -rotate-[55deg] mr-40">
                {category.name}
              </div>
            </div>
          ))}
        </Link>
      </section>
    </div>
  )
}

export default VendorCategories
