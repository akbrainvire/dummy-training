// pages/api/questions.js

import questionsData from "../../data/questions.json"; // Import your question data

// Function to get random questions from a given array
const getRandomQuestions = (questionsArray: any, count: any) => {
  const shuffled = questionsArray.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default function handler(req: any, res: any) {
  const basicQuestions = getRandomQuestions(questionsData.data.basic, 10);
  const intermediateQuestions = getRandomQuestions(
    questionsData.data.intermediate,
    10
  );
  const advancedQuestions = getRandomQuestions(questionsData.data.advanced, 10);

  const randomQuestions = {
    basic: basicQuestions,
    intermediate: intermediateQuestions,
    advanced: advancedQuestions,
  };

  console.log(randomQuestions);
  res.json(randomQuestions);
}
