import "../css/Onboarding.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Progress from "../components/onboarding/Progress";
import OnboardingOptions from "../components/onboarding/OnboardingOptions";
import Reminder from "../components/onboarding/Reminder";

const questions = [
  {
    title: "What are your goals?",
    key: "goal",
    options: [
      "Fitness",
      "Study",
      "Productivity",
      "Health",
      "Personal Growth"
    ]
  },
  {
    title: "How many habits to track?",
    key: "habitCount",
    options: ["1-3", "4-6", "7+"]
  }
];

function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(
    JSON.parse(localStorage.getItem("auraOnboarding")) || {}
  );

  function saveAnswer(key, value) {
    const newAnswers = {
      ...answers,
      [key]: value
    };

    setAnswers(newAnswers);
    localStorage.setItem(
      "auraOnboarding",
      JSON.stringify(newAnswers)
    );
  }

  function next() {
    if (step < 2) {
      setStep(step + 1);
    } else {
      navigate("/dashboard");
    }
  }

  function previous() {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  const question = questions[step];
  return (
    <div className="onboarding">
      <h2 className="brand">AURA</h2>
      <div className="content">
        <Progress step={step} />
        <h1>
          {step === 2
            ? "Set your reminder time"
            : question.title}
        </h1>
        {step < 2 ? (
          <OnboardingOptions
            step={step}
            options={question.options}
            selected={answers[question.key]}
            saveAnswer={saveAnswer}
            answerKey={question.key}
          />
        ) : (
          <Reminder
            value={answers.reminderTime}
            saveAnswer={saveAnswer}
          />
        )}

        <div className="actions">
          <button
            className="previous"
            onClick={previous}
            disabled={step === 0}
          >
            ← Previous
          </button>

          <button
            className="next"
            onClick={next}
          >
            {step === 2 ? "Continue" : "Next →"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default Onboarding;