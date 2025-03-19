interface QuestionsProps {
  question: string;
}

export const Question = ({ question }: QuestionsProps) => {
  return <p className="text-blue-600">{question}</p>;
};