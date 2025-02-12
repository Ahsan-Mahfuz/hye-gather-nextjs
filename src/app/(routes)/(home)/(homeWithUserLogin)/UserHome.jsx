import React from 'react'
import UserHeroPage from './UserHeroPage'
import PopularVendorsCategory from './PopularVendorsCategory'
import Testimonial from '../withoutLoginHome/Testimonial'
import HowItWorks from './HowItWorks'
import DiscoverVendors from './discoverVendors/DiscoverVendors'
import TopRatedVendors from './TopRatedVendors'

const UserHome = () => {
  return (
    <div className='w-11/12 items-center mx-auto'>
      <UserHeroPage />
      <PopularVendorsCategory />
      <DiscoverVendors />
      <HowItWorks />
      <TopRatedVendors />
      <Testimonial />
    </div>
  )
}

export default UserHome
