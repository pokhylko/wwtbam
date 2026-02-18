export interface Answer {
  id: string;
  option: string;
  isCorrect: boolean;
}

export interface QuestionType {
  id: number;
  question: string;
  answers: Answer[];
  prize: number;
}
