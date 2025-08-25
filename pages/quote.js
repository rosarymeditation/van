import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Footer from "../components/footer";
import Cta from "../components/cta";

export default function Quote() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        moveType: "Home Move",
        moveDate: "",
        details: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess("");

        try {
            const res = await fetch("/api/send-quote", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (res.ok) {
                setSuccess("Your quote request has been sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    moveType: "Home Move",
                    moveDate: "",
                    details: "",
                });
            } else {
                setSuccess(`Error: ${data.message}`);
            }
        } catch (error) {
            console.log(error)
            setSuccess("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Head>
                <title>Free Moving Quote | Van Removals Newcastle, Sunderland & Durham | TyneMove</title>
                <meta
                    name="description"
                    content="Get a free moving quote from TyneMove. Affordable van removals in Newcastle, Sunderland, Durham and nearby towns. Safe, reliable and stress-free moving services."
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.tynemove.co.uk/quote" />

                {/* LocalBusiness Schema for SEO */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: `
    {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      "name": "TyneMove",
      "url": "https://www.tynemove.co.uk",
      "logo": "https://www.tynemove.co.uk/img/logo.png",
      "telephone": "+44 1234 567890",
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
        "Peterlee"
      ],
      "sameAs": [
        "https://www.facebook.com/tynemove",
        "https://www.instagram.com/tynemove"
      ]
    }
  `}} />
            </Head>

            <Navbar />

            {/* Hero Section */}
            <section className="bg-blue-900 text-white py-20">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h1 className="text-3xl font-bold lg:text-4xl">Get Your Free Quote</h1>
                    <p className="mt-4 text-lg lg:text-xl">
                        Fill out the form below and our team will provide a quick and accurate quote for your move.
                    </p>
                </div>
            </section>

            {/* Quote Form Section */}
            <SectionTitle pretitle="Request a Quote" title="Provide Your Move Details">
                Complete the form and we’ll get back to you with a tailored quote for your home, office, or single-item move.
            </SectionTitle>

            <div className="max-w-3xl mx-auto px-6 py-10">
                <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your Phone Number"
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Move Type</label>
                        <select
                            name="moveType"
                            value={formData.moveType}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                            <option>Home Move</option>
                            <option>Office Move</option>
                            <option>Single Item Delivery</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Move Date</label>
                        <input
                            type="date"
                            name="moveDate"
                            value={formData.moveDate}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Additional Details</label>
                        <textarea
                            name="details"
                            value={formData.details}
                            onChange={handleChange}
                            placeholder="Any special instructions?"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            rows={4}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full text-white font-medium py-3 rounded-md transition-colors ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                            }`}
                    >
                        {loading ? "Sending..." : "Request Quote"}
                    </button>

                    {success && (
                        <p className="mt-4 text-center text-green-600 font-medium">{success}</p>
                    )}
                </form>
            </div>

            {/* CTA Section */}


            {/* Footer */}
            <Footer />

            {/* Popup Widget */}
        
        </>
    );
}
