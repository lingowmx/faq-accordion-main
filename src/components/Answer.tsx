interface AnswerProps {
  answer: string;
}

export const Answer = ({ answer }: AnswerProps) => {
  return <p className="text-grayishPurple">{answer}</p>;
};
