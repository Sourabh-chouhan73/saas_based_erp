// pages/faq.js
import Head from 'next/head';

const faqs = [
  {
    question: "What is Next.js?",
    answer: "Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites."
  },
  {
    question: "How do I use Bootstrap with Next.js?",
    answer: "You can use Bootstrap with Next.js by installing the Bootstrap package and importing the CSS file in your _app.js file."
  },
  // Add more FAQs as needed
];

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ Page</title>
        <meta name="description" content="Frequently Asked Questions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mt-5 mb-5">
        <h1 className="mb-4 text-center">Any Questions?</h1>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
