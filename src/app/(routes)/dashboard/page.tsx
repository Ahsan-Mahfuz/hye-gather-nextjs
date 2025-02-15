import VendorBusinessCard from '@/components/vendorBusinessProfile/vendorBusinessCard'
import React from 'react'

type VendorBusinessData = {
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

const vendorBusinessData: VendorBusinessData = {
  id: 1,
  logo: 'https://randomuser.me/api/portraits/men/1.jpg',
  rating: 4.5,
  businessName: 'Cafe Isatin',
  about:
    'This is a brief description of the business. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  startPrice: 1000,
  reviews: 10,
  vendorType: 'premium',
  services: [
    {
      name: 'Bars',
    },
    {
      name: 'Food',
    },
    {
      name: 'Coffee',
    },
  ],
}

const Dashboard = () => {
  return (
    <div>
      <VendorBusinessCard {...vendorBusinessData} />
    </div>
  )
}

export default Dashboard
