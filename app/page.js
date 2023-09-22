import AboutUs from '@/components/AboutUs'
import AbtBanner from '@/components/AbtBanner'
import AbtBannerTop from '@/components/AbtBannerTop'
import BannerVideo from '@/components/BannerVideo'
import ExploreProducts from '@/components/BestSeller'
import FreshFruitsAndVegetables from '@/components/BestSeller'
import BestSeller from '@/components/BestSeller'
import Partnerships from '@/components/Brands'
import Brands from '@/components/Brands'
import CustomFilter from '@/components/CustomFilter'
import ProductList from '@/components/ExploreCollection'
import ExploreCollection from '@/components/ExploreCollection'
import FeatureTab from '@/components/FeatureTab'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Message from '@/components/Message'
import Navbar from '@/components/Navbar'
import ProductDesc from '@/components/ProductDescriptiom'
import ProducutGrid from '@/components/ProducutGrid'
import ShopFor from '@/components/ShopFor'
import ProductLeft from '@/components/productLeft'


export default function Home() {
  return (
<mian>
<Navbar />
<Hero />
 <Message />
 <ShopFor />

 <ProducutGrid />
 <ExploreCollection />
 <BannerVideo />
<Partnerships />


 <Footer />
</mian>
  )
}
