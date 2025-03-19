interface AnswerProps {
  answer: string;
}

export const Answer = ({ answer }: AnswerProps) => {
  return <div>{answer}</div>;
};
