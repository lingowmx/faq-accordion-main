import { Answer } from "./Answer";
import { ButtonIcons } from "./ButtonIcons";
import { Question } from "./Question";
import { useState } from "react";
const myQuestions = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

export const Questions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div>
      {myQuestions.map((q, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index}>
            <div className="flex justify-between items-center pt-2 pb-2 transition-all duration-1000">
              <Question question={q.question} />
              <ButtonIcons
                isOpen={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <Answer answer={q.answer} />
            </div>
            <div className="w-full border border-lightPink mt-2"></div>
          </div>
        );
      })}
    </div>
  );
};
