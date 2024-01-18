import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  function handlePrevious() {
    if (step > 1) setStep(step - 1);
    // setStep(step >= 2 ? step - 1 : 1); // Same as the above line of code
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
    // setStep(step <= 2 ? step + 1 : 3); // Same as the above line of code
  }
  return (
    <div className="steps">
      {/* ------------ */}
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <div className="message">
        Step {step}: {messages.at(step - 1)}
      </div>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      {/* ------------ */}
    </div>
  );
}
