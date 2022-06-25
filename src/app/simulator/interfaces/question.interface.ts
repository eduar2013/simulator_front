import { Answer } from "./answer.interface";
import { Topic } from "./topic.interface";

export interface QuestionInterface {
  number?:        number;
  text_question?: string[];
  answers?:       Answer[];
  topic?:         Topic;
  objective?:     string;
}
