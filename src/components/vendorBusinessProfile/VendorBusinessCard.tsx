import Image from 'next/image'

interface CardProps {
  id: number
  logo: string
  rating: number
  businessName: string
  about: string
  startPrice: number
  reviews: number
  vendorType: string
  services: {
    name: string
  }[]
}

const VendorBusinessCard: React.FC<CardProps> = ({
  id,
  logo,
  businessName,
  rating,
  services,
  startPrice,
  about,
  reviews,
  vendorType,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center sm:flex-row gap-4 max-w-[700px] w-full border border-gray-200">
      <div className="flex-shrink-0 w-[180px] max-sm:max-w-[400px] max-sm:w-full">
        <Image
          src={logo}
          alt="Vendor Logo"
          width={180}
          height={120}
          className="rounded-md object-cover object-center h-[120px] max-sm:h-full"
        />
      </div>

      <div className="flex-1 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center">
        <h3 className="text-lg font-semibold">{businessName}</h3>
        <div className="flex  items-center gap-1 text-yellow-500 text-sm">
          {'\u2B50'.repeat(Math.floor(rating))}
          <span className="text-gray-600 ml-1">
            {rating} ({reviews})
          </span>
        </div>
        <p className="text-red-800">{vendorType}</p>
        <div className="mt-2 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center">
          <p>Start Work at ${startPrice}</p>
          <p className="text-sm font-medium ">Vendor Service Categories:</p>
          <div className="flex gap-2 mt-1 flex-wrap">
            {services.map((service, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md text-xs"
              >
                {service.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col text-center">
        <p className="text-md font-semibold">
          Start Work At <span className="text-black">${startPrice}</span>
        </p>
      </div>
    </div>
  )
}

export default VendorBusinessCard
