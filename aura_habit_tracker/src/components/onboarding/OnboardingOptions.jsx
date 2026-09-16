import fitnessIcon from "../../assets/icons/fitness.svg";
import studyIcon from "../../assets/icons/study.svg";
import productivityIcon from "../../assets/icons/productivity.svg";
import healthIcon from "../../assets/icons/health.svg";
import growthIcon from "../../assets/icons/growth.svg";

const goalIcons = {
  Fitness: fitnessIcon,
  Study: studyIcon,
  Productivity: productivityIcon,
  Health: healthIcon,
  "Personal Growth": growthIcon
};

function OnboardingOptions({
  step,
  options,
  selected,
  saveAnswer,
  answerKey
}) {
  return (
    <div
      className={`options ${
        step === 0 ? "goal-options" : "habit-options"
      }`}
    >

      {options.map((option) => (

        <button
          key={option}
          className={selected === option ? "selected" : ""}
          onClick={() =>
            saveAnswer(answerKey, option)
          }
        >

          {step === 0 && (
            <img
              src={goalIcons[option]}
              alt=""
            />
          )}

          {option}

          {step === 1 && (
            <small>
              {option === "1-3"
                ? "Focused"
                : option === "4-6"
                ? "Balanced"
                : "Mastery"}
            </small>
          )}

        </button>

      ))}

    </div>
  );
}

export default OnboardingOptions;