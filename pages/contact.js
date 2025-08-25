import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Cta from "../components/cta";


export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact TyneMove | Van Removals Newcastle, Sunderland & Durham</title>
                <meta
                    name="description"
                    content="Contact TyneMove for reliable and affordable van removals across Newcastle, Sunderland, Durham and nearby towns. Get in touch via phone or email."
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.tynemove.co.uk/contact" />

                {/* LocalBusiness Schema for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `
    {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      "name": "TyneMove",
      "url": "https://www.tynemove.co.uk",
      "logo": "https://www.tynemove.co.uk/img/logo.png",
      "telephone": "+44 1234 567890",
      "email": "contact@tynemove.co.uk",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12 Argent Street, Peterlee",
        "addressLocality": "Peterlee",
        "postalCode": "NE1 1AB",
        "addressCountry": "UK"
      },
      "areaServed": [
        "Newcastle upon Tyne",
        "Sunderland",
        "Durham",
        "Gateshead",
        "North Shields",
        "South Shields",
        "Peterlee",
        "Washington",
        "Blyth",
        "Consett",
        "Cramlington",
        "Hebburn",
        "Jarrow",
        "Whitley Bay",
        "Seaham"
      ],
      "sameAs": [
        "https://www.facebook.com/tynemove",
        "https://www.instagram.com/tynemove"
      ]
    }
  `,
                    }}
                />
            </Head>

            <Navbar />

            {/* Hero Section */}
            <section className="bg-blue-900 text-white py-20">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h1 className="text-3xl font-bold lg:text-4xl">Contact Us</h1>
                    <p className="mt-4 text-lg lg:text-xl">
                        Reach out to us today and let’s make your move smooth and stress-free.
                    </p>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-3xl mx-auto text-center px-6">
                    <h2 className="text-2xl font-semibold mb-6">We’d love to hear from you</h2>
                    <div className="space-y-4 text-lg">
                        <p>
                            📞 <span className="font-medium">Phone:</span>{" "}
                            <a href="tel:+441234567890" className="text-blue-600 hover:underline">
                                +44 1234 567 890
                            </a>
                        </p>
                        <p>
                            📧 <span className="font-medium">Email:</span>{" "}
                            <a href="mailto:quote@tynemove.co.uk" className="text-blue-600 hover:underline">
                                info@tynemove.co.uk
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <Cta />

            {/* Footer */}
            <Footer />

            {/* Popup Widget */}
           
        </>
    );
}
