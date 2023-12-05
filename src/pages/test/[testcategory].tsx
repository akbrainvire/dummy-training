import Questions from "@/components/Questions";
import React, { useEffect, useState } from "react";

type Props = {
  questionData: any;
};

const TestEmployee = (props: Props) => {
  //   console.log(props.questionData);

  //   return (
  //     <>
  //       {props.questionData.map((question: any) => {
  //         return (
  //           <div key={question.id}>
  //             <Questions data={question} />
  //           </div>
  //         );
  //       })}
  //     </>
  //   );
  // };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState<any>([]);
  const [selectedtheoption, setSelectedtheOption] = useState({
    value: false,
    message: "",
  });

  const handleSelectOption = (option: any) => {
    setSelectedOption(option);
  };

  const checkIfAnswerIsCorrect = () => {
    if (
      selectedOption === props.questionData[currentQuestionIndex].correctAnswer
    ) {
      setSelectedtheOption((prev) => {
        return {
          ...prev,
          value: true,
          message: "Correct",
        };
      });
      setTimeout(() => {
        setSelectedtheOption((prev) => {
          return {
            ...prev,
            value: false,
            message: "",
          };
        });
        console.log("pause 1 sec");
      }, 2000);
      return <>hello there</>;
    } else {
      setSelectedtheOption((prev) => {
        return {
          ...prev,
          value: true,
          message: "Wrong",
        };
      });
      setTimeout(() => {
        setSelectedtheOption((prev) => {
          return {
            ...prev,
            value: false,
            message: "Wrong",
          };
        });
        console.log("pause 1 sec");
      }, 2000);
    }
  };
  //   console.log(selectedOption, "aasas");
  const handleNextQuestion = () => {
    // Store the selected option for the current question
    setAnswers((prevAnswers: any) => [...prevAnswers, selectedOption]);

    // Move to the next question
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    setSelectedOption(null);
    checkIfAnswerIsCorrect();
  };

  // Display a summary or redirect to a result page when all questions are answered

  if (currentQuestionIndex === props.questionData.length) {
    // All questions answered, show summary or redirect

    return (
      <div>
        <h2>Quiz Completed!</h2>
        <h3>Summary:</h3>
        <ul>
          {answers.map((answer: any, index: any) => (
            <li key={index}>
              Question {index + 1}: {answer}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const currentQuestion = props.questionData[currentQuestionIndex];

  return (
    <div>
      {selectedtheoption.value ? (
        <>
          <p>{selectedtheoption.message}</p>
        </>
      ) : (
        <>
          <Questions
            question={currentQuestion.question}
            options={currentQuestion.options}
            onSelect={handleSelectOption}
            selectedOption={selectedOption}
          />

          <button onClick={handleNextQuestion} disabled={!selectedOption}>
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default TestEmployee;

export async function getServerSideProps(context: any) {
  const params = context.params;
  console.log(params);

  function findWhatToFetch() {
    if (params.testcategory === "react") {
      return { search: "reactquestionfetch" };
    } else if (params.category === "angular") {
      return { search: "angularquestionfetch" };
    } else if (params.category === "topstores") {
      return { search: "vuequestionfetch" };
    } else {
      return console.log("NO SUCH ROUTE FOUND");
    }
  }
  const searchCategory = findWhatToFetch();

  const response = await fetch(
    `http://localhost:3000/api/${searchCategory?.search}`
  );
  const data = await response.json();
  //   console.log(searchCategory);

  return {
    props: {
      questionData: data.basic,
    },
  };
}
