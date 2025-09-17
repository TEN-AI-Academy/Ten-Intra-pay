import Banner from '../components/Banner'
import BreadCrum from '../components/BreadCrum'
import Accordian from '../components/Accordian'
import NeedHelp from '../components/NeedHelp'

const BannerText = () => {
  return (
    <div className='text-white font-sans'>
      <p className='text-xl font-bold'>
        Find Answers to Your{' '}
        <span className='font-extrabold'>Career Questions</span>
      </p>
      <span className='font-semibold'>
        Get clarity on our services, pricing, and process
      </span>
    </div>
  )
}

const Faq = () => {
  const breadCrum = [
    { name: 'Home', link: '/' },
    { name: 'FAQ', link: '#' }
  ]

  const faqData = [
    {
      heading: "What services do you offer?",
      text: "We offer comprehensive career services including Professional Resume Writing, LinkedIn Profile Makeover, Profile Evaluation, and Employee Referral Programs. Our services are designed to help job seekers stand out from the competition and secure their dream jobs."
    },
    {
      heading: "How long does it take to get my resume ready?",
      text: "Our standard delivery time is 8 working days for the first version and 14 working days for final delivery. We also offer express services: Express (4 working days) for ₹1000 extra and Priority (2 working days) for ₹2000 extra. Working days are Monday to Friday."
    },
    {
      heading: "What is included in the resume writing service?",
      text: "Our resume writing service includes ATS-optimized formatting, relevant keywords integration, professional content writing, industry-standard checklist compliance, and unlimited revisions. We also offer add-on services like Cover Letter (₹499), LinkedIn Makeover (₹1999), and Naukri Profile Makeover (₹2999)."
    },
    {
      heading: "Do you offer any discounts or combo packages?",
      text: "Yes! When you add any 2 or more services, you get 25% off on add-on services. We also have promotional codes available from time to time. Contact our team to learn about current offers and discounts."
    },
    {
      heading: "What makes your resume different from others?",
      text: "Our resumes are crafted by certified, award-winning writers who create visually appealing, ATS-friendly resumes that impress recruiters within 30 seconds. We focus on highlighting your accomplishments rather than just listing responsibilities, and we customize each resume based on your industry and experience level."
    },
    {
      heading: "How do you determine pricing for resume services?",
      text: "Pricing is based on your years of experience: 0-3 years (₹1999), 3-8 years (₹4999), 8-15 years (₹5999), and 15+ years (₹6999). Additional charges apply for express delivery and add-on services like cover letters and profile makeovers."
    },
    {
      heading: "What is the revision policy?",
      text: "We offer unlimited revisions to ensure your complete satisfaction. On average, clients take 2 iterations to finalize their resume. Our team works closely with you to incorporate feedback and make necessary adjustments until you're completely satisfied with the final product."
    },
    {
      heading: "Do you work with all industries and experience levels?",
      text: "Yes, we work with professionals across all industries and experience levels, from fresh graduates to senior executives. Our writers are trained to handle diverse profiles and industry requirements, ensuring each resume is tailored to your specific field and career goals."
    },
    {
      heading: "What information do I need to provide?",
      text: "After payment, our professional resume writer will connect with you to collect relevant information including your work experience, education, skills, achievements, career objectives, and any specific requirements. We'll guide you through the entire process to ensure we capture all necessary details."
    },
    {
      heading: "How does the LinkedIn Profile Makeover work?",
      text: "Our LinkedIn makeover service includes optimizing your headline, summary, experience descriptions, skills section, and profile photo recommendations. We ensure your LinkedIn profile aligns with your resume and attracts the right recruiters and opportunities in your field."
    },
    {
      heading: "What is your refund policy?",
      text: "We are committed to your satisfaction. If you're not happy with our service, please contact us within 7 days of delivery. We'll work with you to address any concerns or provide a refund if we cannot meet your expectations after reasonable attempts to resolve issues."
    },
    {
      heading: "How can I track the progress of my order?",
      text: "Once you place an order, you'll receive a confirmation email with your order details. Our writer will contact you within 24 hours to begin the process. You can also reach out to our customer support team at any time for updates on your order status."
    },
    {
      heading: "Do you provide interview preparation services?",
      text: "Yes, we offer interview preparation services as part of our comprehensive career support. Our experts provide behavioral interview training, industry-specific questions, and personalized coaching to help you ace your interviews and land your dream job."
    },
    {
      heading: "Can you help with career change transitions?",
      text: "Absolutely! We specialize in helping professionals transition between industries and roles. Our writers understand how to highlight transferable skills and present your experience in a way that appeals to recruiters in your target industry."
    },
    {
      heading: "What file formats do you provide?",
      text: "We provide your resume in multiple formats including PDF (recommended for online applications), Word document (for easy editing), and plain text format (for online forms). All formats are optimized for ATS systems and professional presentation."
    }
  ]

  return (
    <div className=''>
      <Banner image_path={'banner4.jpeg'} text={<BannerText />} />

      <div className='my-8 md:mx-20 mx-2'>
        <BreadCrum data={breadCrum} />

        <div className='text-center my-8'>
          <h1 className='text-3xl md:text-4xl font-bold text-blue-800 mb-4'>
            Frequently Asked Questions
          </h1>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Get answers to common questions about our career services, pricing, 
            and process. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className='mx-6 md:mx-10 my-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='space-y-4'>
              {faqData.slice(0, 8).map((faq, index) => (
                <div key={index} className='my-2'>
                  <Accordian
                    text={faq.text}
                    heading={faq.heading}
                  />
                </div>
              ))}
            </div>
            <div className='space-y-4'>
              {faqData.slice(8).map((faq, index) => (
                <div key={index + 8} className='my-2'>
                  <Accordian
                    text={faq.text}
                    heading={faq.heading}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='mx-6 md:mx-10 my-8'>
          <div className='bg-blue-50 p-6 rounded-lg border-l-4 border-blue-800'>
            <h3 className='text-xl font-semibold text-blue-800 mb-3'>
              Still Have Questions?
            </h3>
            <p className='text-gray-700 mb-4'>
              Our customer support team is here to help you with any questions 
              or concerns. We're available Monday through Friday, 9 AM to 6 PM.
            </p>
            <div className='flex flex-col md:flex-row gap-4'>
              <div className='flex items-center'>
                <span className='text-blue-800 font-semibold mr-2'>📞</span>
                <span>+91 1234567890</span>
              </div>
              <div className='flex items-center'>
                <span className='text-blue-800 font-semibold mr-2'>✉️</span>
                <span>company@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className='mx-6 md:mx-10 my-8'>
          <NeedHelp />
        </div>

        <div className='mx-6 md:mx-10 my-8'>
          <div className='bg-gradient-to-r from-blue-800 to-blue-600 text-white p-8 rounded-lg'>
            <h3 className='text-2xl font-bold mb-4'>
              Ready to Transform Your Career?
            </h3>
            <p className='text-lg mb-6'>
              Don't let a poorly crafted resume hold you back. Our professional 
              writers are ready to help you create a resume that gets you noticed 
              by top employers.
            </p>
            <div className='flex flex-col md:flex-row gap-4'>
              <a 
                href='/resume-writing-services-india'
                className='bg-white text-blue-800 px-6 py-3 rounded-full font-semibold text-center hover:bg-gray-100 transition-colors'
              >
                Get Started Now
              </a>
              <a 
                href='/linkedin-profile-makeover-india'
                className='border-2 border-white text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-white hover:text-blue-800 transition-colors'
              >
                LinkedIn Makeover
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
