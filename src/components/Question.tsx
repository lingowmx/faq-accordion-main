interface QuestionsProps {
  question: string;
}

export const Question = ({ question }: QuestionsProps) => {
  return <p className="text-darkPurple font-bold lg:text-xl">{question}</p>;
};