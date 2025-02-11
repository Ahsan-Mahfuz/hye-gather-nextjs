import CustomizeEvent from '@/components/home/homeWithoutLogin/CustomizeEvent'
import FrequentlyAskedQuestion from '@/components/home/homeWithoutLogin/FrequentlyAskedQuestion'
import HeroPage from '@/components/home/homeWithoutLogin/HeroPage'
import Testimonial from '@/components/home/homeWithoutLogin/Testimonial'
import VendorCategories from '@/components/home/homeWithoutLogin/VendorCategories'

const Home = () => {
  return (
    <div>
      <HeroPage />
      <CustomizeEvent />
      <VendorCategories />
      <FrequentlyAskedQuestion />
      <Testimonial />
    </div>
  )
}

export default Home
