import Slider from "react-slick";

const testimonials = [
  { name: "Swapna", title: "Operations Head - Amazon", text: "I am thrilled! I got a great Job as an Operations Head, and I have comapny to thank for getting me in the door. They really streamlined my Resume & LinkedIn so that my Strengths and Accomplishments were highlighted. Later, I was referred through their Employee Referral Program. Truly Impressed." },
  { name: "Abhishek", title: "Sales Manager - Paytm", text: "Though, I have been a Star Performer throughout my tenure I faced difficulties while appearing for Interviews. comapny trained me based on my Skills & Profile through behavioural Interview Questions to ace my Interviews & I am successfully placed. I recommend Interview Preparation Service." },
  { name: "Asif", title: "Consultant - Accenture", text: "Over Six months, using my old Resume, I got about 5 call-backs. In just one month of using the new Resume comapny helped me create, I received 4 call-backs and landed one of them. I started work just last week. I am excited! Thank you so much, Editor, for your insights, suggestions and support." },
  { name: "Siddharth", title: "Director - Swiggy", text: "comapny helped me land a great Job. Previously, my Resume was just laundry list of Responsibilities. comapny helped me highlight my accomplishments. I started work just last week. I am excited! Thank you so much, Editor, for your insights, suggestions and support, Highly Recommended!" },
  { name: "Rachita", title: "Analyst - JPMorgan Chase & Co.", text: "I've been looking for Job for months with no luck. A friend referred me to comapny. Everything was crafted beautifully and atmosphere also good. I started work just last week. I am excited! Thank you so much, Editor, for your insights, suggestions and support, I was extremely impressed!" }
];

const Section = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="bg-[#0D1B3A] py-30 min-h-screen">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-white font-normal text-3xl">TESTIMONIALS</h2>
        <div className="h-[2px] w-[75px] bg-[#FFD700] mx-auto mt-4 shadow-[0_0_10px_#FFFF00,0_0_20px_#FFFF00]" />
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="p-3 flex">
              <div className="bg-[#1B2A5B] p-6 text-white flex flex-col rounded-lg shadow-md">
                <div className="text-[2rem] text-[#FF7F50]">&ldquo;</div>
                <h5 className="mt-2 text-lg font-semibold">{item.title}</h5>
                <p className="text-base font-normal">{item.text}</p>
                <p className="font-bold mt-2 text-[#FF7F50]">{item.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Section;
