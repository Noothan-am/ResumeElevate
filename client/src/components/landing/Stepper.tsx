import React from "react";
interface StepperProgressProps {
  currentStep: number;
  totalSteps: number;
}
const StepperProgress = ({ currentStep, totalSteps }: StepperProgressProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between text-sm font-medium">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`flex items-center ${
              i + 1 <= currentStep ? "text-white" : "text-gray-400"
            }`}
          >
            <span
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                i + 1 <= currentStep
                  ? "bg-gradient-to-r from-blue-400 to-purple-400 text-white"
                  : "bg-gray-700"
              }`}
            >
              {i + 1}
            </span>
          </div>
        ))}
      </div>
      <div className="stepper-progress">
        <div
          className="stepper-progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
export default StepperProgress;
