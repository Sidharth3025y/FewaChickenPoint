import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-amber-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-200 mb-2">Lakeside, Pokhara, Nepal</p>
            <p className="text-gray-200 mb-2">Phone: +977 123 456 789</p>
            <p className="text-gray-200 mb-2">Email: info@restaurant.com</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-200 hover:text-white transition duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.91 8-4.94 8-9.95z"/></svg>
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 15h-3v-3h3v3zm0-4h-3v-3h3v3zm-4 4h-3v-3h3v3zm0-4h-3v-3h3v3zm-4 4H7v-3h3v3zm0-4H7v-3h3v3z"/></svg>
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Location</h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.223805015431!2d83.9830213150625!3d28.209582982582893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995955b13a6b351%3A0x2c33b148b0b54362!2sPokhara%2C%20Nepal!5e0!3m2!1sen!2sus!4v1698765432109!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pokhara Location"
              ></iframe>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-white transition duration-200">Home</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition duration-200">Menu</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition duration-200">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-300">
          <p>&copy; 2025 Fewa Chicken Point. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};