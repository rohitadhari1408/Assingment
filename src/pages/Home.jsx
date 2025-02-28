import React from 'react'
import Navbar from '../componets/Navbar';
import Hero from '../componets/Hero';
import Footer from '../componets/Footer';
import OtherProducts from '../componets/OtherProducts';
import FAQSection from '../componets/FAQSection';
import LegacySection from '../componets/LegacySection';
import HowItWorks from '../componets/HowItWorks';
import WhyFree from '../componets/WhyFree';
import TrustedSection from '../componets/TrustedSection';
import Media from '../componets/MediaMentions';
import Free from '../componets/WhyFree';
import Stat from '../componets/StatsSection';

const Home = () => {
  return (
    <>

<Navbar/>
<Hero/>
<Media/>
<OtherProducts/>
<TrustedSection/>
<WhyFree/>
<HowItWorks/>
<LegacySection/>
<Stat/>
<FAQSection/>
<Free/>
<Footer/>
    </>
  )
}

export default Home
