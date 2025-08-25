import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

export default function Home() {
  return (
    <>
      <Head>
        <title>TyneMove - Reliable Van Removals in Newcastle, Sunderland, Durham & Nearby Towns</title>
        <meta
          name="description"
          content="TyneMove offers professional van removals across Newcastle, Sunderland, Durham and nearby towns. Affordable, safe, and stress-free moving solutions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />

      <SectionTitle
        pretitle="TyneMove Benefits"
        title="Why Choose TyneMove for Your Van Removal?">
        TyneMove provides professional van removals across Newcastle, Sunderland, Durham, and nearby towns.
        We make moving simple, affordable, and stress-free. Whether it’s a full house move, office relocation,
        or a single-item delivery, our friendly team ensures your belongings are transported safely and on time.
      </SectionTitle>

      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        pretitle="Watch a Video"
        title="See How TyneMove Works">
        Watch our quick video to see how TyneMove makes your move smooth and hassle-free.
        Our professional team ensures that every item is handled with care, giving you peace of mind during your relocation.
      </SectionTitle>
    

      <SectionTitle
        pretitle="Testimonials"
        title="What Our Customers Say">
        Hear from customers across Newcastle, Sunderland, Durham, and nearby towns who trusted TyneMove for their removals.
      </SectionTitle>
      <Testimonials />

      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Find answers to common questions about our van removals services.
        This helps you plan your move confidently and reduces the need for extra support.
      </SectionTitle>
      <Faq />

      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
