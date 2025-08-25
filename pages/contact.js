import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Cta from "../components/cta";
import PopupWidget from "../components/popupWidget";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us - TyneMove</title>
                <meta
                    name="description"
                    content="Get in touch with TyneMove. Call us or send an email for all your moving and delivery needs."
                />
                <link rel="icon" href="/favicon.ico" />
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
            <PopupWidget />
        </>
    );
}
