import React from "react";

type Props = {
  question: any;
  options: any;
  onSelect: (value: string) => void;
  selectedOption: string | null;
};

const Questions = (props: Props) => {
  console.log(props.selectedOption);
  return (
    <div>
      <h3>{props.question}</h3>
      <section>
        {props.options.map((option: any, index: any) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name="options"
                value={option}
                checked={props.selectedOption === option}
                onChange={() => props.onSelect(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </section>
    </div>
  );
};

export default Questions;
