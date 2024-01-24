import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    // setStep(step > 1 ? step - 1 : step); // Same as the above line of code
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
    // setStep(step < 3 ? step + 1 : step); // Same as the above line of code
  }

  return (
    <>
      <Steps
        step={step}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      >
        <StepMessage step={step}>
          {messages.at(step - 1)}
          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              handleClick={handlePrevious}
            >
              <span>👈</span>Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" handleClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </StepMessage>
      </Steps>
      <Calc />
    </>
  );
}

function Steps({ step, handlePrevious, handleNext, children }) {
  const [isOpen, setIsOpen] = useState(true);

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
          {children}
          {/* <StepMessage step={step}>{messages.at(step - 1)}</StepMessage> */}
          {/* <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              handleClick={handlePrevious}
            >
              <span>👈</span>Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" handleClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div> */}
          {/* ------------ */}
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, handleClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={handleClick}
    >
      {children}
    </button>
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
