import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqData.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-bg-blue-700100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${open ? "transform rotate-180" : ""
                        } w-5 h-5 bg-blue-900`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqData = [
  {
    question: "What areas do you cover?",
    answer: "TyneMove provides professional van removals across Newcastle, Sunderland, Durham, and nearby towns.",
  },
  {
    question: "Do you handle both residential and commercial moves?",
    answer: "Yes, we handle full house moves, office relocations, and single-item deliveries with care.",
  },
  {
    question: "How do you ensure the safety of my belongings?",
    answer: "Our team uses proper packing techniques and secure transportation to make sure your items arrive safely and on time.",
  },
  {
    question: "How can I get a quote for my move?",
    answer: "You can get a free, no-obligation quote by contacting us via phone, email, or the online form on our website.",
  },
  {
    question: "Can I book a same-day removal service?",
    answer: "Yes, depending on availability, we offer flexible scheduling including same-day or next-day services.",
  },
];
