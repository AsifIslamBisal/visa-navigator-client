import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
            <footer className="bg-purple-100 text-purple-800 mt-12 py-6 border-t border-purple-200">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
        
        <div>
          <h2 className="text-xl font-bold">Visa Navigator</h2>
          <p className="text-sm mt-1">Your trusted visa assistant platform.</p>
        </div>

        
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p>Email: <a href="mailto:info@visanavigator.com" className="underline">info@visanavigator.com</a></p>
          <p>Phone: +880 1234 567 890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-lg">
            <a href="https://www.facebook.com/asifislam.bisal.3" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="hover:text-blue-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="hover:text-blue-500" />
            </a>
            <a href="https://www.instagram.com/asif_islam_bisal?igsh=MTUwNDVuNWJwN2E0cg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a href="mailto:info@visanavigator.com" aria-label="Email">
              <FaEnvelope className="hover:text-red-500" />
            </a>
          </div>
        </div>

      </div>

      <div className="text-center text-sm text-purple-700 mt-6">
        © {new Date().getFullYear()} Visa Navigator. All rights reserved.
      </div>
    </footer>
        </div>
    );
};

export default Footer;