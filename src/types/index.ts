export type Answer = {
  id: string;
  option: string;
  isCorrected: boolean;
};

export type QuestionType = {
  id: number;
  question: string;
  answers: Answer[];
  prize: number;
};
