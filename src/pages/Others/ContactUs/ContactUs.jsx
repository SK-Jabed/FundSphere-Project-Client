// import React from "react";

// const ContactUs = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-100 px-6 py-10">
//       <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
//       <p className="text-lg leading-7 text-gray-300 text-center mb-10">
//         Have questions or need support? Get in touch with us, and we’ll be happy
//         to help!
//       </p>
//       <form className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
//         <div>
//           <label className="block text-gray-400 mb-2" htmlFor="name">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             className="w-full bg-gray-700 text-gray-100 p-3 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
//             placeholder="Your Name"
//           />
//         </div>
//         <div>
//           <label className="block text-gray-400 mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="w-full bg-gray-700 text-gray-100 p-3 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
//             placeholder="Your Email"
//           />
//         </div>
//         <div>
//           <label className="block text-gray-400 mb-2" htmlFor="message">
//             Message
//           </label>
//           <textarea
//             id="message"
//             rows="4"
//             className="w-full bg-gray-700 text-gray-100 p-3 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
//             placeholder="Your Message"
//           ></textarea>
//         </div>
//         <button className="w-full bg-teal-500 text-gray-900 font-bold py-3 rounded hover:bg-teal-600">
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactUs;


import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-8 text-center">Contact Us</h1>
        <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 text-center">
          Have questions, need assistance, or want to share your feedback? We’re
          here to help! Reach out to us using the form below, and our team will
          get back to you promptly.
        </p>
        <form className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-3 rounded focus:ring-2 focus:ring-teal-500 outline-none"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-3 rounded focus:ring-2 focus:ring-teal-500 outline-none"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Type your message here"
              className="w-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-3 rounded focus:ring-2 focus:ring-teal-500 outline-none"
            ></textarea>
          </div>
          <button
            className="w-full bg-teal-500 text-gray-900 font-bold py-3 rounded hover:bg-teal-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
