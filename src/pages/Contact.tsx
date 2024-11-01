import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: Phone, title: "Phone", content: "(401) 487-2783" },
    { icon: Mail, title: "Email", content: "info@saunahearth.com" },
    { icon: MapPin, title: "Address", content: "Cranston, RI 02910" },
    { icon: Clock, title: "Hours", content: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM" }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="py-12 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-amber-100 text-lg">Get in touch with our sauna experts</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                  <item.icon className="w-6 h-6 text-amber-600 mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              ))}
            </div>

            <form className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              
              <div className="grid gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Visit Our Showroom</h2>
            <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-6">
              {/* Replace with actual map implementation */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Map placeholder
              </div>
            </div>
            <div className="prose">
              <p className="text-gray-600 mb-4">
                Experience our saunas firsthand at our Cranston showroom. Our experts are available 
                to guide you through our range of models and help you find the perfect sauna for your needs.
              </p>
              <p className="text-gray-600">
                We recommend scheduling an appointment to ensure we can provide you with the best possible service 
                and attention during your visit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;