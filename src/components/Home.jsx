
import React from "react";
import Slider from "react-slick";
const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
      };
    return (
        <div>
             <div className="w-full mx-auto py-8 bg-gradient-to-r from-blue-100 to-blue-200">
      <Slider {...settings}>
        <div className="text-center p-8">
          <h2 className="text-3xl font-bold text-blue-800">Discover Visa Info Easily</h2>
          <p className="mt-4 text-lg text-gray-700">Explore visa types, fees, and processing times with just a few clicks.</p>
        </div>
        <div className="text-center p-8">
          <h2 className="text-3xl font-bold text-green-800">Track Your Applications</h2>
          <p className="mt-4 text-lg text-gray-700">Stay updated on your visa application status in real-time.</p>
        </div>
        <div className="text-center p-8">
          <h2 className="text-3xl font-bold text-purple-800">Fast & Secure</h2>
          <p className="mt-4 text-lg text-gray-700">Our platform ensures secure handling of your visa applications.</p>
        </div>
      </Slider>
    </div>
    <div>
    <section className="bg-blue-50 py-10 mt-12 px-4">
  <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Visa Guidelines</h2>
  <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold text-lg mb-2">Interview Preparation</h3>
      <p className="text-sm text-gray-700">Get ready with common questions and documents to ensure a smooth visa interview process.</p>
    </div>
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold text-lg mb-2">Avoid Rejection</h3>
      <p className="text-sm text-gray-700">Learn the most frequent reasons why visas get rejected and how to avoid them.</p>
    </div>
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold text-lg mb-2">Faster Processing</h3>
      <p className="text-sm text-gray-700">Discover the ways to reduce delays in the processing time by following simple rules.</p>
    </div>
  </div>
</section>

    </div>

    <div>
    <section className="bg-purple-50 py-10 mt-12 px-4">
  <h2 className="text-2xl font-bold text-center text-purple-800 mb-6">What Our Users Say</h2>
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
    <div className="bg-white p-4 rounded-xl shadow flex gap-4 items-center">
      <img src="https://i.ibb.co.com/GQSKtfwz/1723144611280.jpg" alt="User" className="w-12 h-12 rounded-full" />
      <div>
        <h3 className="font-semibold text-lg">Asif Islam Bisal</h3>
        <p className="text-sm text-gray-700">“Visa Navigator made my student visa application so smooth. The guidelines were extremely helpful!”</p>
      </div>
    </div>
    <div className="bg-white p-4 rounded-xl shadow flex gap-4 items-center">
      <img src="https://i.ibb.co/album/User2.png" alt="User" className="w-12 h-12 rounded-full" />
      <div>
        <h3 className="font-semibold text-lg">Fariha Islam</h3>
        <p className="text-sm text-gray-700">“I loved the simple UI and real-time tracking of my visa status. Highly recommended!”</p>
      </div>
    </div>
  </div>
</section>

    </div>
        </div>
    );
};

export default Home;