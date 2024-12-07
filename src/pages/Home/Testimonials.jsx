import React from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Campaign Creator",
    feedback:
      "Crowdcube helped me bring my dream project to life. The platform is easy to use and connects you with people who truly care.",
    image: "/images/sarah.jpg",
  },
  {
    name: "James Anderson",
    role: "Donor",
    feedback:
      "Being a part of Crowdcube has been fulfilling. It feels great to contribute to causes that matter.",
    image: "/images/james.jpg",
  },
  {
    name: "Emily Carter",
    role: "Campaign Creator",
    feedback:
      "I was able to fundraise for my medical expenses through Crowdcube. The support I received was overwhelming.",
    image: "/images/emily.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">What People Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700 italic">
              "{testimonial.feedback}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
