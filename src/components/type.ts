export type typeWords = {
  id: any;
  turkish: string;
  english: string;
};
export type typeAnswers = {
  id: number;
  answer: string;
};
export interface ContextProps {
  addWord: (turkish: string, english: string) => Promise<void>;
  words: typeWords[];
  fetchWords: () => Promise<void>;
}
