import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-8 text-center">About Us</h1>
        <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 text-center">
          Welcome to <span className="text-teal-500 font-bold">FundSphere</span>
          , your trusted partner for bringing dreams to life. FundSphere is a
          modern crowdfunding platform designed for creators, entrepreneurs, and
          organizations who want to make an impact. We are dedicated to bridging
          the gap between ideas and the resources needed to achieve them.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-teal-500 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              To create a world where anyone with an idea has the opportunity to
              make it a reality. We envision a platform that fosters creativity,
              innovation, and collaboration across diverse communities and
              causes.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-teal-500 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Empower individuals and organizations to raise funds in a secure
              and user-friendly environment. We are committed to supporting
              causes that inspire change and make the world a better place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

