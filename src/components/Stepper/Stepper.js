import React, { useContext, useEffect } from "react";
import { FormContext } from "../../App";

function Stepper() {
  const { activeStepIndex } = useContext(FormContext);
  useEffect(() => {
    const stepperItems = document.querySelectorAll(".stepper-item");
    stepperItems.forEach((step, i) => {
      if (i <= activeStepIndex) {
        step.classList.add("bg-indigo-500", "text-white", "py-2");
        step.classList.remove("border-2","py-1");
      } else {
        step.classList.remove("bg-indigo-500", "text-white");
      }
    });
    const stepperLine = document.querySelectorAll(".stepper-line");
    stepperLine.forEach((line, i) => {
      if (i <= activeStepIndex) {
        line.style.border = "1px solid #6600ff";
      } else {
        line.style.border = "";
      }
    });
  }, [activeStepIndex]);
  return (
    <>
      <div className="text-1xl font-medium self-center mt-5"><img src="eden_logo.png" className="App-logo" alt="logo" /></div>
      <div className="w-2/5 flex flex-row flex-wrap items-center justify-center px-32 py-16">
        <div className="stepper-item w-10 h-10 text-center font-small py-2 rounded-full">
          1
        </div>
        <div className="stepper-line flex-auto border-t-2"></div>
        <div className="stepper-item w-10 h-10 text-center font-small py-1 border-2 rounded-full">
          2
        </div>
        <div className="stepper-line flex-auto border-t-2"></div>
        <div className="stepper-item w-10 h-10 text-center font-small py-1 border-2 rounded-full">
          3
        </div>
        <div className="stepper-line flex-auto border-t-2"></div>
        <div className="stepper-item w-10 h-10 text-center font-small py-1 border-2 rounded-full">
          4
        </div>
      </div>
    </>
  );
}

export default Stepper;
