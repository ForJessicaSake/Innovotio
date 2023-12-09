import FaqDropdown from "@/components/micro/about/faq";
const Data = [
  {
    question: "Can I curate a custom order for merch with Innovotio?",
    answer:
      "Yes! Our clients are allowed to select curated merchandise tailored to thier tech events and branding requirements.",
  },
  {
    question: "What is the minimum order per item?",
    answer:
      "The minimum order quantity for individuals is one unit and fifty units for bulk orders",
  },
  {
    question: "What is the estimated delivery time for Innovotio merch?",
    answer:
      "Our delivery time for prints is within 72 hours for non-bulk orders and 2 weeks for bulk orders.",
  },

  {
    question: "How does innovotio vet tech talents?",
    answer:
      "Innovotio's human resource team reviews talent applications, and evaluates talents to match the best fit for the role available.",
  },
];

const Faqs = () => {
  return (
    <div className="pt-14 lg:pt-24">
      <div data-aos="fade-right" className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        <div className="lg:col-span-1">
          <div>
            <p className="text-section font-medium text-sm">FAQs</p>
            <h1 className="pt-2 lg:text-4xl md:text-3xl text-2xl xl:text-[44px] max-w-md font-medium text-text">
              Frequently Asked Questions
            </h1>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="space-y-5 pt-6">
            {Data.map((faq, index) => (
              <FaqDropdown
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
      <hr className="lg:mt-24 mt-14 opacity-10" />
    </div>
  );
};

export default Faqs;
