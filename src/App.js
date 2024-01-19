import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <>
      <Steps />
      <Calc />
    </>
  );
}

function Steps() {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    // setStep(step >= 2 ? step - 1 : 1); // Same as the above line of code
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
    // setStep(step <= 2 ? step + 1 : 3); // Same as the above line of code
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((cur) => !cur)}>
        &times;
      </button>
      {isOpen && (
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
      )}
    </>
  );
}

function Calc() {
  const [stepper, setStepper] = useState(1);
  const [calcAdd, setCalcAdd] = useState(0);
  const handleStepper = () => {
    setStepper((cur) => cur + 1);
  };
  const handleCalcAdd = () => {
    setCalcAdd((cur) => cur + stepper);
  };
  return (
    <div style={{ padding: "30px" }}>
      <h1 onClick={handleStepper}>Stepper: {stepper}</h1>
      <h2 onClick={handleCalcAdd}>calcAdd: {calcAdd}</h2>
    </div>
  );
}
