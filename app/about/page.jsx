import AboutUs from "@/components/AboutUs";
import AbtBanner from "@/components/AbtBanner";
import AbtBannerTop from "@/components/AbtBannerTop";
import FooterWithSitemap from "@/components/Footer";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
<mian>
<Navbar />
<AbtBannerTop />
<AboutUs />
<AbtBanner />

<FooterWithSitemap />
</mian>
  )
}
